import { ThemeColors, Grey } from "@tokens/color";
import { FontFamily, FontSize, LineHeight } from "@tokens/typography";
import { RadiusTokens, BorderWidthTokens } from "@tokens/border";
import { ShadowGeometry } from "@tokens/shadow";

// TODO: Update the AntD Config
/**
 * Ant Design ConfigProvider theme, derived from the design tokens.
 */
export const antdTheme = {
  token: {
    // Color
    colorPrimary: ThemeColors.primary,
    colorSuccess: ThemeColors.success,
    colorWarning: ThemeColors.warning,
    colorError: ThemeColors.danger,
    colorInfo: ThemeColors.info,
    colorLink: ThemeColors.link,
    colorTextBase: Grey["gray-900"],
    colorBgBase: ThemeColors.white,
    colorBorder: ThemeColors["secondary-emp-5"],

    // Typography — AntD derives its own scale from fontSize, so the heading
    // sizes are pinned explicitly to keep it on our eight-step scale.
    fontFamily: FontFamily,
    fontSize: FontSize.body,
    fontSizeHeading1: FontSize.h1,
    fontSizeHeading2: FontSize.h2,
    fontSizeHeading3: FontSize.h3,
    fontSizeHeading4: FontSize.h4,
    fontSizeHeading5: FontSize.h5,
    lineHeight: LineHeight.body / FontSize.body,

    // Border
    borderRadius: RadiusTokens.md,
    borderRadiusSM: RadiusTokens.sm,
    borderRadiusLG: RadiusTokens.lg,
    lineWidth: BorderWidthTokens[1],
    lineWidthBold: BorderWidthTokens[2],

    // Elevation
    boxShadow: `${ShadowGeometry.md} ${Grey["gray-400"]}`,
    boxShadowSecondary: `${ShadowGeometry.lg} ${Grey["gray-400"]}`,
    boxShadowTertiary: `${ShadowGeometry.sm} ${Grey["gray-400"]}`,
  },
};

export default antdTheme;
