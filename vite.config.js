import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [".ngrok-free.app"], // Allow all Ngrok subdomains
    host: true, // Listen on all network interfaces
    port: 5173, // Your Vite server port
  },
});
