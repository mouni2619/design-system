import {
  FontSize,
  LineHeight,
  LetterSpacing,
  SpaceTokens,
  RadiusTokens,
  BorderWidthTokens,
  ThemeColors,
  Grey,
  DaybreakBlue,
  DustRed,
  PolarGreen,
  SunsetOrange,
  FontFamily,
  FontWeight,
  ElectricViolet,
  MediumPurple,
  BrilliantRose,
  Sunglow,
  Aquamarine,
  Spray,
  ShadowGeometry,
} from "@tokens";

export const TypeScale = [
  {
    token: "h1",
    fontSize: FontSize.h1,
    lineHeight: LineHeight.h1,
    letterSpacing: LetterSpacing.h1,
  },
  {
    token: "h2",
    fontSize: FontSize.h2,
    lineHeight: LineHeight.h2,
    letterSpacing: LetterSpacing.h2,
  },
  {
    token: "h3",
    fontSize: FontSize.h3,
    lineHeight: LineHeight.h3,
    letterSpacing: LetterSpacing.h3,
  },
  {
    token: "h4",
    fontSize: FontSize.h4,
    lineHeight: LineHeight.h4,
    letterSpacing: LetterSpacing.h4,
  },
  {
    token: "h5",
    fontSize: FontSize.h5,
    lineHeight: LineHeight.h5,
    letterSpacing: LetterSpacing.h5,
  },
  {
    token: "h6",
    fontSize: FontSize.h6,
    lineHeight: LineHeight.h6,
    letterSpacing: LetterSpacing.h6,
  },
  {
    token: "body",
    fontSize: FontSize.body,
    lineHeight: LineHeight.body,
    letterSpacing: LetterSpacing.body,
  },
  {
    token: "caption",
    fontSize: FontSize.caption,
    lineHeight: LineHeight.caption,
    letterSpacing: LetterSpacing.caption,
  },
];

export const Spacing = [
  {
    token: "Space-3xs",
    widthClass: "w-1",
    value: SpaceTokens["3xs"],
    usage:
      "Radio & checkbox to labels, button stack, progress bar to text, tags, input to error msg",
  },
  {
    token: "Space-2xs",
    widthClass: "w-2",
    value: SpaceTokens["2xs"],
    usage:
      "buttons, form inputs, options & autocomplete, error message + exp, tab, chips",
  },
  {
    token: "Space-xs",
    widthClass: "w-3",
    value: SpaceTokens.xs,
    usage:
      "Toast, exp blocks, toast icon + text, tooltip, accordion, breadcrumb, table cells",
  },
  { token: "Space-sm", widthClass: "w-4", value: SpaceTokens.sm, usage: "" },
  {
    token: "Space-md",
    widthClass: "w-5",
    value: SpaceTokens.md,
    usage:
      "Page margins, gutter, modals, popovers, buttons, tabs, calendar, stepper, upload states",
  },
  { token: "Space-lg", widthClass: "w-6", value: SpaceTokens.lg, usage: "" },
  {
    token: "Space-xl",
    widthClass: "w-7",
    value: SpaceTokens.xl,
    usage: "Upload",
  },
  {
    token: "Space-2xl",
    widthClass: "w-8",
    value: SpaceTokens["2xl"],
    usage: "",
  },
];

export const BorderRadius = [
  {
    token: "rounded-1",
    value: RadiusTokens.sm,
    usage: "—",
  },
  {
    token: "rounded-2",
    value: RadiusTokens.md,
    usage: "Dropdowns, popovers, toasts, side panels",
  },
  {
    token: "rounded-3",
    value: RadiusTokens.lg,
    usage: "—",
  },
  {
    token: "rounded-4",
    value: RadiusTokens.xl,
    usage:
      "Btns, input, options, checkbox, chat, toast, exp block, tab, tooltip, accordion, chips, calendar border, chat msg, upload, states, progress bar, tags, img black bg, color picker, table",
  },
  {
    token: "rounded-5",
    value: RadiusTokens.xxl,
    usage: "—",
  },
  {
    token: "rounded-circle",
    value: RadiusTokens.circle,
    usage: "Radio, badge, user profile, stepper icon circle",
  },
];

export const BorderStrength = [
  {
    token: "border-1",
    value: BorderWidthTokens[1],
    usage: "Default subtle border for components and cards",
  },
  {
    token: "border-2",
    value: BorderWidthTokens[2],
    usage: "Medium emphasis border, active states",
  },
  {
    token: "border-3",
    value: BorderWidthTokens[3],
    usage: "Thick emphasis border, focused states",
  },
  {
    token: "border-4",
    value: BorderWidthTokens[4],
    usage: "Heavy border highlight",
  },
  {
    token: "border-5",
    value: BorderWidthTokens[5],
    usage: "Extra heavy border highlight or accents",
  },
];

export const ElevationShadows = [
  {
    token: "shadow-sm",
    value: `${ShadowGeometry.sm} ${Grey["gray-400"]}`,
    usage: "Tooltip, cards, map icons",
  },
  {
    token: "shadow",
    value: `${ShadowGeometry.md} ${Grey["gray-400"]}`,
    usage: "Dropdowns, popovers, toasts, side panels",
  },
  {
    token: "shadow-lg",
    value: `${ShadowGeometry.lg} ${Grey["gray-400"]}`,
    usage: "Modals",
  },
];

export const FocusRingShadows = [
  {
    token: "shadow-primary",
    borderClass: "border-primary",
    ref: "DaybreakBlue/100",
    value: `${ShadowGeometry.focus} ${ThemeColors["primary-emp-1"]}`,
    usage: "Focused panels, module switch cards",
  },
  {
    token: "shadow-danger",
    borderClass: "border-danger",
    ref: "DustRed/100",
    value: `${ShadowGeometry.focus} ${ThemeColors["danger-emp-1"]}`,
    usage: "Invalid field focus",
  },
  {
    token: "shadow-success",
    borderClass: "border-success",
    ref: "PolarGreen/100",
    value: `${ShadowGeometry.focus} ${ThemeColors["success-emp-1"]}`,
    usage: "Valid field focus",
  },
  {
    token: "shadow-warning",
    borderClass: "border-warning",
    ref: "SunsetOrange/100",
    value: `${ShadowGeometry.focus} ${ThemeColors["warning-emp-1"]}`,
    usage: "Warning field focus",
  },
  {
    token: "shadow-info",
    borderClass: "border-info",
    ref: "DaybreakBlue/100",
    value: `${ShadowGeometry.focus} ${ThemeColors["info-emp-1"]}`,
    usage: "Active navigation items",
  },
  {
    token: "shadow-secondary",
    borderClass: "border-secondary-emp-5",
    ref: "Grey/200",
    value: `${ShadowGeometry.focus} ${ThemeColors["secondary-emp-2"]}`,
    usage: "Neutral focus",
  },
];

// Theme color families in ascending palette order; refs are 1-based palette positions.
export const ThemeTokenGroups = [
  {
    title: "Primary & Link (Blue Gradient)",
    baseHex: DaybreakBlue["blue-600"],
    tokens: [
      {
        token: "primary-emp-1",
        ref: "DaybreakBlue/1",
        hex: DaybreakBlue["blue-100"],
      },
      {
        token: "primary-emp-2",
        ref: "DaybreakBlue/2",
        hex: DaybreakBlue["blue-200"],
      },
      {
        token: "primary-emp-3",
        ref: "DaybreakBlue/3",
        hex: DaybreakBlue["blue-300"],
      },
      {
        token: "primary-emp-5",
        ref: "DaybreakBlue/5",
        hex: DaybreakBlue["blue-500"],
      },
      {
        token: "primary",
        ref: "DaybreakBlue/6",
        hex: DaybreakBlue["blue-600"],
      },
      {
        token: "primary-emp-7",
        ref: "DaybreakBlue/7",
        hex: DaybreakBlue["blue-700"],
      },
    ],
  },
  {
    title: "Secondary & Neutral (Grey Gradient)",
    baseHex: Grey["gray-700"],
    tokens: [
      { token: "white", ref: "Grey/1", hex: Grey.white },
      { token: "secondary-emp-2", ref: "Grey/3", hex: Grey["gray-200"] },
      { token: "secondary-emp-3", ref: "Grey/4", hex: Grey["gray-300"] },
      { token: "secondary-emp-4", ref: "Grey/5", hex: Grey["gray-400"] },
      { token: "secondary-emp-5", ref: "Grey/6", hex: Grey["gray-500"] },
      {
        token: "secondary-emp-6",
        alias: "disable",
        ref: "Grey/7",
        hex: Grey["gray-600"],
      },
      { token: "secondary", ref: "Grey/8", hex: Grey["gray-700"] },
      {
        token: "secondary-emp-8",
        alias: "default",
        ref: "Grey/9",
        hex: Grey["gray-800"],
      },
      { token: "dark", ref: "Grey/10", hex: Grey["gray-900"] },
      { token: "black", ref: "Grey/11", hex: Grey["gray-1000"] },
    ],
  },
  {
    title: "Success (Green Gradient)",
    baseHex: PolarGreen["green-600"],
    tokens: [
      {
        token: "success-emp-1",
        ref: "PolarGreen/1",
        hex: PolarGreen["green-100"],
      },
      {
        token: "success-emp-2",
        ref: "PolarGreen/2",
        hex: PolarGreen["green-200"],
      },
      {
        token: "success-emp-3",
        ref: "PolarGreen/3",
        hex: PolarGreen["green-300"],
      },
      {
        token: "success-emp-5",
        ref: "PolarGreen/5",
        hex: PolarGreen["green-500"],
      },
      { token: "success", ref: "PolarGreen/6", hex: PolarGreen["green-600"] },
      {
        token: "success-emp-7",
        ref: "PolarGreen/7",
        hex: PolarGreen["green-700"],
      },
    ],
  },
  {
    title: "Danger (Red Gradient)",
    baseHex: DustRed["red-600"],
    tokens: [
      { token: "danger-emp-1", ref: "DustRed/1", hex: DustRed["red-100"] },
      { token: "danger-emp-2", ref: "DustRed/2", hex: DustRed["red-200"] },
      { token: "danger-emp-3", ref: "DustRed/3", hex: DustRed["red-300"] },
      { token: "danger-emp-5", ref: "DustRed/5", hex: DustRed["red-500"] },
      { token: "danger", ref: "DustRed/6", hex: DustRed["red-600"] },
      { token: "danger-emp-7", ref: "DustRed/7", hex: DustRed["red-700"] },
    ],
  },
  {
    title: "Info (Blue Gradient)",
    baseHex: DaybreakBlue["blue-600"],
    tokens: [
      {
        token: "info-emp-1",
        ref: "DaybreakBlue/1",
        hex: DaybreakBlue["blue-100"],
      },
      {
        token: "info-emp-2",
        ref: "DaybreakBlue/2",
        hex: DaybreakBlue["blue-200"],
      },
      {
        token: "info-emp-3",
        ref: "DaybreakBlue/3",
        hex: DaybreakBlue["blue-300"],
      },
      {
        token: "info-emp-5",
        ref: "DaybreakBlue/5",
        hex: DaybreakBlue["blue-500"],
      },
      { token: "info", ref: "DaybreakBlue/6", hex: DaybreakBlue["blue-600"] },
      {
        token: "info-emp-7",
        ref: "DaybreakBlue/7",
        hex: DaybreakBlue["blue-700"],
      },
    ],
  },
  {
    title: "Warning (Orange Gradient)",
    baseHex: SunsetOrange["orange-600"],
    tokens: [
      {
        token: "warning-emp-1",
        ref: "SunsetOrange/1",
        hex: SunsetOrange["orange-100"],
      },
      {
        token: "warning-emp-2",
        ref: "SunsetOrange/2",
        hex: SunsetOrange["orange-200"],
      },
      {
        token: "warning-emp-3",
        ref: "SunsetOrange/3",
        hex: SunsetOrange["orange-300"],
      },
      {
        token: "warning-emp-5",
        ref: "SunsetOrange/5",
        hex: SunsetOrange["orange-500"],
      },
      {
        token: "warning",
        ref: "SunsetOrange/6",
        hex: SunsetOrange["orange-600"],
      },
      {
        token: "warning-emp-7",
        ref: "SunsetOrange/7",
        hex: SunsetOrange["orange-700"],
      },
    ],
  },
];

export const FontWeights = [
  { name: "fw-light", value: FontWeight.light },
  { name: "fw-normal", value: FontWeight.normal },
  { name: "fw-medium", value: FontWeight.medium },
  { name: "fw-semibold", value: FontWeight.semibold },
  { name: "fw-bold", value: FontWeight.bold },
];

export const TextColors = [
  {
    role: "Page title",
    ref: "Grey 9",
    hex: Grey["gray-900"],
    className: "",
    bgClassName: "text-color-swatch-default",
  },
  {
    role: "Primary Text (body)",
    ref: "Grey 8",
    hex: Grey["gray-800"],
    className: "text-secondary-emp-8",
    bgClassName: "bg-secondary-emp-8",
  },
  {
    role: "Secondary Text (page subtitle & subheading, body)",
    ref: "Grey 7",
    hex: Grey["gray-700"],
    className: "text-secondary",
    bgClassName: "bg-secondary",
  },
  {
    role: "Info",
    ref: "Daybreak Blue 6",
    hex: DaybreakBlue["blue-600"],
    className: "text-info",
    bgClassName: "bg-info",
  },
  {
    role: "Success",
    ref: "Polar Green 6",
    hex: PolarGreen["green-600"],
    className: "text-success",
    bgClassName: "bg-success",
  },
  {
    role: "Warning",
    ref: "Sunset Orange 6",
    hex: SunsetOrange["orange-600"],
    className: "text-warning",
    bgClassName: "bg-warning",
  },
  {
    role: "Error",
    ref: "Dust Red 6",
    hex: DustRed["red-600"],
    className: "text-danger",
    bgClassName: "bg-danger",
  },
  {
    // bg-disable is $gray-300, not $gray-600 — see $custom-bg-colors
    role: "Disable/mute",
    ref: "Grey 6",
    hex: Grey["gray-600"],
    className: "text-disable",
    bgClassName: "bg-disable-emp-6",
  },
  {
    role: "Link",
    ref: "Daybreak Blue 6",
    hex: DaybreakBlue["blue-600"],
    className: "text-link",
    bgClassName: "bg-link",
  },
];

export const Palettes = {
  "Daybreak Blue": DaybreakBlue,
  "Dust Red": DustRed,
  "Sunset Orange": SunsetOrange,
  "Polar Green": PolarGreen,
  Grey: Grey,
  "Electric Violet": ElectricViolet,
  "Medium Purple": MediumPurple,
  "Brilliant Rose": BrilliantRose,
  Sunglow: Sunglow,
  Aquamarine: Aquamarine,
  Spray: Spray,
};
