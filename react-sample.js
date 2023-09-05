module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    },
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "react",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": ["error", {
      "jsxSingleQuote": true,
      "singleQuote": true,
      "semi": true,
      "tabWidth": 2,
      "printWidth": 100,
      "trailingComma": "all",
      "bracketSpacing": true,
      "useTabs": false,
      "arrowParens": "always",
      "endOfLine": "auto"
    }],
    "react/no-array-index-key": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-await-in-loop": "error",
    "no-nested-ternary": "error",
    "max-params": [
      "error",
      {
        "max": 3
      }
    ],
    "no-console": "warn",
    "max-len": [
      "error",
      {
        "code": 80
      }
    ],
    "no-use-before-define": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-magic-numbers": "warn",
    "complexity": [
      "error",
      {
        "max": 2
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_",
      }
    ],
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "globals": {
    "Liferay": "readonly"
  }
}
