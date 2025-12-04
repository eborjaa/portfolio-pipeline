import { defineConfig } from "eslint/config";
import nextConfig from "eslint-config-next";

const eslintConfig = defineConfig([
  ...nextConfig,
  {
    rules: {
      // Security-focused rules
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
      // Performance rules
      "no-console": "warn",
      "prefer-const": "error",
      // Code quality rules
      "no-unused-vars": "error",
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
]);

export default eslintConfig;
