# ESlint Configuration

This ESlint configuration should always be installed with its peer dependencies.

Prettier is used as a ESlint plugin to avoid the need to create a `.prettierrc` file in each project.

## Install

```sh
pnpm i -D @nos-futurs/eslint-config
```

Don't forget to have a `.npmrc` file in your project, with the following content:

```sh
auto-install-peers=true
```

## Usage

### JS

Create a `.eslintrc.js` file in your project with the following content:

```js
module.exports = {
  "extends": "@nos-futurs/eslint-config",
}
```

### TS

Create a `.eslintrc.js` file in your project with the following content:

```js
module.exports = {
  "extends": "@nos-futurs/eslint-config/ts",
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
}
```
