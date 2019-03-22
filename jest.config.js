module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
  },
  "testRegex": "src\/components\/.*__tests__\/.*\.test\.tsx?$",
  "moduleNameMapper": {
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
}
