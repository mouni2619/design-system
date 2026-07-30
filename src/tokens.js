/**
 * Mandark Design System V1.0 — Design Tokens
 */

export const daybreakBlue = {
  "Daybreak Blue 1": "#e6f7ff",
  "Daybreak Blue 2": "#bae7ff",
  "Daybreak Blue 3": "#91d5ff",
  "Daybreak Blue 4": "#69c0ff",
  "Daybreak Blue 5": "#40a9ff",
  "Daybreak Blue 6": "#1890ff",
  "Daybreak Blue 7": "#096dd9",
  "Daybreak Blue 8": "#0050b3",
  "Daybreak Blue 9": "#003a8c",
  "Daybreak Blue 10": "#002766",
};

export const dustRed = {
  "Dust Red 1": "#fff1f0",
  "Dust Red 2": "#ffccc7",
  "Dust Red 3": "#ffa39e",
  "Dust Red 4": "#ff7875",
  "Dust Red 5": "#ff4d4f",
  "Dust Red 6": "#f5222d",
  "Dust Red 7": "#cf1322",
  "Dust Red 8": "#a8071a",
  "Dust Red 9": "#820014",
  "Dust Red 10": "#5c0011",
};

export const sunsetOrange = {
  "Sunset Orange 1": "#fff7e6",
  "Sunset Orange 2": "#ffe7ba",
  "Sunset Orange 3": "#ffd591",
  "Sunset Orange 4": "#ffc069",
  "Sunset Orange 5": "#ffa940",
  "Sunset Orange 6": "#fa8c16",
  "Sunset Orange 7": "#d46b08",
  "Sunset Orange 8": "#ad4e00",
  "Sunset Orange 9": "#873800",
  "Sunset Orange 10": "#612500",
};

export const polarGreen = {
  "Polar Green 1": "#f6ffed",
  "Polar Green 2": "#d9f7be",
  "Polar Green 3": "#b7eb8f",
  "Polar Green 4": "#95de64",
  "Polar Green 5": "#73d13d",
  "Polar Green 6": "#52c41a",
  "Polar Green 7": "#389e0d",
  "Polar Green 8": "#237804",
  "Polar Green 9": "#135200",
  "Polar Green 10": "#092b00",
};

export const grey = {
  "Grey 1": "#ffffff",
  "Grey 2": "#fafafa",
  "Grey 3": "#f5f5f5",
  "Grey 4": "#f0f0f0",
  "Grey 5": "#d9d9d9",
  "Grey 6": "#bfbfbf",
  "Grey 7": "#767676",
  "Grey 8": "#595959",
  "Grey 9": "#434343",
  "Grey 10": "#000000",
};

export const palettes = {
  "Daybreak Blue": daybreakBlue,
  "Dust Red": dustRed,
  "Sunset Orange": sunsetOrange,
  "Polar Green": polarGreen,
  Grey: grey,
};

export const textTokens = [
  ["text-info", "DaybreakBlue/6", daybreakBlue["Daybreak Blue 6"]],
  ["text-success", "PolarGreen/6", polarGreen["Polar Green 6"]],
  ["text-error", "DustRed/6", dustRed["Dust Red 6"]],
  ["text-warning", "SunsetOrange/6", sunsetOrange["Sunset Orange 6"]],
  ["text-brand", "DaybreakBlue/6", daybreakBlue["Daybreak Blue 6"]],
  ["text-link", "DaybreakBlue/6", daybreakBlue["Daybreak Blue 6"]],
  ["text-brand-emphasis-1", "DaybreakBlue/7", daybreakBlue["Daybreak Blue 7"]],
  ["text-light", "Grey/1", grey["Grey 1"]],
  ["text-disable", "Grey/6", grey["Grey 6"]],
  ["text-secondary", "Grey/7", grey["Grey 7"]],
  ["text-primary", "Grey/8", grey["Grey 8"]],
  ["text-dark", "Grey/9", grey["Grey 9"]],
];

export const borderTokens = [
  ["border-default", "Grey/5", grey["Grey 5"]],
  ["border-brand", "DaybreakBlue/6", daybreakBlue["Daybreak Blue 6"]],
  [
    "border-brand-emphasis-1",
    "DaybreakBlue/1",
    daybreakBlue["Daybreak Blue 1"],
  ],
  ["border-info", "DaybreakBlue/6", daybreakBlue["Daybreak Blue 6"]],
  ["border-success", "PolarGreen/6", polarGreen["Polar Green 6"]],
  ["border-error", "DustRed/6", dustRed["Dust Red 6"]],
  ["border-warning", "SunsetOrange/6", sunsetOrange["Sunset Orange 6"]],
];

export const backgroundTokens = [
  ["bg-light", "Grey/1", grey["Grey 1"]],
  ["bg-medium", "Grey/3", grey["Grey 3"]],
  ["bg-dark", "Grey/10", grey["Grey 10"]],
  ["bg-brand-emphasis-1", "DaybreakBlue/1", daybreakBlue["Daybreak Blue 1"]],
  ["bg-brand-emphasis-2", "DaybreakBlue/2", daybreakBlue["Daybreak Blue 2"]],
  ["bg-brand-emphasis-3", "DaybreakBlue/3", daybreakBlue["Daybreak Blue 3"]],
  ["bg-brand-emphasis-4", "DaybreakBlue/5", daybreakBlue["Daybreak Blue 5"]],
  ["bg-brand", "DaybreakBlue/6", daybreakBlue["Daybreak Blue 6"]],
  ["brand-secondary", "Grey/6", grey["Grey 6"]],
  ["bg-info", "DaybreakBlue/1", daybreakBlue["Daybreak Blue 1"]],
  ["bg-success", "PolarGreen/1", polarGreen["Polar Green 1"]],
  ["bg-error", "DustRed/1", dustRed["Dust Red 1"]],
  ["bg-warning", "SunsetOrange/1", sunsetOrange["Sunset Orange 1"]],
  ["bg-disable", "Grey/3", grey["Grey 3"]],
  ["bg-success-2", "PolarGreen/6", polarGreen["Polar Green 6"]],
  ["bg-error-2", "DustRed/6", dustRed["Dust Red 6"]],
  ["bg-info-2", "DaybreakBlue/6", daybreakBlue["Daybreak Blue 6"]],
  ["bg-warning-2", "SunsetOrange/6", sunsetOrange["Sunset Orange 6"]],
];

export const iconTokens = [
  ["color-default", "Grey/8", grey["Grey 8"]],
  ["color-emphasis-1", "DaybreakBlue/6", daybreakBlue["Daybreak Blue 6"]],
  ["color-emphasis-2", "DaybreakBlue/7", daybreakBlue["Daybreak Blue 7"]],
  ["color-disable", "Grey/6", grey["Grey 6"]],
];

export const fontFamily =
  "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

export const typeScale = [
  {
    token: "H1",
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: -1.0,
    usage: "Major KPI values, hero numbers",
  },
  {
    token: "H2",
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: -0.6,
    usage: "—",
  },
  {
    token: "H3",
    fontSize: 20,
    lineHeight: 26,
    letterSpacing: -0.2,
    usage: "—",
  },
  { token: "H4", fontSize: 18, lineHeight: 24, letterSpacing: 0, usage: "—" },
  {
    token: "H5",
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0,
    usage: "Page title, modal and popover title",
  },
  {
    token: "H6",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
    usage: "Page subtitle, dashboard section headings",
  },
  {
    token: "Body",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0,
    usage: "Body text, placeholders, options, labels, tooltips",
  },
  {
    token: "Caption",
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 0,
    usage: "Metadata, chart axis labels, status tags, badge text",
  },
];

export const fontWeights = [
  { name: "Light", value: 300 },
  { name: "Regular", value: 400 },
  { name: "Medium", value: 500 },
  { name: "Semibold", value: 600 },
  { name: "Bold", value: 700 },
];

export const typographyColors = [
  ["Page title & headings", "Grey/9", grey["Grey 9"]],
  ["Primary text (body)", "Grey/8", grey["Grey 8"]],
  ["Secondary text (subtitle & subheading)", "Grey/7", grey["Grey 7"]],
  ["Info", "DaybreakBlue/6", daybreakBlue["Daybreak Blue 6"]],
  ["Success", "PolarGreen/6", polarGreen["Polar Green 6"]],
  ["Warning", "SunsetOrange/6", sunsetOrange["Sunset Orange 6"]],
  ["Error", "DustRed/6", dustRed["Dust Red 6"]],
  ["Disabled note", "Grey/6", grey["Grey 6"]],
  ["Link", "DaybreakBlue/6", daybreakBlue["Daybreak Blue 6"]],
];

export const spacing = [
  {
    token: "Space-3xs",
    value: 4,
    usage:
      "Radio & checkbox to labels, button stack, progress bar to text, tags, input to error msg",
  },
  {
    token: "Space-2xs",
    value: 8,
    usage:
      "buttons, form inputs, options & autocomplete, error message + exp, tab, chips",
  },
  {
    token: "Space-xs",
    value: 12,
    usage:
      "Toast, exp blocks, toast icon + text, tooltip, accordion, breadcrumb, table cells",
  },
  { token: "Space-sm", value: 16, usage: "—" },
  {
    token: "Space-md",
    value: 20,
    usage:
      "Page margins, gutter, modals, popovers, buttons, tabs, calendar, stepper, upload states",
  },
  { token: "Space-lg", value: 24, usage: "—" },
  { token: "Space-xl", value: 28, usage: "Upload" },
  { token: "Space-2xl", value: 32, usage: "—" },
];

export const borderRadius = [
  { token: "border-radius-sm", value: 4, usage: "—" },
  {
    token: "border-radius-md",
    value: 6,
    usage: "Dropdowns, popovers, toasts, side panels",
  },
  { token: "border-radius-lg", value: 8, usage: "—" },
  {
    token: "border-radius-xl",
    value: 12,
    usage:
      "Btns, input, options, checkbox, chat, toast, exp block, tab, tooltip, accordion, chips, calendar border, upload, progress bar, tags, color picker, table",
  },
  { token: "border-radius-xxl", value: 16, usage: "—" },
  {
    token: "border-radius-circle",
    value: 999,
    usage: "Radio, badge, user profile, stepper icon circle",
  },
];

export const elevationShadows = [
  {
    token: "Shadow-sm",
    value: `0 2px 4px 0 ${grey["Grey 4"]}`,
    usage: "Tooltip, cards, map icons",
  },
  {
    token: "Shadow-md",
    value: `0 4px 8px 0 ${grey["Grey 4"]}`,
    usage: "Dropdowns, popovers, toasts, side panels",
  },
  {
    token: "Shadow-lg",
    value: `0 8px 12px 2px ${grey["Grey 4"]}`,
    usage: "Modals",
  },
];

export const focusRingShadows = [
  {
    token: "Shadow-primary",
    border: daybreakBlue["Daybreak Blue 6"],
    ref: "DaybreakBlue/1",
    value: `0 0 0 4px ${daybreakBlue["Daybreak Blue 1"]}`,
    usage: "Focused panels, module switch cards",
  },
  {
    token: "Shadow-error",
    border: dustRed["Dust Red 6"],
    ref: "DustRed/1",
    value: `0 0 0 4px ${dustRed["Dust Red 1"]}`,
    usage: "Invalid field focus",
  },
  {
    token: "Shadow-success",
    border: polarGreen["Polar Green 6"],
    ref: "PolarGreen/1",
    value: `0 0 0 4px ${polarGreen["Polar Green 1"]}`,
    usage: "Valid field focus",
  },
  {
    token: "Shadow-warning",
    border: sunsetOrange["Sunset Orange 6"],
    ref: "SunsetOrange/1",
    value: `0 0 0 4px ${sunsetOrange["Sunset Orange 1"]}`,
    usage: "Warning field focus",
  },
  {
    token: "Shadow-info",
    border: daybreakBlue["Daybreak Blue 6"],
    ref: "DaybreakBlue/1",
    value: `0 0 0 4px ${daybreakBlue["Daybreak Blue 1"]}`,
    usage: "Active navigation items",
  },
  {
    token: "Shadow-secondary",
    border: grey["Grey 5"],
    ref: "Grey/2",
    value: `0 0 0 4px ${grey["Grey 2"]}`,
    usage: "Neutral focus",
  },
];
