import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve : {
    alias : {
      "@" : path.resolve(__dirname , "./src"),
      "@styles" : path.resolve(__dirname , "./src/styles"),
      "@components" : path.resolve(__dirname , "./src/components"),
      "@pages" : path.resolve(__dirname , "./src/pages"),
      "@services" : path.resolve(__dirname , "./src/services"),
      "@layout" : path.resolve(__dirname , "./src/layout"),
      "@contexts" : path.resolve(__dirname , "./src/contexts"),
      "@hooks" : path.resolve(__dirname , "./src/hooks"),
    }
  }
})