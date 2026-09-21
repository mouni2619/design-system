import { ThemeColors } from "@tokens/color";
import { SpaceTokens } from "@tokens/space";

/**
 * Progress constants.
 */

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
