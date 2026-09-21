import { SpaceTokens } from "@tokens/space";
import { FontSize } from "@tokens/typography";

/**
 * Select constants.
 */

export const DEFAULT_SELECT_SIZE = "medium";

// The sheet draws the chevron, and the magnifier a search brings, at one size
// whatever the field's own size is.
export const SELECT_ICON_SIZE = FontSize.caption;

// The sheet sets the option rows 4 apart inside the panel's 8 of inset, so
// each row reads as its own block. AntD stacks them flush and has no token for
// the gap, so it rides on the row itself — and the panel gives back the 4 at
// the bottom, where the last row's own gap already stands in for it.
const SELECT_OPTION_GAP = SpaceTokens["3xs"];
const SELECT_PANEL_INSET = SpaceTokens["2xs"];

export const SELECT_POPUP_STYLES = {
  root: { paddingBottom: SELECT_PANEL_INSET - SELECT_OPTION_GAP },
  listItem: { marginBottom: SELECT_OPTION_GAP },
};
