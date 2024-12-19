import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Introduced to reduce the chunk size under 500 KB
          vendors: ["react", "react-dom"],
        },
      },
    },
  },
});
