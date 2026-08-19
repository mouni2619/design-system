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
    token: "w-1",
    value: SpaceTokens["3xs"],
    usage:
      "Radio & checkbox to labels, button stack, progress bar to text, tags, input to error msg",
  },
  {
    token: "w-2",
    value: SpaceTokens["2xs"],
    usage:
      "buttons, form inputs, options & autocomplete, error message + exp, tab, chips",
  },
  {
    token: "w-3",
    value: SpaceTokens.xs,
    usage:
      "Toast, exp blocks, toast icon + text, tooltip, accordion, breadcrumb, table cells",
  },
  { token: "w-4", value: SpaceTokens.sm, usage: "—" },
  {
    token: "w-5",
    value: SpaceTokens.md,
    usage:
      "Page margins, gutter, modals, popovers, buttons, tabs, calendar, stepper, upload states",
  },
  { token: "w-6", value: SpaceTokens.lg, usage: "—" },
  { token: "w-7", value: SpaceTokens.xl, usage: "Upload" },
  { token: "w-8", value: SpaceTokens["2xl"], usage: "—" },
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
    value: `0 2px 4px 0 ${Grey["gray-400"]}`,
    usage: "Tooltip, cards, map icons",
  },
  {
    token: "shadow",
    value: `0 4px 8px 0 ${Grey["gray-400"]}`,
    usage: "Dropdowns, popovers, toasts, side panels",
  },
  {
    token: "shadow-lg",
    value: `0 8px 12px 2px ${Grey["gray-400"]}`,
    usage: "Modals",
  },
];

export const FocusRingShadows = [
  {
    token: "shadow-primary",
    border: ThemeColors["primary"],
    ref: "DaybreakBlue/100",
    value: `0 0 0 4px ${ThemeColors["primary-emp-1"]}`,
    usage: "Focused panels, module switch cards",
  },
  {
    token: "shadow-danger",
    border: ThemeColors["danger"],
    ref: "DustRed/100",
    value: `0 0 0 4px ${ThemeColors["danger-emp-1"]}`,
    usage: "Invalid field focus",
  },
  {
    token: "shadow-success",
    border: ThemeColors["success"],
    ref: "PolarGreen/100",
    value: `0 0 0 4px ${ThemeColors["success-emp-1"]}`,
    usage: "Valid field focus",
  },
  {
    token: "shadow-warning",
    border: ThemeColors["warning"],
    ref: "SunsetOrange/100",
    value: `0 0 0 4px ${ThemeColors["warning-emp-1"]}`,
    usage: "Warning field focus",
  },
  {
    token: "shadow-info",
    border: ThemeColors["info"],
    ref: "DaybreakBlue/100",
    value: `0 0 0 4px ${ThemeColors["info-emp-1"]}`,
    usage: "Active navigation items",
  },
  {
    token: "shadow-secondary",
    border: ThemeColors["secondary-emp-5"],
    ref: "Grey/200",
    value: `0 0 0 4px ${ThemeColors["secondary-emp-2"]}`,
    usage: "Neutral focus",
  },
];

export const TextTokens = [
  ["primary", "Blue-600", ThemeColors["primary"]],
  ["primary-emp-7", "Blue-700", ThemeColors["primary-emp-7"]],
  ["secondary", "Grey-700", ThemeColors["secondary"]],
  ["success", "Green-600", ThemeColors["success"]],
  ["danger", "Red/600", ThemeColors["danger"]],
  ["danger-emp-1", "Red/100", ThemeColors["danger-emp-1"]],
  ["warning", "Orange-600", ThemeColors["warning"]],
  ["link", "Blue-600", ThemeColors["link"]],
  ["link-emp-5", "Blue-500", ThemeColors["link-emp-5"]],
  ["link-emp-7", "Blue-700", ThemeColors["link-emp-7"]],
  ["info", "Blue-600", ThemeColors["info"]],
  ["white", "Grey-100", ThemeColors["white"]],
  ["body", "Grey-800", ThemeColors["secondary-emp-8"]],
];

export const BorderTokens = [
  ["primary", "Blue-600", ThemeColors["primary"]],
  ["primary-emp-1", "Blue-100", ThemeColors["primary-emp-1"]],
  ["secondary", "Grey-700", ThemeColors["secondary"]],
  ["secondary-emp-2", "Grey-200", ThemeColors["secondary-emp-2"]],
  ["secondary-emp-3", "Grey-300", ThemeColors["secondary-emp-3"]],
  ["secondary-emp-6", "Grey-600", ThemeColors["secondary-emp-6"]],
  ["success", "Green-600", ThemeColors["success"]],
  ["success-emp-1", "Green-100", ThemeColors["success-emp-1"]],
  ["success-emp-3", "Green-300", ThemeColors["success-emp-3"]],
  ["danger", "Red-600", ThemeColors["danger"]],
  ["danger-emp-1", "Red-100", ThemeColors["danger-emp-1"]],
  ["danger-emp-3", "Red-300", ThemeColors["danger-emp-3"]],
  ["warning", "Orange-600", ThemeColors["warning"]],
  ["warning-emp-1", "Orange-100", ThemeColors["warning-emp-1"]],
  ["warning-emp-3", "Orange-300", ThemeColors["warning-emp-3"]],
  ["info", "Blue-600", ThemeColors["info"]],
  ["info-emp-1", "Blue-100", ThemeColors["info-emp-1"]],
  ["info-emp-3", "Blue-300", ThemeColors["info-emp-3"]],
  ["info-emp-5", "Blue-500", ThemeColors["info-emp-5"]],
  ["info-emp-7", "Blue-700", ThemeColors["info-emp-7"]],
];

export const BackgroundTokens = [
  ["primary", "Blue-600", ThemeColors["primary"]],
  ["primary-emp-1", "Blue-100", ThemeColors["primary-emp-1"]],
  ["primary-emp-2", "Blue-200", ThemeColors["primary-emp-2"]],
  ["primary-emp-3", "Blue-300", ThemeColors["primary-emp-3"]],
  ["primary-emp-5", "Blue-500", ThemeColors["primary-emp-5"]],
  ["primary-emp-7", "Blue-700", ThemeColors["primary-emp-7"]],
  ["secondary", "Grey-700", ThemeColors["secondary"]],
  ["secondary-emp-2", "Grey-200", ThemeColors["secondary-emp-2"]],
  ["secondary-emp-3", "Grey-300", ThemeColors["secondary-emp-3"]],
  ["secondary-emp-4", "Grey-400", ThemeColors["secondary-emp-4"]],
  ["secondary-emp-5", "Grey-500", ThemeColors["secondary-emp-5"]],
  ["secondary-emp-6", "Grey-600", ThemeColors["secondary-emp-6"]],
  ["secondary-emp-8", "Grey-800", ThemeColors["secondary-emp-8"]],
  ["success", "Green-600", ThemeColors["success"]],
  ["success-emp-1", "Green-100", ThemeColors["success-emp-1"]],
  ["success-emp-2", "Green-200", ThemeColors["success-emp-2"]],
  ["success-emp-3", "Green-300", ThemeColors["success-emp-3"]],
  ["success-emp-5", "Green-500", ThemeColors["success-emp-5"]],
  ["success-emp-7", "Green-700", ThemeColors["success-emp-7"]],
  ["danger", "Red-600", ThemeColors["danger"]],
  ["danger-emp-1", "Red-100", ThemeColors["danger-emp-1"]],
  ["danger-emp-2", "Red-200", ThemeColors["danger-emp-2"]],
  ["danger-emp-3", "Red-300", ThemeColors["danger-emp-3"]],
  ["danger-emp-5", "Red-500", ThemeColors["danger-emp-5"]],
  ["danger-emp-7", "Red-700", ThemeColors["danger-emp-7"]],
  ["warning", "Orange-600", ThemeColors["warning"]],
  ["warning-emp-1", "Orange-100", ThemeColors["warning-emp-1"]],
  ["warning-emp-2", "Orange-200", ThemeColors["warning-emp-2"]],
  ["warning-emp-3", "Orange-300", ThemeColors["warning-emp-3"]],
  ["warning-emp-5", "Orange-500", ThemeColors["warning-emp-5"]],
  ["warning-emp-7", "Orange-700", ThemeColors["warning-emp-7"]],
  ["info", "Blue-600", ThemeColors["info"]],
  ["info-emp-1", "Blue-100", ThemeColors["info-emp-1"]],
  ["info-emp-2", "Blue-200", ThemeColors["info-emp-2"]],
  ["info-emp-3", "Blue-300", ThemeColors["info-emp-3"]],
  ["info-emp-5", "Blue-500", ThemeColors["info-emp-5"]],
  ["info-emp-7", "Blue-700", ThemeColors["info-emp-7"]],
  ["black", "Grey-1000", ThemeColors["black"]],
  ["disable-emp-2", "Grey-200", ThemeColors["disable-emp-2"]],
  ["disable-emp-6", "Grey-600", ThemeColors["disable-emp-6"]],
];

export const IconTokens = [
  ["primary", "Blue-600", ThemeColors["primary"]],
  ["primary-emp-7", "Blue-700", ThemeColors["primary-emp-7"]],
  ["secondary", "Grey-700", ThemeColors["secondary"]],
  ["success", "Green-600", ThemeColors["success"]],
  ["success-emp-7", "Green-700", ThemeColors["success-emp-7"]],
  ["danger", "Red-600", ThemeColors["danger"]],
  ["danger-emp-7", "Red-700", ThemeColors["danger-emp-7"]],
  ["warning", "Orange-600", ThemeColors["warning"]],
  ["warning-emp-7", "Orange-700", ThemeColors["warning-emp-7"]],
  ["info", "Blue-600", ThemeColors["info"]],
  ["info-emp-7", "Blue-700", ThemeColors["info-emp-7"]],
  ["white", "Grey-100", ThemeColors["white"]],
];

export const FontWeights = [
  { name: "fw-light", value: FontWeight.light },
  { name: "fw-normal", value: FontWeight.normal },
  { name: "fw-medium", value: FontWeight.medium },
  { name: "fw-semibold", value: FontWeight.semibold },
  { name: "fw-bold", value: FontWeight.bold },
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
