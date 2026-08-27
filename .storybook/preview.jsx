import React from "react";

// Theme
import { ThemeProvider } from "@theme/ThemeProvider";

// Load Inter font weights globally across Storybook
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

// Css
import "@styles/bootstrap.scss";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    options: {
      storySort: {
        order: ["Introduction", "Foundations", "Components"],
      },
    },
  },
};

export default preview;
