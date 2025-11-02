import { defineConfig } from 'vite';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages でも動くようビルド出力を相対参照に
  base: './',
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(dirname(fileURLToPath(import.meta.url)), 'index.html'),
        katori: resolve(dirname(fileURLToPath(import.meta.url)), 'katori/index.html'),
      },
    },
  },
});
