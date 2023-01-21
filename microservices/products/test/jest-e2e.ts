export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '../src',
  testRegex: '.e2e-spec.ts$',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest']
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: '<rootDir>/../prisma/prismaTestEnvironment'
}
