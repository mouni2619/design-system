import { SpaceTokens } from "@tokens/space";

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
