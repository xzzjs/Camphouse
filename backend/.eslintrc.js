module.exports = {
  env: {
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: "eslint:recommended",
  plugins: ["chai-friendly"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: "*.test.js",
      rules: {
        "no-unused-expressions": "off",
        "chai-friendly/no-unused-expressions": "error",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "commonjs",
  },
  rules: {},
};
