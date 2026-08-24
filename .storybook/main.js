import path from "path";
import { fileURLToPath } from "url";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));

function resolvePath(dir) {
  return path.resolve(projectRoot, dir);
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: "@storybook/react-vite",
  viteFinal(config) {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": resolvePath("src"),
      "@assets": resolvePath("src/assets/themes"),
      "@components": resolvePath("src/components"),
      "@docs": resolvePath("src/docs"),
      "@theme": resolvePath("src/theme"),
      "@tokens": resolvePath("src/tokens.js"),
    };

    return config;
  },
};

export default config;
