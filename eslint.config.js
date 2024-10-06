import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJasmine from "eslint-plugin-jasmine";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        jasmine: true,
        describe: true,
        it: true,
        beforeAll: true,
        afterAll: true,
        beforeEach: true,
        expect: true,
        process: "readonly",
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    plugins: {
      jasmine: pluginJasmine,
    },
    rules: {
      "no-unused-vars": ["warn"],
      "no-undef": "error",
      "jasmine/no-spec-dupes": "error",
      semi: ["error", "always"],
      quotes: ["error", "single"],
      indent: ["error", 2],
      "linebreak-style": [
        "error",
        process.platform === "win32" ? "windows" : "unix",
      ],
    },
  },
  pluginJs.configs.recommended,
];
