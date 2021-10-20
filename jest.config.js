module.exports = {
  moduleNameMapper: {
    '^@bs-shared-ui': '<rootDir>/projects/shared-ui/src/',
    '^@bs-angular-material': '<rootDir>/projects/angular-material/src/'
    //'@core/(.*)': '<rootDir>/src/app/core/$1',
    //"^@bs-shared-ui/$(.*)": "<rootDir>/projects/shared-ui/src/$1"

  },
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts']
};