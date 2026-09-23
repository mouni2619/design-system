import { ThemeColors, Grey } from "@tokens/color";
import {
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
} from "@tokens/typography";
import { RadiusTokens, BorderWidthTokens } from "@tokens/border";
import { ShadowGeometry } from "@tokens/shadow";
import { SpaceTokens } from "@tokens/space";

/**
 * Ant Design ConfigProvider theme, derived from the design tokens.
 * Every value here traces back to `@tokens/*`
 */
export const antdTheme = {
  token: {
    // Color — status
    colorPrimary: ThemeColors.primary,
    colorSuccess: ThemeColors.success,
    colorWarning: ThemeColors.warning,
    colorError: ThemeColors.danger,
    colorInfo: ThemeColors.info,
    colorLink: ThemeColors.link,

    blue: ThemeColors.info,
    green: ThemeColors.success,
    orange: ThemeColors.warning,
    red: ThemeColors.danger,

    // Color — the emphasis ramps AntD uses for hover, active and subtle fills.
    // Without these it derives its own from colorPrimary and drifts off-palette.
    colorPrimaryBg: ThemeColors["primary-emp-1"],
    colorPrimaryBgHover: ThemeColors["primary-emp-2"],
    colorPrimaryBorder: ThemeColors["primary-emp-3"],
    colorPrimaryBorderHover: ThemeColors["primary-emp-5"],
    colorPrimaryHover: ThemeColors["primary-emp-5"],
    colorPrimaryActive: ThemeColors["primary-emp-7"],
    colorPrimaryText: ThemeColors.primary,
    colorPrimaryTextHover: ThemeColors["primary-emp-5"],
    colorPrimaryTextActive: ThemeColors["primary-emp-7"],

    colorSuccessBg: ThemeColors["success-emp-1"],
    colorSuccessBgHover: ThemeColors["success-emp-2"],
    colorSuccessBorder: ThemeColors["success-emp-3"],
    colorSuccessBorderHover: ThemeColors["success-emp-5"],
    colorSuccessHover: ThemeColors["success-emp-5"],
    colorSuccessActive: ThemeColors["success-emp-7"],
    colorSuccessText: ThemeColors.success,
    colorSuccessTextHover: ThemeColors["success-emp-5"],
    colorSuccessTextActive: ThemeColors["success-emp-7"],

    colorWarningBg: ThemeColors["warning-emp-1"],
    colorWarningBgHover: ThemeColors["warning-emp-2"],
    colorWarningBorder: ThemeColors["warning-emp-3"],
    colorWarningBorderHover: ThemeColors["warning-emp-5"],
    colorWarningHover: ThemeColors["warning-emp-5"],
    colorWarningActive: ThemeColors["warning-emp-7"],
    colorWarningText: ThemeColors.warning,
    colorWarningTextHover: ThemeColors["warning-emp-5"],
    colorWarningTextActive: ThemeColors["warning-emp-7"],

    colorErrorBg: ThemeColors["danger-emp-1"],
    colorErrorBgHover: ThemeColors["danger-emp-2"],
    colorErrorBorder: ThemeColors["danger-emp-3"],
    colorErrorBorderHover: ThemeColors["danger-emp-5"],
    colorErrorHover: ThemeColors["danger-emp-5"],
    colorErrorActive: ThemeColors["danger-emp-7"],
    colorErrorText: ThemeColors.danger,
    colorErrorTextHover: ThemeColors["danger-emp-5"],
    colorErrorTextActive: ThemeColors["danger-emp-7"],

    colorInfoBg: ThemeColors["info-emp-1"],
    colorInfoBgHover: ThemeColors["info-emp-2"],
    colorInfoBorder: ThemeColors["info-emp-3"],
    colorInfoBorderHover: ThemeColors["info-emp-5"],
    colorInfoHover: ThemeColors["info-emp-5"],
    colorInfoActive: ThemeColors["info-emp-7"],
    colorInfoText: ThemeColors.info,
    colorInfoTextHover: ThemeColors["info-emp-5"],
    colorInfoTextActive: ThemeColors["info-emp-7"],

    // Color — text, surfaces and borders
    colorTextBase: Grey["gray-800"],
    colorTextHeading: ThemeColors.dark,
    colorTextSecondary: ThemeColors.secondary,
    colorTextDisabled: ThemeColors["disable-emp-6"],
    colorTextLightSolid: ThemeColors.white,

    colorBgBase: ThemeColors.white,
    colorBgContainer: ThemeColors.white,
    colorBgLayout: ThemeColors["secondary-emp-2"],

    colorBorder: ThemeColors["secondary-emp-5"],
    colorBorderSecondary: ThemeColors["secondary-emp-3"],

    // Typography — AntD derives its own scale from fontSize, so the heading
    fontFamily: FontFamily,
    fontSize: FontSize.body,
    fontSizeHeading1: FontSize.h1,
    fontSizeHeading2: FontSize.h2,
    fontSizeHeading3: FontSize.h3,
    fontSizeHeading4: FontSize.h4,
    fontSizeHeading5: FontSize.h5,
    lineHeight: LineHeight.body / FontSize.body,
    lineHeightHeading1: LineHeight.h1 / FontSize.h1,
    lineHeightHeading2: LineHeight.h2 / FontSize.h2,
    lineHeightHeading3: LineHeight.h3 / FontSize.h3,
    lineHeightHeading4: LineHeight.h4 / FontSize.h4,
    lineHeightHeading5: LineHeight.h5 / FontSize.h5,

    // Border
    borderRadius: RadiusTokens.md,
    borderRadiusSM: RadiusTokens.sm,
    borderRadiusLG: RadiusTokens.lg,
    lineWidth: BorderWidthTokens[1],
    lineWidthBold: BorderWidthTokens[2],

    // Sizing — AntD builds its spacing scale from these two, so pointing them
    sizeUnit: SpaceTokens["3xs"],
    sizeStep: SpaceTokens["3xs"],

    // Focus ring
    controlOutlineWidth: BorderWidthTokens[4],
    controlOutline: ThemeColors["primary-emp-1"],

    // Elevation — geometry from tokens, colour applied here.
    boxShadow: `${ShadowGeometry.md} ${Grey["gray-400"]}`,
    boxShadowSecondary: `${ShadowGeometry.lg} ${Grey["gray-400"]}`,
    boxShadowTertiary: `${ShadowGeometry.sm} ${Grey["gray-400"]}`,
  },

  cssVar: { prefix: "ant" },

  components: {
    Tabs: {
      cardBg: ThemeColors.white,
      cardGutter: 0,
      cardPadding: "11px 16px",
      colorBorderSecondary: ThemeColors["secondary-emp-5"],
      horizontalItemGutter: 0,
      horizontalItemPadding: "12px 16px",
      inkBarColor: ThemeColors.primary,
      itemColor: ThemeColors.dark,
      itemHoverColor: ThemeColors["primary-emp-5"],
      itemSelectedColor: ThemeColors.primary,
      titleFontSize: FontSize.h6,
      borderRadiusLG: RadiusTokens.md,
    },
    Spin: {
      dotSize: 48,
      dotSizeSM: 48,
      dotSizeLG: 48,
      ringSize: 48,
      ringDotRadius: 2.5,
      ringRotation: 90,
      ringDuration: "1.6s",
      ringPrimaryColor: ThemeColors.primary,
      ringSecondaryColor: ThemeColors.secondary,
      ringLightColor: ThemeColors.white,
      ringDarkColor: ThemeColors.dark,
      ringSuccessColor: ThemeColors.success,
      ringWarningColor: ThemeColors.warning,
      ringInfoColor: ThemeColors.info,
      ringDangerColor: ThemeColors.danger,
    },
    Popover: {
      innerPadding: 0,
      titleMinWidth: 0,
      titleMarginBottom: 0,
      titlePadding: 0,
      titleBorderBottom: "none",
      innerContentPadding: 0,
      borderRadiusLG: RadiusTokens.md,
      dropShadowPopover: `drop-shadow(0 0 1px ${ThemeColors["secondary-emp-5"]}) drop-shadow(0 0 1px ${ThemeColors["secondary-emp-5"]})`,
    },
    Modal: {
      contentPadding: 0,
      headerPadding: "22px 18px",
      headerMarginBottom: 0,
      headerBorderBottom: `${BorderWidthTokens[1]}px solid ${ThemeColors["secondary-emp-5"]}`,
      bodyPadding: "16px 18px",
      footerPadding: "17px 18px",
      footerMarginTop: 0,
      footerBorderTop: `${BorderWidthTokens[1]}px solid ${ThemeColors["secondary-emp-5"]}`,
      titleFontSize: FontSize.h6,
      titleLineHeight: LineHeight.h6 / FontSize.h6,
      titleColor: Grey["gray-800"],
      boxShadow: "none",
      borderRadiusLG: RadiusTokens.lg,
    },
    Tag: {
      colorBgContainerDisabled: ThemeColors["disable-emp-2"],
      colorTextDisabled: ThemeColors["disable-emp-6"],
    },
    Card: {
      cardWidth: 570,
      colorBorderSecondary: ThemeColors["secondary-emp-5"],
    },
    Button: {
      // explicitly set in button
      primaryShadow: "none",
      defaultShadow: "none",
      dangerShadow: "none",
      blueShadowColor: "none",
      greenShadowColor: "none",
      orangeShadowColor: "none",

      // Outlined + secondary: neutral hover with a visible fill.
      defaultHoverBg: ThemeColors["secondary-emp-3"],
      defaultHoverColor: ThemeColors.dark,
      defaultHoverBorderColor: ThemeColors["secondary-emp-6"],
      defaultActiveBg: ThemeColors["secondary-emp-3"],
      defaultActiveColor: ThemeColors.dark,
      defaultActiveBorderColor: ThemeColors.secondary,

      // Ghost + secondary: same fill on hover.
      textHoverBg: ThemeColors["secondary-emp-3"],
    },
    Alert: {
      borderRadiusLG: RadiusTokens.sm,

      // Control paddings and icon sizing
      defaultPadding: `${SpaceTokens.xs}px ${SpaceTokens.sm}px`,
      withDescriptionPadding: `${SpaceTokens.xs}px ${SpaceTokens.sm}px`,

      // Keep icon sized consistently so it aligns on the top line with the title
      withDescriptionIconSize: FontSize.body,
      marginXS: SpaceTokens.xs,

      // AntD uses its large font alias for Alert titles with descriptions.
      // The reference keeps the title and body at the same size.
      fontSizeLG: FontSize.body,
    },
    Table: {
      headerBg: ThemeColors.white,
      headerColor: Grey["gray-800"],
      headerSplitColor: "transparent",
      borderColor: ThemeColors["secondary-emp-5"],
      rowHoverBg: ThemeColors.white,
      fontWeightStrong: FontWeight.medium,

      cellPaddingBlock: SpaceTokens.sm,
      cellPaddingInline: SpaceTokens.sm,
    },
  },
};

export default antdTheme;
