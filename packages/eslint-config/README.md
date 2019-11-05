# Spartan Bio ESLint config

[ESlint](https://eslint.org/) config used by Spartan Bio.

## Usage

1. Add this package its peer dependencies to `devDependencies`

```bash
$ yarn add -D @spartanbio/eslint-config eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard

# or

$ npm i -D @spartanbio/eslint-config eslint eslint-config-standard eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-promise eslint-plugin-standard
```

2. Add `.eslintrc.js` with the following:

```js
module.exports = {
  extends: ['@spartanbio'],
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
  extends: ['@spartanbio'],
}
```
