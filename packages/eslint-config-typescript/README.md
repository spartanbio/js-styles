# Spartan Bio ESLint config

[ESlint](https://eslint.org/) config for TypeScript used by Spartan Bio.

## Usage

1. Add this package its peer dependencies to `devDependencies`

```bash
$ npx install-peerdeps --dev @spartanbio/eslint-config-typescript
```

2. Add `.eslintrc.js` with the following:

```js
module.exports = {
  extends: ['@spartanbio/eslint-config-typescript'],
};
```
