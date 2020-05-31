module.exports = {
  preset: 'react-native',
  setupFiles: ['./config/jestSetup.ts'],
  unmockedModulePathPatterns: ['./node_modules/babel-polyfill'],
};
