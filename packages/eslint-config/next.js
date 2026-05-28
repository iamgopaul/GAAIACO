import pluginNext from "@next/eslint-plugin-next";
import pluginReactHooks from "eslint-plugin-react-hooks";
import { config as baseConfig } from "./base.js";

/**
 * Shared ESLint flat config for Next.js apps in the GAAIA monorepo.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const nextJsConfig = [
  ...baseConfig,
  {
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
      // `no-html-link-for-pages` targets the legacy `pages/` directory; we are
      // App Router only and it crashes under ESLint 9 with the current
      // @next/eslint-plugin-next (getRootDirs is not a function).
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default nextJsConfig;
