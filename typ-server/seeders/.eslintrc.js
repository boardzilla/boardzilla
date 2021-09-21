module.exports = {
  "env": {
    "node": true,
  },
  "extends": "eslint:recommended",
  "globals": {
    "process": "readonly",
    "Atomics": "readonly",
    "Buffer": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "no-unused-vars": "off"
  }
};
