const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

// Load plugin objects
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const noInlineStyles = require('eslint-plugin-no-inline-styles');
const sortKeysFix = require('eslint-plugin-sort-keys-fix');
const sortDestructureKeys = require('eslint-plugin-sort-destructure-keys');
const reactNative = require('eslint-plugin-react-native');
const reactHooks = require('eslint-plugin-react-hooks');
const react = require('eslint-plugin-react');
const prettierPlugin = require('eslint-plugin-prettier');


module.exports = defineConfig([
  expoConfig,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'no-inline-styles': noInlineStyles,
      'sort-keys-fix': sortKeysFix,
      'sort-destructure-keys': sortDestructureKeys,
      'react-native': reactNative,
      'react-hooks': reactHooks,
      react: react,
      prettier: prettierPlugin,
    },
    rules: {
      'import/newline-after-import': ['warn', { count: 1 }],
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          groups: [['external', 'builtin'], 'internal', ['sibling', 'parent'], 'index'],
          'newlines-between': 'always',
          pathGroups: [
            { group: 'external', pattern: '@(react|react-native)', position: 'before' },
            { group: 'internal', pattern: '@miBoilerplate/**' },
            { group: 'internal', pattern: '@src/**' },
          ],
          pathGroupsExcludedImportTypes: ['internal', 'react'],
        },
      ],
      'no-console': 'error',
      'no-inline-styles/no-inline-styles': 'error',
      'no-restricted-imports': [
        'error',
        {
          name: 'react-native',
          importNames: ['Text', 'Image'],
          message: 'Please use @app/blueprints for importing main elements.',
        },
      ],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'prettier/prettier': ['error'],
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
        },
      ],
      'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: true }],
    },
  },

  {
    ignores: ['dist/*'],
  },
]);
