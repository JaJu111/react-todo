import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    target: 'es2020', // Совместимость с Node.js 14
  },
  server: {
    port: 3000, // Укажите нужный порт
  },
});