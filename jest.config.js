module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
    '^.+\\.svg$': './src/utils/svgTransform.js'
  }
}
