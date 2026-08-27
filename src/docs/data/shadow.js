import { ShadowGeometry } from "@tokens/shadow";
import { Grey, ThemeColors } from "@tokens/color";

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
