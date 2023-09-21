module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import', 'simple-import-sort'],
  root: true,
  rules: {
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'warn',
    /* ---------------- Prevent errors when importing TS packages --------------- */
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        '': 'never',
      },
    ],
    // packages in test files should be in devDependencies, not normal dependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*spec.ts', '**/*test.ts'],
      },
    ],
    /* ----------------------------- Import sorting ----------------------------- */
    // we use this plugin to sort: https://github.com/lydell/eslint-plugin-simple-import-sort
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/order': 'off', // airbnb-base uses eslint-plugin-import import/order which conflict with our sorting order
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    // We use Prettier as a pugin instead of using the regular program with .prettierrc conf file because this allows to simply import this config to fix lint and format errors
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
