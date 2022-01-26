module.exports = {
    testEnvironment: 'node',
    testEnvironmentOptions: {
      NODE_ENV: 'test',
    },
    restoreMocks: true,
    coveragePathIgnorePatterns: ['node_modules'],
    coverageReporters: ['text', 'lcov', 'clover', 'html'],
  };