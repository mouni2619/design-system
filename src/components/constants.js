import { SpaceTokens } from "@tokens/space";
import { ThemeColors } from "@tokens/color";

/* -------------------------------------------------------------------------- */
/*  Button                                                                     */
/* -------------------------------------------------------------------------- */

export const BUTTON_TYPES = {
  primary: "primary",
  secondary: "default",
  info: "blue",
  success: "green",
  warning: "orange",
  danger: "danger",
};

// Design system variant -> AntD `variant`.
export const BUTTON_VARIANTS = {
  "filled-dark": "solid",
  "filled-subtle": "filled",
  ghost: "text",
  outlined: "outlined",
};

// Our size names are AntD's own, so they pass straight through. AntD 6 renamed
// `middle` to `medium` and deprecated the old name for v7.
export const BUTTON_SIZES = ["small", "medium", "large"];

// Where the icon sits, in AntD's `start`/`end` vocabulary so it stays correct
// under RTL. `none` hides the icon, `only` drops the label.
export const BUTTON_ICON_POSITIONS = ["none", "start", "end", "only"];

export const DEFAULT_BUTTON_TYPE = "primary";
export const DEFAULT_BUTTON_VARIANT = "filled-dark";
export const DEFAULT_BUTTON_SIZE = "medium";
export const DEFAULT_BUTTON_ICON_POSITION = "none";

/* -------------------------------------------------------------------------- */
/*  GroupedButtons                                                             */
/* -------------------------------------------------------------------------- */

// Sits on the label's own line — the design draws a 12px glyph beside 12px text.
export const GROUPED_BUTTONS_ICON_SIZE = SpaceTokens.xs;

/* -------------------------------------------------------------------------- */
/*  Icon                                                                       */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*  Pagination                                                                 */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*  Progress                                                                   */
/* -------------------------------------------------------------------------- */

export const DEFAULT_PROGRESS_PERCENT = 0;
export const DEFAULT_PROGRESS_STATUS = "primary";

// The percent reads inside the filled track rather than beside it, so the bar
// has to hold a line of text — antd's own 8px line does not. 16px is what the
// design export measures.
export const DEFAULT_PROGRESS_HEIGHT = SpaceTokens.sm;

export const PROGRESS_PERCENT_POSITION = { type: "inner", align: "center" };

/**
 * Fill and stripe colour per status, named as in `BUTTON_TYPES`.
 *
 * The stripe is the `-emp-5` step of the fill's own ramp every time — measured
 * off the design export, where a #1890ff bar stripes in #40a9ff. antd's own
 * statuses only cover three of these five colours, so the colour is set through
 * `strokeColor` rather than left to antd's `status` classes.
 */
export const PROGRESS_STATUSES = {
  primary: { fill: ThemeColors.primary, stripe: ThemeColors["primary-emp-5"] },
  info: { fill: ThemeColors.info, stripe: ThemeColors["info-emp-5"] },
  success: { fill: ThemeColors.success, stripe: ThemeColors["success-emp-5"] },
  warning: { fill: ThemeColors.warning, stripe: ThemeColors["warning-emp-5"] },
  danger: { fill: ThemeColors.danger, stripe: ThemeColors["danger-emp-5"] },
};

// 4px bands at 45° sit the stripes 11.3px apart across the bar, which is the
// spacing the export measures.
export const STRIPE_ANGLE = "45deg";
export const STRIPE_WIDTH = SpaceTokens["3xs"];

/* -------------------------------------------------------------------------- */
/*  Toast                                                                      */
/* -------------------------------------------------------------------------- */

export const TOAST_STATUSES = ["primary", "secondary", "success", "warning", "danger", "info"];

export const TOAST_STATUS_CONFIG = {
  primary: { type: "info", backgroundClass: "bg-primary", textClass: "text-white", shadowClass: "shadow-primary" },
  secondary: {
    type: "info",
    backgroundClass: "bg-secondary",
    textClass: "text-white",
    shadowClass: "shadow-secondary",
  },
  success: { type: "success", backgroundClass: "bg-success", textClass: "text-white", shadowClass: "shadow-success" },
  warning: { type: "warning", backgroundClass: "bg-warning", textClass: "text-white", shadowClass: "shadow-warning" },
  danger: { type: "error", backgroundClass: "bg-danger", textClass: "text-white", shadowClass: "shadow-danger" },
  info: { type: "info", backgroundClass: "bg-info", textClass: "text-white", shadowClass: "shadow-info" },
};

export const DEFAULT_TOAST_STATUS = "primary";
export const DEFAULT_TOAST_TITLE = "Toast title";
export const DEFAULT_TOAST_DESCRIPTION = "Toast description";

/* -------------------------------------------------------------------------- */
/*  Tooltip                                                                    */
/* -------------------------------------------------------------------------- */

export const DEFAULT_TOOLTIP_ICON_POSITION = "start";

// Sized to sit on the tooltip's own text line without stretching it.
export const TOOLTIP_ICON_SIZE = SpaceTokens.sm;

/* -------------------------------------------------------------------------- */
/*  Upload                                                                     */
/* -------------------------------------------------------------------------- */

export const UPLOAD_VARIANTS = ["dropzone", "file-list", "logo"];
export const UPLOAD_FILE_STATUSES = ["uploading", "done", "error"];

export const DEFAULT_UPLOAD_VARIANT = "dropzone";
export const DEFAULT_UPLOAD_MAX_SIZE = 1;
export const DEFAULT_UPLOAD_ACCEPT = ".pdf";
export const DEFAULT_UPLOAD_DROPZONE_LABEL = "Upload file";
export const DEFAULT_UPLOAD_FORMAT_LABEL = "PDF";

export const UPLOAD_STATUS_CONFIG = {
  uploading: {
    borderClass: "border-secondary-emp-5",
    textClass: "text-secondary-emp-8",
  },
  done: {
    borderClass: "border-secondary-emp-5",
    textClass: "text-secondary-emp-8",
  },
  error: {
    borderClass: "border-danger",
    textClass: "text-danger",
  },
};
