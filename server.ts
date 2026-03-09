import "dotenv/config";
import express from "express";
import payload from "payload";
import config from "./payload.config.ts";

const app = express();

// Redirect root to admin
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  const secret = process.env.PAYLOAD_SECRET || "supersecretkey123456789abcdefghijklmnopqrstuvwxyz";
  
  await payload.init({
    config,
    secret,
    express: app,
    onInit: async () => {
      payload.logger.info(
        `✓ Payload Admin: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}/admin`,
      );
    },
  });

  app.listen(3001, () => {
    console.log("✓ Payload CMS running on http://localhost:3001");
  });
};

start().catch((err) => {
  console.error("Failed to start Payload:", err);
  process.exit(1);
});
