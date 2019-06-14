# Spartan Bio ESLint config for Vue

[ESlint](https://eslint.org/) config used with Vue by Spartan Bio.

## Usage

1. Add this package to `devDependencies`

```bash
$ yarn add -D @spartanbio/eslint-config-vue

# or

$ npm i -D @spartanbio/eslint-config-vue
```

2. Add the `@spartanbio/eslint-config` and its [`peerDependencies`](https://gitlab.com/spartanbio-ux/eslint-config/blob/master/package.json) to your project

```bash
$ yarn add -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard

# or

$ npm i -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard
```

3. Add `.eslintrc.js` with the following:

```js
module.exports = {
  extends: ["@spartanbio/eslint-config-vue"]
};
```

If using babel, use:

```js
module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  extends: ["@spartanbio/eslint-config-vue"]
};
```
