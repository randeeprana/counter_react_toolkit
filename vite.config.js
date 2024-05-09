import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/counter_react_toolkit/",
  plugins: [react()],
  base: "/vite-deploy/",
});
