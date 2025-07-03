// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path"; // 👈 Import 'path' for aliasing

export default defineConfig({
  base: "/My-portfolio/", // ✅ Important for GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 👈 Add this alias
    },
  },
});
