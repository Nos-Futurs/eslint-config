module.exports = {
  extends: ['plugin:@typescript-eslint/recommended-type-checked', 'airbnb-typescript/base'],
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
    '@typescript-eslint/type-annotation-spacing': 'error',
    // '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true, ignoreRestArgs: true }],
  },
};
