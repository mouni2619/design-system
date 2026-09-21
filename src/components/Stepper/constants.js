import { FontSize } from "@tokens/typography";

/**
 * Stepper constants.
 */

export const DEFAULT_STEPPER_ORIENTATION = "horizontal";
export const DEFAULT_STEPPER_SIZE = "medium";
export const DEFAULT_STEPPER_CURRENT = 0;

// An icon in the circle is drawn at the size's own text size.
export const STEPPER_ICON_SIZES = {
  small: FontSize.caption,
  medium: FontSize.body,
  large: FontSize.h6,
};
