import { RadiusTokens, BorderWidthTokens } from "@tokens/border";

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
