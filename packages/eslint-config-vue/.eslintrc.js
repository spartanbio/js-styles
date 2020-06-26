module.exports = {
  extends: [
    '@spartanbio/eslint-config',
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'vue/arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'vue/camelcase': [
      'warn',
      {
        ignoreDestructuring: true,
      },
    ],
    'vue/comma-dangle': [
      'error',
      'always-multiline',
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
      },
    ],
    'vue/eqeqeq': ['error', 'smart'],
    'vue/key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: [
          'vue',
          'js',
          'jsx',
        ],
        shouldMatchCase: true,
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/max-len': [
      'error',
      {
        code: 120,
        ignoreHTMLAttributeValues: true,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreUrls: true,
      },
    ],
  },
}
