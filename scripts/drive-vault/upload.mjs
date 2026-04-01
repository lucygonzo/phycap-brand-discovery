#!/usr/bin/env node

/**
 * PhyCap Brand HQ Vault Uploader
 * Uploads the vault folder structure to Google Drive under "PhyCap Fund - Brand HQ"
 *
 * Usage: node upload.mjs [--dry-run]
 */

import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const VAULT_ROOT = path.resolve(__dirname, "../../");
const CREDENTIALS_PATH = path.join(__dirname, "token.json");
const SAVED_TOKEN_PATH = path.join(__dirname, "oldtoken.json");
const BRAND_HQ_FOLDER_ID = "1bI4deGLYydQ3_QQ3FtJ7kg3lYniw73Au";

// Vault folders to upload (ordered)
const VAULT_FOLDERS = [
  "00-Overview",
  "01-Identity",
  "02-Company",
  "03-Visual",
  "04-Verbal",
  "05-Services",
  "06-Audience",
  "07-Competitive",
  "08-Digital",
  "09-Go-to-Market",
  "10-Journey",
  "11-Product",
  "12-Portfolio",
  "13-Workspace",
  "14-Gap-Analysis",
  "15-Revenue-Model",
  "16-Decision-Log",
  "17-Report-Card",
  "18-GP-Content",
];

const DRY_RUN = process.argv.includes("--dry-run");

async function getAuth() {
  const creds = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf8"));
  const { client_id, client_secret, redirect_uris } = creds.installed;

  const oauth2 = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  // Load saved refresh token
  if (fs.existsSync(SAVED_TOKEN_PATH)) {
    const saved = JSON.parse(fs.readFileSync(SAVED_TOKEN_PATH, "utf8"));
    oauth2.setCredentials({
      refresh_token: saved.refresh_token,
    });

    // Force a token refresh to get a fresh access token
    console.log("Refreshing access token...");
    const { credentials } = await oauth2.refreshAccessToken();
    oauth2.setCredentials(credentials);

    // Save refreshed token
    fs.writeFileSync(SAVED_TOKEN_PATH, JSON.stringify(credentials, null, 2));
    console.log("Token refreshed successfully.\n");
  } else {
    console.error("No saved token found at", SAVED_TOKEN_PATH);
    console.error("Run an OAuth flow first to generate a refresh token.");
    process.exit(1);
  }

  return oauth2;
}

async function findOrCreateFolder(drive, name, parentId) {
  // Check if folder already exists
  const res = await drive.files.list({
    q: `name = '${name}' and '${parentId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
    fields: "files(id, name)",
    spaces: "drive",
  });

  if (res.data.files && res.data.files.length > 0) {
    console.log(`  Folder exists: ${name} (${res.data.files[0].id})`);
    return res.data.files[0].id;
  }

  // Create folder
  const folder = await drive.files.create({
    requestBody: {
      name,
      mimeType: "application/vnd.google-apps.folder",
      parents: [parentId],
    },
    fields: "id",
  });

  console.log(`  Created folder: ${name} (${folder.data.id})`);
  return folder.data.id;
}

async function uploadFile(drive, filePath, parentId) {
  const fileName = path.basename(filePath);

  // Check if file already exists (update instead of duplicate)
  const existing = await drive.files.list({
    q: `name = '${fileName}' and '${parentId}' in parents and trashed = false`,
    fields: "files(id, name)",
    spaces: "drive",
  });

  const media = {
    mimeType: "text/markdown",
    body: fs.createReadStream(filePath),
  };

  if (existing.data.files && existing.data.files.length > 0) {
    // Update existing file
    const fileId = existing.data.files[0].id;
    await drive.files.update({
      fileId,
      media,
    });
    console.log(`    Updated: ${fileName}`);
    return fileId;
  }

  // Create new file
  const file = await drive.files.create({
    requestBody: {
      name: fileName,
      parents: [parentId],
    },
    media,
    fields: "id",
  });

  console.log(`    Uploaded: ${fileName}`);
  return file.data.id;
}

async function main() {
  if (DRY_RUN) {
    console.log("DRY RUN: No files will be uploaded.\n");
  }

  console.log("PhyCap Brand HQ Vault Uploader");
  console.log("==============================\n");
  console.log(`Vault root: ${VAULT_ROOT}`);
  console.log(`Target Drive folder: PhyCap Fund - Brand HQ (${BRAND_HQ_FOLDER_ID})\n`);

  // Count files
  let totalFiles = 0;
  for (const folder of VAULT_FOLDERS) {
    const folderPath = path.join(VAULT_ROOT, folder);
    if (fs.existsSync(folderPath)) {
      const files = fs.readdirSync(folderPath).filter((f) => f.endsWith(".md"));
      totalFiles += files.length;
    }
  }
  console.log(`Found ${totalFiles} markdown files across ${VAULT_FOLDERS.length} folders.\n`);

  if (DRY_RUN) {
    for (const folder of VAULT_FOLDERS) {
      const folderPath = path.join(VAULT_ROOT, folder);
      if (!fs.existsSync(folderPath)) continue;
      const files = fs.readdirSync(folderPath).filter((f) => f.endsWith(".md"));
      console.log(`${folder}/`);
      for (const file of files) {
        console.log(`  ${file}`);
      }
    }
    console.log("\nDry run complete. Run without --dry-run to upload.");
    return;
  }

  const auth = await getAuth();
  const drive = google.drive({ version: "v3", auth });

  // Test connection
  try {
    await drive.files.get({ fileId: BRAND_HQ_FOLDER_ID, fields: "id, name" });
    console.log("Connected to Google Drive.\n");
  } catch (err) {
    console.error("Failed to connect to Google Drive:", err.message);
    console.error("The access token may be expired. Re-authenticate and update token.json.");
    process.exit(1);
  }

  let uploaded = 0;
  let errors = 0;

  for (const folder of VAULT_FOLDERS) {
    const folderPath = path.join(VAULT_ROOT, folder);
    if (!fs.existsSync(folderPath)) {
      console.log(`Skipping ${folder}/ (not found locally)`);
      continue;
    }

    console.log(`\n${folder}/`);

    try {
      const folderId = await findOrCreateFolder(drive, folder, BRAND_HQ_FOLDER_ID);

      const files = fs.readdirSync(folderPath).filter((f) => f.endsWith(".md"));
      for (const file of files) {
        try {
          await uploadFile(drive, path.join(folderPath, file), folderId);
          uploaded++;
        } catch (err) {
          console.error(`    FAILED: ${file} (${err.message})`);
          errors++;
        }
      }
    } catch (err) {
      console.error(`  FAILED to create/find folder: ${err.message}`);
      errors++;
    }
  }

  console.log(`\n==============================`);
  console.log(`Upload complete: ${uploaded} files uploaded, ${errors} errors.`);
  if (errors > 0) {
    console.log("Re-run the script to retry failed uploads (existing files will be updated, not duplicated).");
  }
}

main().catch((err) => {
  console.error("Fatal error:", err.message);
  process.exit(1);
});
