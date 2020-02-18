
module.exports = {
  roots: ['<rootDir>/src'],
  preset: '@shelf/jest-mongodb',

  collectCoverageFrom: ['<rootDir>/src'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
