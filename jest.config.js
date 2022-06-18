const config = {
  rootDir: '.',
  preset: 'ts-jest',
  testResultsProcessor: process.env.NODE_ENV === 'CI' ? 'jest-sonar-reporter' : undefined,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**'
  ],
  setupFiles: ['./src/setupTests.ts'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    // Handle module aliases
    '^src/(.*)': '<rootDir>/src/$1',
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^config/(.*)': '<rootDir>/src/config/$1',
    '^core/(.*)': '<rootDir>/src/core/$1',
    '^pages/(.*)': '<rootDir>/src/pages/$1',
    '^services/(.*)': '<rootDir>/src/services/$1',
    '^store/(.*)': '<rootDir>/src/store/$1',
    '^styles/(.*)': '<rootDir>/src/styles/$1',
    '^test/(.*)': '<rootDir>/src/test/$1',
    '^hooks/(.*)': '<rootDir>/src/hooks/$1',
    '^utils/(.*)': '<rootDir>/src/utils/$1',
    '^types/(.*)': '<rootDir>/src/types/$1'
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$'
  ]
};

module.exports = config;
