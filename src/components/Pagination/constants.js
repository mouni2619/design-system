import { SpaceTokens } from "@tokens/space";

/**
 * Pagination constants.
 */

export const DEFAULT_PAGINATION_VARIANT = "icon";
export const DEFAULT_PAGINATION_SIZE = "medium";

export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

// How many pages sit either side of the current one, so the window is
// `1 … 5 6 7 … 20` — first, last, both ellipses, current and its two siblings.
export const SIBLING_COUNT = 1;

// Stands in for a run of hidden pages, and doubles as the cell's label.
export const ELLIPSIS = "…";

// How far an ellipsis skips when clicked. Wider than the visible window, so a
// jump always lands on pages that were not already on screen.
export const ELLIPSIS_JUMP = 5;

// The prev/next chevrons, sized to match the cell's text rather than the icon
// scale's default.
export const ARROW_ICON_SIZE = SpaceTokens.sm;
