import {
  ThemeColors,
  NeutralColors,
  FontFamily,
  FontSize,
  LineHeight,
  SpaceTokens,
  BorderWidthTokens,
  RadiusTokens,
  ElevationShadows,
} from "../tokens.js";

export const mandarkTheme = {
  token: {
    colorPrimary: ThemeColors.primary,
    colorInfo: ThemeColors.info,
    colorSuccess: ThemeColors.success,
    colorWarning: ThemeColors.warning,
    colorError: ThemeColors.danger,
    colorLink: ThemeColors.primary,

    colorPrimaryBg: ThemeColors["primary-emp-1"],
    colorPrimaryBgHover: ThemeColors["primary-emp-2"],
    colorPrimaryBorder: ThemeColors["primary-emp-3"],
    colorPrimaryBorderHover: ThemeColors["primary-emp-5"],
    colorPrimaryHover: ThemeColors["primary-emp-5"],
    colorPrimaryActive: ThemeColors["primary-emp-7"],
    colorPrimaryTextHover: ThemeColors["primary-emp-5"],
    colorPrimaryText: ThemeColors.primary,
    colorPrimaryTextActive: ThemeColors["primary-emp-7"],

    colorSuccessBg: ThemeColors["success-emp-1"],
    colorSuccessBgHover: ThemeColors["success-emp-2"],
    colorSuccessBorder: ThemeColors["success-emp-3"],
    colorSuccessBorderHover: ThemeColors["success-emp-5"],
    colorSuccessHover: ThemeColors["success-emp-5"],
    colorSuccessActive: ThemeColors["success-emp-7"],
    colorSuccessTextHover: ThemeColors["success-emp-5"],
    colorSuccessText: ThemeColors.success,
    colorSuccessTextActive: ThemeColors["success-emp-7"],

    colorWarningBg: ThemeColors["warning-emp-1"],
    colorWarningBgHover: ThemeColors["warning-emp-2"],
    colorWarningBorder: ThemeColors["warning-emp-3"],
    colorWarningBorderHover: ThemeColors["warning-emp-5"],
    colorWarningHover: ThemeColors["warning-emp-5"],
    colorWarningActive: ThemeColors["warning-emp-7"],
    colorWarningTextHover: ThemeColors["warning-emp-5"],
    colorWarningText: ThemeColors.warning,
    colorWarningTextActive: ThemeColors["warning-emp-7"],

    colorErrorBg: ThemeColors["danger-emp-1"],
    colorErrorBgHover: ThemeColors["danger-emp-2"],
    colorErrorBorder: ThemeColors["danger-emp-3"],
    colorErrorBorderHover: ThemeColors["danger-emp-5"],
    colorErrorHover: ThemeColors["danger-emp-5"],
    colorErrorActive: ThemeColors["danger-emp-7"],
    colorErrorTextHover: ThemeColors["danger-emp-5"],
    colorErrorText: ThemeColors.danger,
    colorErrorTextActive: ThemeColors["danger-emp-7"],

    colorInfoBg: ThemeColors["info-emp-1"],
    colorInfoBgHover: ThemeColors["info-emp-2"],
    colorInfoBorder: ThemeColors["info-emp-3"],
    colorInfoBorderHover: ThemeColors["info-emp-5"],
    colorInfoHover: ThemeColors["info-emp-5"],
    colorInfoActive: ThemeColors["info-emp-7"],
    colorInfoTextHover: ThemeColors["info-emp-5"],
    colorInfoText: ThemeColors.info,
    colorInfoTextActive: ThemeColors["info-emp-7"],

    colorTextBase: NeutralColors.default,
    colorTextHeading: NeutralColors.dark,
    colorTextSecondary: ThemeColors.secondary,
    colorTextDisabled: NeutralColors.disable,

    colorBgBase: NeutralColors.light,
    colorBgContainer: NeutralColors.light,
    colorBgLayout: ThemeColors["secondary-emp-2"],

    colorBorder: ThemeColors["secondary-emp-5"],
    colorBorderSecondary: ThemeColors["secondary-emp-3"],
    lineWidth: BorderWidthTokens[1],

    fontFamily: FontFamily,
    fontSize: FontSize.body,
    lineHeight: LineHeight.body / FontSize.body,

    fontSizeHeading1: FontSize.h1,
    fontSizeHeading2: FontSize.h2,
    fontSizeHeading3: FontSize.h3,
    fontSizeHeading4: FontSize.h4,
    fontSizeHeading5: FontSize.h5,

    lineHeightHeading1: LineHeight.h1 / FontSize.h1,
    lineHeightHeading2: LineHeight.h2 / FontSize.h2,
    lineHeightHeading3: LineHeight.h3 / FontSize.h3,
    lineHeightHeading4: LineHeight.h4 / FontSize.h4,
    lineHeightHeading5: LineHeight.h5 / FontSize.h5,

    borderRadius: RadiusTokens.md,
    borderRadiusSM: RadiusTokens.sm,
    borderRadiusLG: RadiusTokens.lg,

    sizeUnit: SpaceTokens["3xs"],
    sizeStep: SpaceTokens["3xs"],

    controlOutlineWidth: 4,
    controlOutline: ThemeColors["primary-emp-1"],

    boxShadow: ElevationShadows.md,
    boxShadowSecondary: ElevationShadows.lg,
    boxShadowTertiary: ElevationShadows.sm,
  },

  cssVar: { prefix: "ant" },

  components: {
    Button: {
      controlHeightSM: 24,
      controlHeight: 34,
      controlHeightLG: 44,

      paddingBlockSM: SpaceTokens["3xs"],
      paddingBlock: SpaceTokens["2xs"],
      paddingBlockLG: SpaceTokens.xs,

      paddingInlineSM: SpaceTokens["2xs"],
      paddingInline: SpaceTokens.sm,
      paddingInlineLG: SpaceTokens.lg,

      contentFontSizeSM: FontSize.caption,
      contentFontSize: FontSize.body,
      contentFontSizeLG: FontSize.h6,

      onlyIconSizeSM: FontSize.caption,
      onlyIconSize: FontSize.body,
      onlyIconSizeLG: FontSize.h6,

      iconGap: SpaceTokens["3xs"],

      borderRadiusSM: RadiusTokens.sm,
      borderRadius: RadiusTokens.sm,
      borderRadiusLG: RadiusTokens.sm,
      colorBgSolid: ThemeColors["secondary-emp-6"],
      colorBgSolidHover: ThemeColors["secondary-emp-5"],
      colorBgSolidActive: ThemeColors.secondary,
      solidTextColor: NeutralColors.default,

      contentLineHeightSM: LineHeight.caption / FontSize.caption,
      contentLineHeight: LineHeight.body / FontSize.body,
      contentLineHeightLG: LineHeight.h6 / FontSize.h6,
    },
  },
};

export default mandarkTheme;
