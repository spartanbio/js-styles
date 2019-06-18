module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    '@spartanbio/stylelint-config',
    'stylelint-config-standard-scss',
  ],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-same-name-blockless'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],

    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else'],
      },
    ],
    // For the sake of playing nice with the prettier formatter
    'declaration-colon-newline-after': null,
    'value-list-comma-newline-after': null,

    // scss
    'scss/at-else-empty-line-before': 'never',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
  },
}
