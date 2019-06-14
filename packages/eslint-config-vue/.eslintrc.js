module.exports = {
  extends: ['@spartanbio/eslint-config', 'plugin:vue/recommended'],
  plugins: ['vue'],
  rules: {
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'vue/camelcase': ['warn', { ignoreDestructuring: true }],
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/eqeqeq': ['error', 'smart'],
    'vue/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['vue', 'js', 'jsx'],
        shouldMatchCase: true,
      },
    ],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
  },
}
