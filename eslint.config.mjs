import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Configuration de base pour tous les fichiers JavaScript
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: { jsx: true },
      globals: { ...globals.browser },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // Configuration spécifique aux fichiers de tests pour ajouter les globals de Jest
  {
    files: ["**/*.test.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: { ...globals.jest },
    },
  },
  // Les configurations recommandées par @eslint/js et eslint-plugin-react
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
