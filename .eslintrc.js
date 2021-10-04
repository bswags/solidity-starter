module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: false,
    es2021: true,
    mocha: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:node/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
  overrides: [
    {
      files: ['hardhat.config.js'],
      globals: { task: true },
    },
    {
      files: ['scripts/**'],
      rules: { 'no-process-exit': 'off' },
    },
    {
      files: ['hardhat.config.ts', 'scripts/**', 'test/**'],
      rules: {
        'node/no-unpublished-require': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        'node/no-unpublished-import': 'off',
        'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
      },
    },
  ],
};
