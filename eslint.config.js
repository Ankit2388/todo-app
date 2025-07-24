const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const reactHooks = require('eslint-plugin-react-hooks');
const reactNative = require('eslint-plugin-react-native');

module.exports = defineConfig([
  expoConfig,

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-native': reactNative,
      'react-hooks': reactHooks,
    },
    rules: {
      'import/newline-after-import': ['warn', { count: 1 }],
      'import/no-duplicates': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'no-unused-expressions': 'off',
        'react/display-name': 'off',

      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^',
          vars: 'all',
          args: 'after-used',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^',
          destructuredArrayIgnorePattern: '^',
          varsIgnorePattern: '^',
          ignoreRestSiblings: true,
        },
      ],
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          groups: [['external', 'builtin'], 'internal', ['sibling', 'parent'], 'index'],
          'newlines-between': 'always',
          pathGroups: [
            { group: 'external', pattern: '@(react|react-native)', position: 'before' },
            { group: 'internal', pattern: '@/**' },
          ],
          pathGroupsExcludedImportTypes: ['internal', 'react'],
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  {
    ignores: ['node_modules', 'build', 'dist', '.next'],
  },
]);
