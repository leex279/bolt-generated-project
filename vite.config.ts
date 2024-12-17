import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'src', 'main.ts')
    }
  },
  server: {
    port: 3000
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
