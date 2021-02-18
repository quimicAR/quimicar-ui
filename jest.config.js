module.exports = {
  testEnvironment: 'jsdom', // que tipo de ambiente vamos usar pra teste, como será o browser, passamos o 'jsdom'
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], //  pastas para ignorar
  collectCoverage: true, // Pega os dados de Coverage
  collectCoverageFrom: ['src/**/*/*.ts(x)'], // arquivos e pastas para considerar no Coverage
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
