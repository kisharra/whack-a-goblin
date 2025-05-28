module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};