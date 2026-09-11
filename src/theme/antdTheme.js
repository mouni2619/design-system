import { ThemeColors, Grey } from "@tokens/color";
import { FontFamily, FontSize, FontWeight, LineHeight } from "@tokens/typography";
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

    // Control heights. The design sets each one as its own vertical padding
    // twice over plus the line height it holds — 8 + 18 + 8 for medium — so
    // they are written that way rather than as bare numbers. AntD has no
    // per-component height token, so these are global and every control that
    // sits beside a button (Select, InputNumber) follows them.
    controlHeightSM: SpaceTokens["3xs"] * 2 + LineHeight.caption,
    controlHeight: SpaceTokens["2xs"] * 2 + LineHeight.body,
    controlHeightLG: SpaceTokens.xs * 2 + LineHeight.h6,

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
    Button: {
      // ---- Typography and metrics ------------------------------------
      // One step of the type scale per size: caption, body, h6. AntD wants
      // the line height as a ratio, so each is divided by its own size.
      fontWeight: FontWeight.medium,

      contentFontSizeSM: FontSize.caption,
      contentFontSize: FontSize.body,
      contentFontSizeLG: FontSize.h6,

      contentLineHeightSM: LineHeight.caption / FontSize.caption,
      contentLineHeight: LineHeight.body / FontSize.body,
      contentLineHeightLG: LineHeight.h6 / FontSize.h6,

      paddingInlineSM: SpaceTokens["2xs"],
      paddingInline: SpaceTokens.sm,
      paddingInlineLG: SpaceTokens.lg,

      // Gap between the icon and the label. AntD defaults it to `marginXS`.
      iconGap: SpaceTokens["3xs"],

      // explicitly set in button
      primaryShadow: "none",
      defaultShadow: "none",
      dangerShadow: "none",
      blueShadowColor: "none",
      greenShadowColor: "none",
      orangeShadowColor: "none",

      // ---- Secondary -------------------------------------------------
      colorBgSolid: ThemeColors["secondary-emp-6"],
      colorBgSolidHover: ThemeColors["secondary-emp-5"],
      colorBgSolidActive: ThemeColors["secondary-emp-5"],
      solidTextColor: ThemeColors.dark,

      // `outlined`
      // for the ghost buttons the antd default backgroundcolor is white when no color is passed, but our requirements need it to be transparent.
      defaultBg: "transparent",
      defaultBorderColor: ThemeColors["secondary-emp-6"],
      defaultColor: ThemeColors.dark,
      defaultHoverBg: ThemeColors["secondary-emp-5"],
      defaultHoverColor: ThemeColors.dark,
      defaultHoverBorderColor: ThemeColors["secondary-emp-6"],
      defaultActiveBg: ThemeColors["secondary-emp-5"],
      defaultActiveColor: ThemeColors.dark,
      defaultActiveBorderColor: ThemeColors["secondary-emp-6"],

      // `filled-subtle` ghost
      colorFillTertiary: ThemeColors["secondary-emp-2"],
      colorFillSecondary: ThemeColors["secondary-emp-3"],
      colorFill: ThemeColors["secondary-emp-3"],

      // `ghost` -> AntD `text`, which reads its own label trio.
      textHoverBg: ThemeColors["secondary-emp-3"],
      textTextColor: ThemeColors.dark,
      textTextHoverColor: ThemeColors.dark,
      textTextActiveColor: ThemeColors.dark,

      // Disabled fill, every variant.
      colorBgContainerDisabled: ThemeColors["disable-emp-2"],
    },

    Radio: {
      // Unselected buttons in a group sit on whatever is behind them, matching
      // the `defaultBg` the Button block sets for the same reason. AntD would
      // otherwise paint them `colorBgContainer`, which only looks the same
      // over white.
      buttonBg: "transparent",
    },

    Progress: {
      // The design rounds the bar's ends to radius-sm. AntD's own default is
      // 100, i.e. a pill.
      lineBorderRadius: RadiusTokens.sm,

      // The unfilled rail is a flat grey. AntD's default is a translucent
      // `rgba(0, 0, 0, 0.06)`, which only lands on this colour over white.
      remainingColor: ThemeColors["secondary-emp-4"],
    },
  },
};

export default antdTheme;
