module.exports = {
  extends: ['plugin:@typescript-eslint/recommended-type-checked', 'airbnb-typescript/base', './.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      // https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration
      typescript: {},
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    // '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true, ignoreRestArgs: true }],
    '@typescript-eslint/type-annotation-spacing': 'error',
    // Note: must disable the base rule as it can report incorrect errors
    // See https://typescript-eslint.io/rules/no-shadow/#how-to-use
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    /* --------------------------------- Fastify -------------------------------- */
    // INFO: no-floating-promises requires all thenable to be handled, even when they are not real promises. Using the void qualifier  evaluates the expression then returns undefined. See https://github.com/fastify/fastify/discussions/3849 and https://github.com/typescript-eslint/typescript-eslint/issues/2640
    'no-void': 'warn',
    /* --------------------------------- NestJS --------------------------------- */
    // INFO: Nest injects services in the empty constructors
    'no-empty-function': 'warn',
    'no-useless-constructor': 'warn',
  },
};
