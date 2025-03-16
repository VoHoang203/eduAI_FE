import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import babelParser from "@babel/eslint-parser";

export default [
  {
    ignores: ["node_modules/**", "dist/**", "*.css"], // Bỏ qua các file không cần kiểm tra
  },
  js.configs.recommended, // Thay cho "extends": "eslint:recommended"

  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"], // Hỗ trợ JSX & TSX
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
  },
];
