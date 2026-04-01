#!/usr/bin/env node

/**
 * Google Drive OAuth2 Authorization Flow
 * Run this once to generate a refresh token, then use upload.mjs to upload files.
 *
 * Usage: node auth.mjs
 */

import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import http from "http";
import { URL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = path.join(__dirname, "token.json");
const SAVED_TOKEN_PATH = path.join(__dirname, "oldtoken.json");

async function main() {
  const creds = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf8"));
  const { client_id, client_secret } = creds.installed;

  const REDIRECT_URI = "http://localhost:3333";
  const oauth2 = new google.auth.OAuth2(client_id, client_secret, REDIRECT_URI);

  const authUrl = oauth2.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: ["https://www.googleapis.com/auth/drive"],
  });

  console.log("Opening browser for authorization...\n");
  console.log("If the browser does not open, visit this URL:\n");
  console.log(authUrl);
  console.log("\nWaiting for callback on http://localhost:3333 ...\n");

  // Open browser
  const { exec } = await import("child_process");
  exec(`open "${authUrl}"`);

  // Start local server to catch the redirect
  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, REDIRECT_URI);
    const code = url.searchParams.get("code");

    if (!code) {
      res.writeHead(400);
      res.end("No authorization code received.");
      return;
    }

    try {
      const { tokens } = await oauth2.getToken(code);
      fs.writeFileSync(SAVED_TOKEN_PATH, JSON.stringify(tokens, null, 2));

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Authorization successful!</h1><p>You can close this tab. Return to the terminal.</p>");

      console.log("Authorization successful! Token saved to oldtoken.json");
      console.log("\nYou can now run: node upload.mjs");

      server.close();
      process.exit(0);
    } catch (err) {
      res.writeHead(500);
      res.end("Failed to exchange authorization code: " + err.message);
      console.error("Failed:", err.message);
      server.close();
      process.exit(1);
    }
  });

  server.listen(3333);
}

main().catch((err) => {
  console.error("Fatal error:", err.message);
  process.exit(1);
});
