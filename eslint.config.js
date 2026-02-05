import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  // ❌ ignore build output
  { ignores: ['dist'] },

  // ✅ BASE RULESETS (JS + TS)
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // ✅ PROJECT RULES (TS / TSX)
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // React Fast Refresh safety
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // TS hygiene (better than turning it off)
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      // Prettier blocks commit if formatting fails
      'prettier/prettier': 'error',
    },
  },

  // ✅ Disable ESLint rules that conflict with Prettier
  prettierConfig,
);
