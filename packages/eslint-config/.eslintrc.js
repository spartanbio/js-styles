module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'standard',
  ],
  plugins: [
    'standard',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.mjs',
        ],
      },
    },
  },
  rules: {
    'array-bracket-newline': [
      'error',
      'consistent',
    ],
    'array-element-newline': [
      'error',
      'consistent',
    ],
    'arrow-parens': [
      'error',
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],
    camelcase: [
      'warn',
      {
        ignoreDestructuring: true,
      },
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'guard-for-in': 'error',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2,
      },
    ],
    'no-alert': 'warn',
    'no-return-assign': [
      'error',
      'always',
    ],
    'no-shadow': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'object-curly-newline': [
      'error',
      {
        consistent: true,
        multiline: true,
      },
    ],
    'object-shorthand': [
      'error',
      'always',
    ],
    'prefer-rest-params': 'error',
    radix: 'error',
    'require-await': 'off',
    semi: [
      'error',
      'always',
    ],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'semi-style': [
      'error',
      'last',
    ],
  },
};
