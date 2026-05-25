import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    rules: {
      // 1. Require trailing commas
      "comma-dangle": ["error", {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      }],

      // 2. Enforce spaces inside curly braces
      "object-curly-spacing": ["error", "always"],

      // 3. React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // 4. No unused imports or variables
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // 5. Ban any
      "@typescript-eslint/no-explicit-any": "error",

      // 6. Disallow unused expressions
      "no-unused-expressions": "error",

      // 7. Consistent type imports
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],

      // 8. Prefer const
      "prefer-const": "error",

      // 9. Limit empty line
      "no-multiple-empty-lines": ["error", {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      }],
      "eol-last": ["error", "always"],
      "padded-blocks": ["error", "never"],

      // 10. Disallow unnecessary semicolons
      "semi": ["error", "never"],

      // (optional but commonly paired)
      "no-trailing-spaces": "error",
      "array-bracket-spacing": ["error", "never"],
      "comma-spacing": ["error", { before: false, after: true }],
      "key-spacing": ["error", { beforeColon: false, afterColon: true }],
    },
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
])

export default eslintConfig
