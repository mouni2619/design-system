import { SpaceTokens } from "@tokens/space";

/**
 * Icon constants.
 */

// Icon box sizes in px, taken from the spacing scale so an icon always lines up
// with the text and padding around it. `size` also accepts a raw number.
export const ICON_SIZES = {
  xs: SpaceTokens.xs,
  sm: SpaceTokens.sm,
  md: SpaceTokens.md,
  lg: SpaceTokens.lg,
  xl: SpaceTokens["2xl"],
};

// AntD's Spin only comes in three sizes, so each icon size maps onto the
// nearest one. Read when `loading` swaps the icon out for a spinner.
export const ICON_SPIN_SIZES = {
  xs: "small",
  sm: "small",
  md: "medium",
  lg: "medium",
  xl: "large",
};

export const DEFAULT_ICON_SIZE = "md";

// Fallback for when `size` is a raw number, which has no Spin equivalent.
export const DEFAULT_SPIN_SIZE = "medium";
