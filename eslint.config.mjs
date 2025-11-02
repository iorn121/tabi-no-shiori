import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // 無視パターン
  { ignores: ['dist/**', 'node_modules/**'] },

  // ブラウザ環境のグローバルを定義（no-undef 回避）
  {
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        history: 'readonly',
        location: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
      },
    },
  },

  // JS 推奨
  js.configs.recommended,

  // TypeScript 推奨（型チェックなし・シンプル構成）
  ...tseslint.configs.recommended,

  // Svelte 推奨（Flat Config）
  ...svelte.configs['flat/recommended'],

  // Svelte ファイルのパーサ設定（<script lang="ts">対応）
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelte.parser,
      parserOptions: {
        // Svelte 内の <script lang="ts"> を TypeScript として解釈
        parser: tseslint.parser,
      },
    },
    rules: {
      // 必要に応じてここに Svelte ルール上書きを追加
    },
  },

  // Prettier と競合するルールを無効化
  eslintConfigPrettier,
];
