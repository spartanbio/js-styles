module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-standard-scss', '@spartanbio/stylelint-config'],
  rules: {
    // scss
    'scss/at-else-empty-line-before': 'never',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
  },
}
