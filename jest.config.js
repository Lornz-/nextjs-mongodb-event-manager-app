module.exports = {
  projects: [
    {
      displayName: 'client',
      testEnvironment: 'jest-environment-jsdom',
      setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
      testMatch: ['**/__tests__/(components|pages)/**/*.[jt]s?(x)'],
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
      },
      transform: {
        '^.+\\.(js|jsx)$': [
          'babel-jest',
          { presets: ['@babel/preset-react', '@babel/preset-env'] },
        ],
      },
    },
    {
      displayName: 'server',
      testEnvironment: 'node',
      testMatch: ['**/__tests__/(api|services)/**/*.[jt]s?(x)'],
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
      },
      transform: {
        '^.+\\.(js|jsx)$': [
          'babel-jest',
          { presets: ['@babel/preset-react', '@babel/preset-env'] },
        ],
      },
    },
  ],
};
