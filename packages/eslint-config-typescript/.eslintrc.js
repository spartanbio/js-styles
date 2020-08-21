module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    '@spartanbio/eslint-config',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // ensures constructor overloading works properly. see https://github.com/typescript-eslint/typescript-eslint/issues/420
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
  },
};
