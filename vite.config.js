import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages でも動くようビルド出力を相対参照に
  base: './',
  plugins: [svelte()],
});
