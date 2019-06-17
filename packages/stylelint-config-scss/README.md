# Spartan Bio stylelint config wtih SCSS

[stylelint](https://stylelint.io/) with SCSS config used by Spartan Bio.

## Usage

1. Add `stylelint` this package to `devDependencies`

```bash
$ yarn add -D stylelint @spartanbio/stylelint-config-scss

# or

$ npm i -D stylelint @spartanbio/stylelint-config-scss
```

3. Add `.stylelintrc.js` with the following:

```js
module.exports = {
  extends: ['@spartanbio/stylelint-config-scss'],
}
```
