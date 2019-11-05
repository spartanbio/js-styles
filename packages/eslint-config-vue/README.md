# Spartan Bio ESLint config for Vue

[ESlint](https://eslint.org/) config used with Vue by Spartan Bio.

## Usage

1. Add this package and its peer dependencies to `devDependencies`

```bash
$ yarn add -D @spartanbio/eslint-config-vue @spartanbio/eslint-config eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue

# or

$ npm i -D @spartanbio/eslint-config-vue @spartanbio/eslint-config eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue
```

2. Add `.eslintrc.js` with the following:

```js
module.exports = {
  extends: ['@spartanbio/eslint-config-vue'],
}
```

If using babel, use:

```js
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: ['@spartanbio/eslint-config-vue'],
}
```
