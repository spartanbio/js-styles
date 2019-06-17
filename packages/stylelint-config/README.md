# Spartan Bio stylelint config

[stylelint](https://stylelint.io/) config used by Spartan Bio.

## Usage

1. Add `stylelint` this package to `devDependencies`

```bash
$ yarn add -D stylelint @spartanbio/stylelint-config

# or

$ npm i -D stylelint @spartanbio/stylelint-config
```

3. Add `.stylelintrc.js` with the following:

```js
module.exports = {
  extends: ['@spartanbio/stylelint-config'],
}
```
