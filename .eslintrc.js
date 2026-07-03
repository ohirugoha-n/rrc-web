module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    '@next/eslint-plugin-next',
    'prefer-arrow-functions',
    'import',
    'jsx-a11y',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['**/fabbrica/*', 'next-env.d.ts'],
  rules: {
    'react/jsx-sort-props': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'react/destructuring-assignment': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-boolean-value': 'error',
    'react/jsx-fragments': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-pascal-case': 'error',
    'react/no-danger': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../'],
      },
    ],
  },
  overrides: [
    {
      files: ['./**'],
      rules: {
        'no-var': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
      },
    },
  ],
};
