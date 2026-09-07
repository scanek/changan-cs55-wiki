import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Allows deploying to any subfolder / GitHub Pages
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1500,
  }
});
