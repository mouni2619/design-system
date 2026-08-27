import React from "react";
import { ConfigProvider } from "antd";

// AntD Theme
import { antdTheme } from "@theme/antdTheme";

/**
 * Wraps children in the design system's Ant Design theme.
 *
 * Applied globally as a Storybook decorator; consumers of the package should
 * mount it once at the root of their app.
 *
 * @param {Node} children
 */
export function ThemeProvider({ children = null }) {
  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>;
}

export default ThemeProvider;
