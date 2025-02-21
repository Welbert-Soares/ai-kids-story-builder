
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: "./src/config/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://fabulinha-ia_owner:npg_53AofPtChiOM@ep-weathered-scene-a8gspd4f-pooler.eastus2.azure.neon.tech/fabulinha-ia?sslmode=require",
  },
  verbose: true,
  strict: true,
})