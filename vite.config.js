import { existsSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The resume link only renders once the web-safe PDF exists, so the live site never links to a 404.
const hasResume = existsSync(new URL("./public/Mayank_Jain_Resume.pdf", import.meta.url));

export default defineConfig({
  plugins: [react()],
  define: {
    __HAS_RESUME__: JSON.stringify(hasResume),
  },
});
