// @ts-nocheck
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:unicorn/recommended",
    "plugin:promise/recommended",
    "plugin:security/recommended",
    "standard-jsdoc"
  ],
  plugins: [
    "json",
    "no-loops",
    "unicorn",
    "async-await",
    "prefer-object-spread",
    "promise",
    "security"
  ],
  env: {
    browser: true,
    es6: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  rules: {
    "prefer-object-spread/prefer-object-spread": 2
  }
};
