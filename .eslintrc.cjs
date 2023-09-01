/* eslint-env node */

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["isaacscript", "import", "@typescript-eslint"],
  root: true,
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,

    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  rules: {
    // These off/not-configured-the-way-we-want lint rules we like & opt into
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", destructuredArrayIgnorePattern: "^_" },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "inline-type-imports" },
    ],
    "import/consistent-type-specifier-style": ["error", "prefer-inline"],

    // For educational purposes we format our comments/jsdoc nicely
    "isaacscript/complete-sentences-jsdoc": "warn",
    "isaacscript/format-jsdoc-comments": "warn",

    // These lint rules don't make sense for us but are enabled in the preset configs
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
  },
  overrides: [
    {
      files: ["*.js", "*.cjs", "*.mjs"],
      excludedFiles: "**.*",
      rules: {
        quotes: ["error", "single"],
      },
    },
  ],
};
