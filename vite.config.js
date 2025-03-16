import { defineConfig } from "vite"
import path from "path"
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
//"@": path.resolve(__dirname, "./src"),
export default defineConfig({
  plugins: [react(),
  tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve( "./src"),
    },
  },
})
