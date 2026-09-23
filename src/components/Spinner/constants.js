
/* -- Spinner ---------------------------------------------------------------- */

export const SPINNER_TYPES = {
  primary: "primary",
  secondary: "secondary",
  light: "light",
  dark: "dark",
  success: "success",
  warning: "warning",
  info: "info",
  danger: "danger",
};

export const DEFAULT_SPINNER_TYPE = "secondary";

export const SPINNER_DOTS = Array.from({ length: 16 }, (_, index) => index);

export const SPINNER_COLOR_KEYS = {
  primary: "ringPrimaryColor",
  secondary: "ringSecondaryColor",
  light: "ringLightColor",
  dark: "ringDarkColor",
  success: "ringSuccessColor",
  warning: "ringWarningColor",
  info: "ringInfoColor",
  danger: "ringDangerColor",
};
