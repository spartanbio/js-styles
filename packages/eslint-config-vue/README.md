# Spartan Bio ESLint config for Vue

[ESlint](https://eslint.org/) config used with Vue by Spartan Bio.

## Usage

1. Add this package and its peer dependencies to `devDependencies`

```bash
$ npx install-peerdeps --dev @spartanbio/eslint-config-vue
```

2. Add `.eslintrc.js` with the following:

```js
module.exports = {
  extends: ['@spartanbio/eslint-config-vue'],
};
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
};
```
