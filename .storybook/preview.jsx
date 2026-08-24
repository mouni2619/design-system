// Load Inter font weights globally across Storybook
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@assets/bootstrap.scss";
import { ConfigProvider } from "antd";
import { mandarkTheme } from "../src/theme/antdTheme";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <ConfigProvider theme={mandarkTheme}>
        <Story />
      </ConfigProvider>
    ),
  ],
  parameters: {
    docs: {
      codePanel: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
