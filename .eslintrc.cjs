// @ts-check
module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'airbnb-base', 'airbnb-typescript/base', 'prettier'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.cjs', '.prettierrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'simple-import-sort'],
  root: true,
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'class-methods-use-this': 'off',
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        '': 'never',
      },
    ],
    /* ----------------------------- Import sorting ----------------------------- */
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/order': 'off', // airbnb-base uses eslint-plugin-import import/order which conflict with our sorting order
    // we use this plugin to sort: https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    /* ----------------------------- Prettier rules ----------------------------- */
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
    ],
  },
};
