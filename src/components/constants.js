import { ThemeColors } from "@tokens/color";

/* -- Button --------------------------------------------------------------- */

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

function outlinedTheme(base, fill) {
  return {
    components: {
      Button: {
        defaultBorderColor: base,
        defaultColor: base,
        defaultHoverBg: fill,
        defaultHoverBorderColor: fill,
        defaultHoverColor: ThemeColors.white,
        defaultActiveBg: fill,
        defaultActiveBorderColor: base,
        defaultActiveColor: ThemeColors.white,
      },
    },
  };
}

export const BUTTON_OUTLINED_THEMES = {
  primary: outlinedTheme(ThemeColors.primary, ThemeColors.primary),
  info: outlinedTheme(ThemeColors.info, ThemeColors.info),
  success: outlinedTheme(ThemeColors.success, ThemeColors["success-emp-5"]),
  warning: outlinedTheme(ThemeColors.warning, ThemeColors["warning-emp-5"]),
  danger: outlinedTheme(ThemeColors.danger, ThemeColors["danger-emp-5"]),
};
