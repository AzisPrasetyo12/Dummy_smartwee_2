import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
// import basicSsl from '@vitejs/plugin-basic-ssl';
// import svgr from "vite-plugin-svgr";
import * as path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    // svgr(),
    // basicSsl(),
  ],
  server: {
    host: true,
    // https: true,
  },
});
