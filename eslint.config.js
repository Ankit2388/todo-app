// https://docs.expo.dev/guides/using-eslint/
// const { defineConfig } = require('eslint/config');
// const expoConfig = require('eslint-config-expo/flat');

// module.exports = defineConfig([
//   expoConfig,
//   {
//     ignores: ['dist/*'],
//   },
// ]);


const { defineConfig } = require('eslint/config');
const tsParser = require('@typescript-eslint/parser');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      '@typescript-eslint/no-shadow': ['error'],
      'no-shadow': 'off',
      'no-undef': 'off',
    },
  },

  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js'],
    plugins: {
      'no-inline-styles': require('eslint-plugin-no-inline-styles'),
      import: require('eslint-plugin-import'),
      'sort-keys-fix': require('eslint-plugin-sort-keys-fix'),
      'sort-destructure-keys': require('eslint-plugin-sort-destructure-keys'),
      'react-native': require('eslint-plugin-react-native'),
      'react-hooks': require('eslint-plugin-react-hooks'),
    },
    rules: {
      'no-console': 'error',
      'no-inline-styles/no-inline-styles': 2,

      'import/newline-after-import': ['warn', { count: 1 }],
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          groups: [['external', 'builtin'], 'internal', ['sibling', 'parent'], 'index'],
          newlines-between: 'always',
          pathGroups: [
            { group: 'external', pattern: '@(react|react-native)', position: 'before' },
            { group: 'internal', pattern: '@miBoilerplate/**' },
            { group: 'internal', pattern: '@src/**' },
          ],
          pathGroupsExcludedImportTypes: ['internal', 'react'],
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          name: 'react-native',
          importNames: ['Text', 'Image'],
          message: 'Please use @app/blueprints for importing main elements.',
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
      'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: true }],
      'sort-destructure-keys/sort-destructure-keys': [2, { caseSensitive: false }],

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react-native/no-unstable-nested-components': ['off', { allowAsProps: true }],
    },
  },

  {
    ignores: ['dist/*'],
  },
]);

