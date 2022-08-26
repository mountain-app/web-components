export default {
  testMatch: ["**/__tests__/**/*.+(ts|tsx|js)"],
  clearMocks: true,
  cacheDirectory: ".test",
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
};
