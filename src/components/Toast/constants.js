import { SpaceTokens } from "@tokens/space";
import { LineHeight } from "@tokens/typography";

/**
 * Toast constants.
 */

// Each status is a Bootstrap colour, used for the toast's fill and its ring.
export const TOAST_STATUSES = ["primary", "secondary", "success", "warning", "danger", "info"];

export const DEFAULT_TOAST_STATUS = "primary";
export const DEFAULT_TOAST_TITLE = "Toast title";
export const DEFAULT_TOAST_DESCRIPTION = "Toast description";

// Both glyphs sit on the title's line. The design draws the info disc at the
// title's own size and the close cross a step up, so the two carry their own
// sizes rather than one shared one.
export const TOAST_INFO_ICON_SIZE = SpaceTokens.xs;
export const TOAST_CLOSE_ICON_SIZE = SpaceTokens.sm;

// The card's own padding, and the square the close cross is hit by.
const TOAST_PADDING = SpaceTokens.xs;
const TOAST_CLOSE_TARGET = SpaceTokens.lg;
const TOAST_CLOSE_SLACK = (TOAST_CLOSE_TARGET - TOAST_CLOSE_ICON_SIZE) / 2;

// The design puts the info glyph, the title and the cross on one line. AntD
// hangs the button from the card's top padding in a box of its own, which
// drops the cross below the title, and clears the button's border and its
// background but not the padding the browser gives it — which squeezes a 16px
// cross down to 12 wide. Centring the button on the title's line, and on the
// padding the card already keeps, puts all three back in a row.
export const TOAST_CLOSE_STYLE = {
  padding: 0,
  width: TOAST_CLOSE_TARGET,
  height: TOAST_CLOSE_TARGET,
  top: TOAST_PADDING + (LineHeight.body - TOAST_CLOSE_TARGET) / 2,
  insetInlineEnd: TOAST_PADDING - TOAST_CLOSE_SLACK,
};

// The line the cross sits on has to leave room for it. AntD reserves its own
// horizontal padding, which this theme has already pulled down to 12.
export const TOAST_CLOSE_CLEARANCE = TOAST_PADDING + TOAST_CLOSE_TARGET - TOAST_CLOSE_SLACK;
