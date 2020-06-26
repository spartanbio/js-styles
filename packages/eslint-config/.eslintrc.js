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
    'max-len': [
      'error',
      {
        code: 100,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreComments: true,
      },
    ],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2,
      },
    ],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 0,
    'no-return-assign': [
      'error',
      'always',
    ],
    'object-curly-newline': [
      'error',
      {
        consistent: true,
        multiline: true,
      },
    ],
  },
}
