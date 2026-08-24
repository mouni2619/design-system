/**
 * Mandark Design System V1.0 — Design Tokens
 */

export const DaybreakBlue = {
  "blue-100": "#e6f7ff",
  "blue-200": "#bae7ff",
  "blue-300": "#91d5ff",
  "blue-400": "#69c0ff",
  "blue-500": "#40a9ff",
  "blue-600": "#1890ff",
  "blue-700": "#096dd9",
  "blue-800": "#0050b3",
  "blue-900": "#003a8c",
  "blue-1000": "#002766",
};

export const DustRed = {
  "red-100": "#fff1f0",
  "red-200": "#ffccc7",
  "red-300": "#ffa39e",
  "red-400": "#ff7875",
  "red-500": "#ff4d4f",
  "red-600": "#f5222d",
  "red-700": "#cf1322",
  "red-800": "#a8071a",
  "red-900": "#820014",
  "red-1000": "#5c0011",
};

export const SunsetOrange = {
  "orange-100": "#fff7e6",
  "orange-200": "#ffe7ba",
  "orange-300": "#ffd591",
  "orange-400": "#ffc069",
  "orange-500": "#ffa940",
  "orange-600": "#fa8c16",
  "orange-700": "#d46b08",
  "orange-800": "#ad4e00",
  "orange-900": "#873800",
  "orange-1000": "#612500",
};

export const PolarGreen = {
  "green-100": "#f6ffed",
  "green-200": "#d9f7be",
  "green-300": "#b7eb8f",
  "green-400": "#95de64",
  "green-500": "#73d13d",
  "green-600": "#52c41a",
  "green-700": "#389e0d",
  "green-800": "#237804",
  "green-900": "#135200",
  "green-1000": "#092b00",
};

export const Grey = {
  "white": "#ffffff",
  "gray-100": "#ffffff",
  "gray-200": "#fafafa",
  "gray-300": "#f5f5f5",
  "gray-400": "#f0f0f0",
  "gray-500": "#d9d9d9",
  "gray-600": "#bfbfbf",
  "gray-700": "#767676",
  "gray-800": "#595959",
  "gray-900": "#434343",
  "gray-1000": "#000000",
};

export const ElectricViolet = {
  "violet-100": "#f0e7ff",
  "violet-200": "#d5bcff",
  "violet-300": "#bb91ff",
  "violet-400": "#a066ff",
  "violet-500": "#863cff",
  "violet-600": "#6610f2",
  "violet-700": "#4d00c9",
  "violet-800": "#3d00a0",
  "violet-900": "#2e0078",
  "violet-1000": "#1e004f",
};

export const MediumPurple = {
  "purple-100": "#f6f1ff",
  "purple-200": "#e1d1ff",
  "purple-300": "#ccb1ff",
  "purple-400": "#b891ff",
  "purple-500": "#a371ff",
  "purple-600": "#8a59e3",
  "purple-700": "#6f42c1",
  "purple-800": "#562e9f",
  "purple-900": "#401e7d",
  "purple-1000": "#2c115b",
};

export const BrilliantRose = {
  "rose-100": "#ffedf6",
  "rose-200": "#ffc4e1",
  "rose-300": "#ff9ccd",
  "rose-400": "#ff73b9",
  "rose-500": "#f849a0",
  "rose-600": "#d63384",
  "rose-700": "#b4216a",
  "rose-800": "#921352",
  "rose-900": "#70083c",
  "rose-1000": "#4e0127",
};

export const Sunglow = {
  "sunglow-100": "#fff9e6",
  "sunglow-200": "#ffedb9",
  "sunglow-300": "#ffe28d",
  "sunglow-400": "#ffd760",
  "sunglow-500": "#ffcc34",
  "sunglow-600": "#ffc107",
  "sunglow-700": "#d6a100",
  "sunglow-800": "#ad8200",
  "sunglow-900": "#856300",
  "sunglow-1000": "#5c4500",
};

export const Aquamarine = {
  "aqua-100": "#edfff9",
  "aqua-200": "#c4ffed",
  "aqua-300": "#9bffe1",
  "aqua-400": "#72ffd5",
  "aqua-500": "#48ffc9",
  "aqua-600": "#34ebb5",
  "aqua-700": "#20c997",
  "aqua-800": "#10a77a",
  "aqua-900": "#04855f",
  "aqua-1000": "#006346",
};

export const Spray = {
  "spray-100": "#e7fbff",
  "spray-200": "#bbf3ff",
  "spray-300": "#90ecff",
  "spray-400": "#65e5ff",
  "spray-500": "#39deff",
  "spray-600": "#0dcaf0",
  "spray-700": "#00a6c7",
  "spray-800": "#00849e",
  "spray-900": "#006276",
  "spray-1000": "#00404d",
};

// 2. THEME COLORS (Mapped directly from above Base Colors)
export const ThemeColors = {
  // Primary (Blue)
  "primary": DaybreakBlue["blue-600"],
  "primary-emp-1": DaybreakBlue["blue-100"],
  "primary-emp-2": DaybreakBlue["blue-200"],
  "primary-emp-3": DaybreakBlue["blue-300"],
  "primary-emp-5": DaybreakBlue["blue-500"],
  "primary-emp-7": DaybreakBlue["blue-700"],

  // Secondary (Grey)
  "secondary": Grey["gray-700"],
  "secondary-emp-2": Grey["gray-200"],
  "secondary-emp-3": Grey["gray-300"],
  "secondary-emp-4": Grey["gray-400"],
  "secondary-emp-5": Grey["gray-500"],
  "secondary-emp-6": Grey["gray-600"],
  "secondary-emp-8": Grey["gray-800"],

  // Success (Green)
  "success": PolarGreen["green-600"],
  "success-emp-1": PolarGreen["green-100"],
  "success-emp-2": PolarGreen["green-200"],
  "success-emp-3": PolarGreen["green-300"],
  "success-emp-5": PolarGreen["green-500"],
  "success-emp-7": PolarGreen["green-700"],

  // Danger (Red)
  "danger": DustRed["red-600"],
  "danger-emp-1": DustRed["red-100"],
  "danger-emp-2": DustRed["red-200"],
  "danger-emp-3": DustRed["red-300"],
  "danger-emp-5": DustRed["red-500"],
  "danger-emp-7": DustRed["red-700"],

  // Warning (Orange)
  "warning": SunsetOrange["orange-600"],
  "warning-emp-1": SunsetOrange["orange-100"],
  "warning-emp-2": SunsetOrange["orange-200"],
  "warning-emp-3": SunsetOrange["orange-300"],
  "warning-emp-5": SunsetOrange["orange-500"],
  "warning-emp-7": SunsetOrange["orange-700"],

  // Link
  "link": DaybreakBlue["blue-600"],
  "link-emp-5": DaybreakBlue["blue-500"],
  "link-emp-7": DaybreakBlue["blue-700"],

  // Info
  "info": DaybreakBlue["blue-600"],
  "info-emp-1": DaybreakBlue["blue-100"],
  "info-emp-2": DaybreakBlue["blue-200"],
  "info-emp-3": DaybreakBlue["blue-300"],
  "info-emp-5": DaybreakBlue["blue-500"],
  "info-emp-7": DaybreakBlue["blue-700"],

  // Disabled & Neutral
  "disable-emp-2": Grey["gray-200"],
  "disable-emp-6": Grey["gray-600"],
  "black": Grey["gray-1000"],
  "white": Grey["gray-100"],
};

export const FontSize = {
  h1: 30,
  h2: 24,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14,
  body: 12,
  caption: 10,
};

export const LineHeight = {
  h1: 36,
  h2: 30,
  h3: 26,
  h4: 24,
  h5: 22,
  h6: 20,
  body: 18,
  caption: 16,
};

export const LetterSpacing = {
  h1: -0.6,
  h2: -0.4,
  h3: -0.2,
  h4: 0,
  h5: 0,
  h6: 0,
  body: 0,
  caption: 0,
};

export const FontFamily = 
  "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

export const FontWeight = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

// Raw Spacing Values
export const SpaceTokens = {
  "3xs": 4,
  "2xs": 8,
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
  "2xl": 32,
};

// Raw Border Radius Values
export const RadiusTokens = {
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  xxl: 16,
  pill: 50,
  circle: 999,
};

// Raw Border Widths
export const BorderWidthTokens = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
};
