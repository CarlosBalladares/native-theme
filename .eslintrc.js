module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  // https://github.com/typescript-eslint/typescript-eslint/issues/1856
  // Eslint throw an no-undef error when exporting interfaces and types
  rules: {
    'no-undef': 'off',
  },
};
