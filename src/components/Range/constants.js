import { BorderWidthTokens, RadiusTokens } from "@tokens/border";
import { ThemeColors } from "@tokens/color";
import { SpaceTokens } from "@tokens/space";
import { LineHeight } from "@tokens/typography";

/**
 * Range constants.
 */

export const DEFAULT_RANGE_SIZE = "medium";

export const DEFAULT_RANGE_SEPARATOR = "-";

// The box stands as tall as any other field at the same size. This is the
// control height the theme builds for AntD, spelled out again because the box
// is ours rather than AntD's and cannot read the token off an ancestor.
export const RANGE_HEIGHTS = {
  small: SpaceTokens["3xs"] * 2 + LineHeight.caption,
  medium: SpaceTokens["2xs"] * 2 + LineHeight.body,
  large: SpaceTokens.xs * 2 + LineHeight.h6,
};

// The box is ours, not AntD's, so it carries its own values rather than
// reading AntD's variables — those live on AntD's elements and only reach a
// box that happens to sit inside one. The cell between the two fields is 24
// wide counting the 1px divider on either side, filled the palest grey, with
// the dash in the placeholder's own tone.
export const RANGE_VARS = {
  "--range-border-width": `${BorderWidthTokens[1]}px`,
  "--range-radius": `${RadiusTokens.sm}px`,
  "--range-bg": ThemeColors.white,
  "--range-bg-disabled": ThemeColors["secondary-emp-3"],
  "--range-border-color": ThemeColors["secondary-emp-5"],
  "--range-border-color-active": ThemeColors.primary,
  "--range-border-color-error": ThemeColors.danger,
  "--range-tint-active": ThemeColors["primary-emp-1"],
  "--range-tint-error": ThemeColors["danger-emp-1"],
  "--range-focus-ring": `${BorderWidthTokens[4]}px`,
  "--range-separator-width": `${SpaceTokens.lg}px`,
  "--range-separator-bg": ThemeColors["secondary-emp-2"],
  "--range-separator-color": ThemeColors["secondary-emp-6"],
};
