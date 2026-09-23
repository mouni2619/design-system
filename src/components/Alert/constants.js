// /* -- Alert ------------------------------------------------------------------ */

export const ALERT_TYPES = [
  "info",
  "success",
  "warning",
  "error",
  "light",
  "dark",
  "primary",
  "secondary",
];

export const DEFAULT_ALERT_TYPE = "info";

// AntD only supports its four status names. Custom design-system variants use
// the info structure/icon while their visual palette is supplied below.
export const ALERT_ANT_TYPES = {
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
  light: "info",
  dark: "info",
  primary: "info",
  secondary: "info",
};