module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/test/**/*.test.ts'],
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
  collectCoverageFrom: ['**/utils/*.ts'],
};
