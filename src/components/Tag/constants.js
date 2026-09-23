import { ThemeColors } from "@tokens/color";
import { RadiusTokens } from "@tokens/border";

/* -- Tag ------------------------------------------------------------------ */
export const TAG_TYPES = {
  primary: "blue",
  secondary: "default",
  info: "blue",
  success: "success",
  warning: "warning",
  danger: "error",
};

// Design system variant -> AntD `variant`. No `ghost`: AntD Tag has no "text" variant.
export const TAG_VARIANTS = {
  "filled-dark": "solid",
  "filled-subtle": "filled",
  outlined: "outlined",
};

export const TAG_SIZES = ["small", "medium", "large"];

export const DEFAULT_TAG_TYPE = "primary";
export const DEFAULT_TAG_VARIANT = "filled-dark";
export const DEFAULT_TAG_SIZE = "medium";

// AntD Tag has no native `size` prop. Build one from the same live theme tokens
// AntD's own Button style engine uses per size, so Tag lines up with Button's
// height/font-size pixel-for-pixel at each size and stays in sync automatically
// if the theme ever changes.
export function getTagSizeStyle(token, size) {
  const sizes = {
small: {
      height: "24px",
    },
medium: {
      height: "26px",
    },
  large: {
      height: "28px",
    },
  };
  return sizes[size];
}
