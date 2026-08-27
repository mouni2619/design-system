import { SpaceTokens } from "@tokens/space";

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
