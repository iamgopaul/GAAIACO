import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

/**
 * Shared ESLint flat config for every package in the GAAIA monorepo.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [
  {
    ignores: [
      "**/.next*/**",
      "**/dist/**",
      "**/node_modules/**",
      "**/.turbo/**",
      "**/next-env.d.ts",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    // TypeScript's own compiler resolves undefined identifiers; `no-undef`
    // double-flags valid globals (URL, Date, …) in .ts/.tsx files.
    files: ["**/*.{ts,tsx,mts,cts}"],
    rules: {
      "no-undef": "off",
    },
  },
];

export default config;
