import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";

async function start() {
  const app = express();
  app.use(express.json({ limit: "10mb" }));

  if (isProduction) {
    const staticPath = path.resolve(__dirname, "../public");
    app.use(express.static(staticPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(staticPath, "index.html"));
    });
  } else {
    const vite = await createViteServer({
      configFile: path.resolve(__dirname, "../../vite.config.ts"),
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  const port = parseInt(process.env.PORT || "3000", 10);

  // Find available port
  const server = app.listen(port, () => {
    console.log(`PhyCap Brand HQ running at http://localhost:${port}/`);
  });

  server.on("error", (err: NodeJS.ErrnoException) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Port ${port} in use, trying ${port + 1}...`);
      app.listen(port + 1, () => {
        console.log(`PhyCap Brand HQ running at http://localhost:${port + 1}/`);
      });
    }
  });
}

start().catch(console.error);
