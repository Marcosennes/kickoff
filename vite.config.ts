// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // <--- Importe o plugin do Tailwind
import path from 'path'; // <--- Importe o módulo 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss() // <--- Adicione o plugin aqui
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // <--- Configure o alias @
    },
  },
});