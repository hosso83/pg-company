import type { Config } from "payload/config";
import path from "path";
import { fileURLToPath } from "url";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { Users } from "./payload/collections/Users.ts";
import { Projects } from "./payload/collections/Projects.ts";
import { Services } from "./payload/collections/Services.ts";
import { TeamMembers } from "./payload/collections/TeamMembers.ts";
import { Media } from "./payload/collections/Media.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  secret: process.env.PAYLOAD_SECRET || "supersecretkey123456789abcdefghijklmnopqrstuvwxyz",
  admin: {
    user: "users",
  },
  collections: [Users, Projects, Services, TeamMembers, Media],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "mongodb://localhost:27017/pg-company",
  }),
} satisfies Config;
