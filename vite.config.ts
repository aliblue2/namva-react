import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      register: {
        target: "https://moviesapi.ir/api/v1/",
        changeOrigin: true,
      },
    },
    host: true,
  },
});
