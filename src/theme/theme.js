/**
 * Mandark Documentation Theme Presentation Tokens
 * Feeds the Foundations pages (tables, swatches, matrices).
 * Hand-written presentation layer that takes data directly from tokens.js.
 */

import {
  Palettes,
  ThemeColors,
  NeutralColors,
  FontSize,
  LineHeight,
  LetterSpacing,
  FontWeight,
  SpaceTokens,
  BorderWidthTokens,
  RadiusTokens,
  ElevationShadows,
  FocusRingShadows,
} from "../tokens.js";

/** A semantic token's hex traced back to the palette step that authored it, e.g. `"DaybreakBlue/6"`. */
export const paletteRef = (hex) => {
  for (const [rampName, steps] of Object.entries(Palettes)) {
    const index = Object.values(steps).indexOf(hex);
    if (index !== -1) return `${rampName.replace(/ /g, "")}/${index + 1}`;
  }
  return null;
};

const capitalize = (s) => (s ? s[0].toUpperCase() + s.slice(1) : "");

/** Helper to format a single token into `[name, ref, hex]` */
const formatToken = (name, hex) => [name, paletteRef(hex), hex];

/* ------------------------------------------------------------------ *
 * Semantic Theme Tokens Grouped by Color Gradient Families
 * ------------------------------------------------------------------ */

export const primaryGradientTokens = [
  formatToken("primary-emp-1", ThemeColors["primary-emp-1"]),
  formatToken("primary-emp-2", ThemeColors["primary-emp-2"]),
  formatToken("primary-emp-3", ThemeColors["primary-emp-3"]),
  formatToken("primary-emp-5", ThemeColors["primary-emp-5"]),
  formatToken("primary", ThemeColors.primary),
  formatToken("primary-emp-7", ThemeColors["primary-emp-7"]),
];

export const successGradientTokens = [
  formatToken("success-emp-1", ThemeColors["success-emp-1"]),
  formatToken("success-emp-2", ThemeColors["success-emp-2"]),
  formatToken("success-emp-3", ThemeColors["success-emp-3"]),
  formatToken("success-emp-5", ThemeColors["success-emp-5"]),
  formatToken("success", ThemeColors.success),
  formatToken("success-emp-7", ThemeColors["success-emp-7"]),
];

export const dangerGradientTokens = [
  formatToken("danger-emp-1", ThemeColors["danger-emp-1"]),
  formatToken("danger-emp-2", ThemeColors["danger-emp-2"]),
  formatToken("danger-emp-3", ThemeColors["danger-emp-3"]),
  formatToken("danger-emp-5", ThemeColors["danger-emp-5"]),
  formatToken("danger", ThemeColors.danger),
  formatToken("danger-emp-7", ThemeColors["danger-emp-7"]),
];

export const warningGradientTokens = [
  formatToken("warning-emp-1", ThemeColors["warning-emp-1"]),
  formatToken("warning-emp-2", ThemeColors["warning-emp-2"]),
  formatToken("warning-emp-3", ThemeColors["warning-emp-3"]),
  formatToken("warning-emp-5", ThemeColors["warning-emp-5"]),
  formatToken("warning", ThemeColors.warning),
  formatToken("warning-emp-7", ThemeColors["warning-emp-7"]),
];

export const infoGradientTokens = [
  formatToken("info-emp-1", ThemeColors["info-emp-1"]),
  formatToken("info-emp-2", ThemeColors["info-emp-2"]),
  formatToken("info-emp-3", ThemeColors["info-emp-3"]),
  formatToken("info-emp-5", ThemeColors["info-emp-5"]),
  formatToken("info", ThemeColors.info),
  formatToken("info-emp-7", ThemeColors["info-emp-7"]),
];

export const secondaryNeutralGradientTokens = [
  formatToken("white", NeutralColors.light),
  formatToken("secondary-emp-2", ThemeColors["secondary-emp-2"]),
  formatToken("secondary-emp-3", ThemeColors["secondary-emp-3"]),
  formatToken("secondary-emp-4", ThemeColors["secondary-emp-4"]),
  formatToken("secondary-emp-5", ThemeColors["secondary-emp-5"]),
  formatToken("secondary-emp-6 / disable", ThemeColors["secondary-emp-6"]),
  formatToken("secondary", ThemeColors.secondary),
  formatToken("secondary-emp-8 / default", NeutralColors.default),
  formatToken("dark", NeutralColors.dark),
  formatToken("black", NeutralColors.black),
];

export const themeGradientGroups = [
  { name: "Primary & Link (Blue Gradient)", color: ThemeColors.primary, tokens: primaryGradientTokens },
  { name: "Success (Green Gradient)", color: ThemeColors.success, tokens: successGradientTokens },
  { name: "Danger (Red Gradient)", color: ThemeColors.danger, tokens: dangerGradientTokens },
  { name: "Warning (Orange Gradient)", color: ThemeColors.warning, tokens: warningGradientTokens },
  { name: "Info (Blue Gradient)", color: ThemeColors.info, tokens: infoGradientTokens },
  { name: "Secondary & Neutral (Grey Gradient)", color: ThemeColors.secondary, tokens: secondaryNeutralGradientTokens },
];

/* ------------------------------------------------------------------ *
 * Typography Scale & Weights
 * ------------------------------------------------------------------ */

const typeScaleOrder = ["caption", "body", "h6", "h5", "h4", "h3", "h2", "h1"];

export const typeScale = typeScaleOrder.map((step) => ({
  token: step.length <= 2 ? step.toUpperCase() : capitalize(step),
  fontSize: FontSize[step],
  lineHeight: LineHeight[step],
  letterSpacing: LetterSpacing[step],
}));

export const fontWeights = [
  { name: "Light", value: 300 },
  { name: "Regular", value: 400 },
  { name: "Medium", value: 500 },
  { name: "Semibold", value: 600 },
  { name: "Bold", value: 700 },
];

// Friendly labels for the Typography colour table
const typographyColorLabels = [
  ["Page title", NeutralColors, "dark"],
  ["Primary text (body)", NeutralColors, "default"],
  ["Secondary text (subtitle & subheading)", ThemeColors, "secondary"],
  ["Info", ThemeColors, "info"],
  ["Success", ThemeColors, "success"],
  ["Warning", ThemeColors, "warning"],
  ["Error", ThemeColors, "danger"],
  ["Disabled note", NeutralColors, "disable"],
  ["Link", ThemeColors, "primary"],
];

export const typographyColors = typographyColorLabels.map(([role, map, key]) => [role, paletteRef(map[key]), map[key]]);

export const spacing = Object.entries(SpaceTokens).map(([key, value]) => ({
  token: `Space-${key}`,
  value,
}));

export const borderWidths = Object.entries(BorderWidthTokens).map(([key, value]) => ({
  token: `border-${key}`,
  value,
}));

export const borderRadius = Object.entries(RadiusTokens)
  .filter(([key]) => key !== "pill")
  .map(([key, value]) => ({
    token: `border-radius-${key}`,
    value,
  }));

export const elevationShadows = Object.entries(ElevationShadows).map(([key, value]) => ({
  token: `Shadow-${key}`,
  value,
}));

export const focusRingShadows = Object.entries(FocusRingShadows).map(([key, { border, value }]) => ({
  token: `Shadow-${key}`,
  border,
  value,
}));

export default {
  paletteRef,
  themeGradientGroups,
  primaryGradientTokens,
  successGradientTokens,
  dangerGradientTokens,
  warningGradientTokens,
  infoGradientTokens,
  secondaryNeutralGradientTokens,
  typeScale,
  fontWeights,
  typographyColors,
  spacing,
  borderWidths,
  borderRadius,
  elevationShadows,
  focusRingShadows,
};
