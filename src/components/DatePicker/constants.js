import { SpaceTokens } from "@tokens/space";

/**
 * DatePicker constants.
 */

// The sheet draws the calendar a step up on the large field and one size below
// it on the other two, in the placeholder's grey. The small field's own line of
// text is 15 tall, so a glyph any larger than this sets the height instead and
// pushes the field a pixel over the design's 24.
export const DATE_PICKER_ICON_SIZES = {
  small: SpaceTokens.xs,
  medium: SpaceTokens.xs,
  large: SpaceTokens.sm,
};

// A field that has passed carries a tick before the calendar, a step smaller
// and 4px clear of it.
export const DATE_PICKER_SUCCESS_ICON_SIZE = SpaceTokens.xs;

export const DEFAULT_DATE_PICKER_SIZE = "medium";
