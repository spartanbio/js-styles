module.exports = {
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['standard', 'plugin:jest/recommended'],
  plugins: ['standard', 'jest'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs'],
      },
    },
  },
  rules: {
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    camelcase: ['warn', { ignoreDestructuring: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', { code: 100 }],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 0,
    'no-return-assign': ['error', 'always'],
    'object-curly-newline': ['error', {
      consistent: true,
      multiline: true,
    }],
  },
}
