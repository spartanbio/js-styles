# Spartan Bio ESLint config

[ESlint](https://eslint.org/) config used by Spartan Bio.

## Usage

1. Add this package its peer dependencies to `devDependencies`

```bash
$ npx install-peerdeps --dev @spartanbio/eslint-config
```

2. Add `.eslintrc.js` with the following:

```js
module.exports = {
  extends: ['@spartanbio'],
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
  extends: ['@spartanbio'],
};
```
