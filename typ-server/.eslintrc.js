module.exports = {
  "env": {
    "node": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "process": "readonly",
    "Atomics": "readonly",
    "Buffer": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "plugins": [
    "react"
  ],
  "rules": {
  }
};
