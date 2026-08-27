import {
  FontSize,
  LineHeight,
  LetterSpacing,
  FontWeight,
} from "@tokens/typography";
import {
  Grey,
  DaybreakBlue,
  DustRed,
  PolarGreen,
  SunsetOrange,
} from "@tokens/color";

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
