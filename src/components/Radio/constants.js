import { BorderWidthTokens } from "@tokens/border";
import { ThemeColors } from "@tokens/color";
import { SpaceTokens } from "@tokens/space";

/**
 * Radio constants.
 */

// The sheet draws the circle at three sizes, each with a dot half its width.
export const RADIO_SIZES = {
  small: SpaceTokens.sm,
  medium: SpaceTokens.md,
  large: SpaceTokens.lg,
};

export const DEFAULT_RADIO_SIZE = "medium";

// AntD greys the circle once it is disabled, and rings a focused one in 3px of
// primary-emp-3 held a pixel clear of it. The sheet keeps the circle white
// whatever its state, and lays a 2px primary-emp-1 halo straight against the
// ring. None of the three is a Radio token of its own — they are the shared
// ones a Radio.Group's buttons read too — so they ride on the circle itself
// rather than the theme, where they would take the GroupedButtons with them.
// The offset has no token at all: AntD holds the ring a pixel clear in its own
// rule, which only a style on the circle can pull back in.
export const RADIO_CIRCLE_STYLE = {
  "--ant-color-bg-container-disabled": ThemeColors.white,
  "--ant-line-width-focus": `${BorderWidthTokens[2]}px`,
  "--ant-color-primary-border": ThemeColors["primary-emp-1"],
  outlineOffset: 0,
};
