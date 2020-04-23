module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2 
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "never"
    ],
    "operator-linebreak": [
      "error",
      "before"
    ],
    "multiline-ternary": [
      "error",
      "always-multiline"
    ],
    "no-multiple-empty-lines": "error",
    "no-multi-spaces": "error",
    "no-trailing-spaces": "error",
    "no-irregular-whitespace": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "react/prop-types": "off",
    "comma-dangle": ["error", "always-multiline"]
  }
}
