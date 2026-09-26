import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default defineConfig(
  { ignores: ['node_modules/', 'eslint.config.mjs'] },
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  { languageOptions: { parserOptions: { projectService: true } } },
  {
    files: ['tests/**/*.ts'],
    rules: {
      'no-restricted-imports': ['error', {
        patterns: [{ regex: '(^|/)src(/|$)', message: 'tests から src を import しない（テストの独立性）' }],
      }],
    },
  },
);