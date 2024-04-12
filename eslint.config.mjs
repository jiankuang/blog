import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginPrettierConfig from "eslint-config-prettier";

export default [
  pluginJs.configs.recommended,
  pluginReactConfig,
  pluginPrettierConfig,
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.es6,
        ...globals.browser,
        ...globals.node,
      },
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    // plugins: ["react"],
    rules: {
      // "no-unused-vars": "warn",
      "react/prop-types": 0,
      "react/react-in-jsx-scope": 0,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
