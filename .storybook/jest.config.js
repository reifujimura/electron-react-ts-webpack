module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/../.jest/transform.js"
  },
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  testMatch: ["<rootDir>/storyshots.test.ts"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/../.jest/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/../.jest/__mocks__/styleMock.js"
  }
};
