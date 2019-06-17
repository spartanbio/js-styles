module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    '@spartanbio/stylelint-config',
    'stylelint-config-standard-scss',
  ],
  rules: {
    // For the sake of playing nice with the prettier formatter
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-after': null,

    // scss
    'scss/at-else-empty-line-before': 'never',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
  },
}
