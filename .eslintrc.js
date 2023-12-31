module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "standard",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  ignorePatterns: [
    ".eslintrc.js",
    ".github/**",
    ".stylelintrc.json",
    ".vscode/**",
    ".yarn/**",
    "**/build/*",
    "**/coverage/*",
    "**/node_modules/*",
  ],
  overrides: [
    {
      files: ["*.js", "*.cjs", "*.mjs"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/restrict-template-expressions": "off"
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    extraFileExtensions: [".cjs", ".mjs"],
    warnOnUnsupportedTypeScriptVersion: false,
    project: ["./tsconfig.json"],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    "@typescript-eslint",
    "header",
    "import",
    "import-newlines",
    "react-hooks",
    "simple-import-sort",
    "react",
  ],
  rules: {
    // required as 'off' since typescript-eslint has own versions
    indent: "off",
    "no-use-before-define": "off",
    // rules from semistandard (don't include it, has standard dep version mismatch)
    semi: [2, "always"],
    camelcase: ["warn", {ignoreDestructuring: true}],
    "no-extra-semi": 2,
    // specific overrides
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/restrict-template-expressions": "warn",
    "react/display-name": "warn",
    "arrow-parens": ["error", "always"],
    "default-param-last": [0], // conflicts with TS version (this one doesn't allow TS ?)
    "import-newlines/enforce": ["error", 2048],
    "jsx-quotes": ["error", "prefer-single"],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": [2, 2],
    "react/prop-types": [0], // this is a completely broken rule
    "react/jsx-key": "warn",
    "object-curly-newline": [
      "warn",
      {
        ImportDeclaration: {multiline: true},
        ObjectPattern: {multiline: true},
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-closing-bracket-location": [1, "line-aligned"],
    "react/jsx-fragments": "error",
    "react/jsx-max-props-per-line": [
      2,
      {
        maximum: { single: 3, multi: 1 }
      },
    ],
    "react/jsx-no-bind": 1,
    "no-void": "off",
    // needs to be switched on at some point
    "@typescript-eslint/no-explicit-any": "off",
    // this seems very broken atm, false positives
    "@typescript-eslint/unbound-method": "off",
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-var-requires": "off",
    "space-before-function-paren":["off", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
  },
  settings: {
    "import/extensions": [".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": require.resolve("eslint-import-resolver-node"),
    react: {
      version: "detect",
    },
  },
};
