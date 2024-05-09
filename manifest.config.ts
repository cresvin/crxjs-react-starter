import { defineManifest } from "@crxjs/vite-plugin";
import { description, version } from "./package.json";

export default defineManifest(async (env) => ({
  name:
    env.mode === "stagging"
      ? "[INTERNAL] CRXJS React Starter"
      : "CRXJS React Starter",
  manifest_version: 3,
  version,
  description,
  action: {
    default_popup: "src/pages/popup/index.html",
  },
  icons: {
    "16": "src/assets/icons/16x16.png",
    "32": "src/assets/icons/32x32.png",
    "48": "src/assets/icons/32x32.png",
    "128": "src/assets/icons/128x128.png",
  },
}));
