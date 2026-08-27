import {
  Grey,
  DaybreakBlue,
  DustRed,
  PolarGreen,
  SunsetOrange,
  ElectricViolet,
  MediumPurple,
  BrilliantRose,
  Sunglow,
  Aquamarine,
  Spray,
} from "@tokens/color";

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
