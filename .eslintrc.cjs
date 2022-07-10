module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-implicit-any': 'error',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/restrict-plus-operands': 'error',
    'no-underscore-dangle': 0,
    'new-cap': [ 'off' ],
    'no-await-in-loop': 0,
    'arrow-parens': 0,
    'no-plusplus': 0,
    'no-nested-ternary': 0,
    'max-classes-per-file': 0,
    'object-curly-newline': 0,
    'max-len': 0,
    'no-param-reassign': 0,
    'prefer-destructuring': ['error', { object: true, array: false }],
    'no-console': 0,
  },
};
