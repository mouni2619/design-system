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
    colorLinkHover: ThemeColors["link-emp-5"],
    colorLinkActive: ThemeColors["link-emp-7"],

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

      // The design's radio is a white circle with a 1px ring and, once chosen,
      // a dot half its width in the primary. AntD fills the whole circle with
      // the primary instead and knocks the dot out in white. The ring itself,
      // and the grey the dot goes when disabled, are already the global
      // `colorBorder` and `colorTextDisabled`.
      radioColor: ThemeColors.primary,
      radioBgColor: ThemeColors.white,

      // The middle of the three sizes; the component sets the other two.
      radioSize: SpaceTokens.md,
      dotSize: SpaceTokens.md / 2,
    },

    DatePicker: {
      // The date field is the Input's twin — same 4px corners, same 8px of
      // side padding, the same step of the type scale at each size and the
      // same primary border on hover. AntD rounds it at the global 6px and
      // pads it from a scale of its own.
      borderRadius: RadiusTokens.sm,
      borderRadiusSM: RadiusTokens.sm,
      borderRadiusLG: RadiusTokens.sm,
      paddingInlineSM: SpaceTokens["2xs"],
      paddingInline: SpaceTokens["2xs"],
      paddingInlineLG: SpaceTokens["2xs"],
      inputFontSizeSM: FontSize.caption,
      inputFontSize: FontSize.body,
      inputFontSizeLG: FontSize.h6,
      hoverBorderColor: ThemeColors.primary,
      activeBorderColor: ThemeColors.primary,

      // AntD centres the text on a line height of its own rather than ours,
      // which leaves the small field a pixel over the design's 24.
      fontHeightSM: LineHeight.caption,
      fontHeight: LineHeight.body,
      fontHeightLG: LineHeight.h6,
      lineHeightSM: LineHeight.caption / FontSize.caption,
      lineHeight: LineHeight.body / FontSize.body,
      lineHeightLG: LineHeight.h6 / FontSize.h6,

      colorText: ThemeColors["secondary-emp-8"],
      colorTextPlaceholder: ThemeColors["secondary-emp-6"],
      colorBgContainerDisabled: ThemeColors["secondary-emp-3"],
      colorBorderDisabled: ThemeColors["secondary-emp-3"],
    },

    Input: {
      // The design's field: 4px corners, 8px of side padding and one step of
      // the type scale at every size. AntD rounds it at the global 6px, pads
      // it from its own scale and hovers to the lighter primary-emp-5.
      borderRadius: RadiusTokens.sm,
      borderRadiusSM: RadiusTokens.sm,
      borderRadiusLG: RadiusTokens.sm,
      paddingInlineSM: SpaceTokens["2xs"],
      paddingInline: SpaceTokens["2xs"],
      paddingInlineLG: SpaceTokens["2xs"],
      inputFontSizeSM: FontSize.caption,
      inputFontSize: FontSize.body,
      inputFontSizeLG: FontSize.h6,
      hoverBorderColor: ThemeColors.primary,

      // Typed text is the flat neutral, the placeholder the lighter grey, and
      // a disabled field a flat fill with no border of its own.
      colorText: ThemeColors["secondary-emp-8"],
      colorTextPlaceholder: ThemeColors["secondary-emp-6"],
      colorBgContainerDisabled: ThemeColors["secondary-emp-3"],
      colorBorderDisabled: ThemeColors["secondary-emp-3"],
    },

    Notification: {
      // The design's card: 330 wide, 12 of padding, 4px corners, 12 between
      // the title and the description and 12 in from the screen's edge. AntD
      // builds a 384 card with 20/24 padding, 8 between the two lines and 24
      // from the edge. `paddingLG` also places the close button, so it has to
      // follow the padding or the glyph drifts off the title.
      width: 330,
      borderRadiusLG: RadiusTokens.sm,
      paddingMD: SpaceTokens.xs,
      paddingContentHorizontalLG: SpaceTokens.xs,
      paddingLG: SpaceTokens.xs,
      marginXS: SpaceTokens.xs,
      marginLG: SpaceTokens.xs,

      // Everything reads white on the status fill, and the close glyph takes
      // no plate of its own. AntD writes the card for a white background and
      // pads the close button with a grey one.
      colorTextHeading: ThemeColors.white,
      colorText: ThemeColors.white,
      colorIcon: ThemeColors.white,
      colorIconHover: ThemeColors.white,
      colorBgTextHover: "transparent",
      colorBgTextActive: "transparent",
    },

    Progress: {
      // The design rounds the bar's ends to radius-sm. AntD's own default is
      // 100, i.e. a pill.
      lineBorderRadius: RadiusTokens.sm,

      // The unfilled rail is a flat grey. AntD's default is a translucent
      // `rgba(0, 0, 0, 0.06)`, which only lands on this colour over white.
      remainingColor: ThemeColors["secondary-emp-4"],
    },

    Select: {
      // The field is the Input's twin — 4px corners, a primary border on hover
      // and the same focus ring — so the two line up side by side.
      borderRadius: RadiusTokens.sm,
      borderRadiusSM: RadiusTokens.sm,
      borderRadiusLG: RadiusTokens.sm,
      hoverBorderColor: ThemeColors.primary,
      activeBorderColor: ThemeColors.primary,
      colorText: ThemeColors["secondary-emp-8"],
      colorTextPlaceholder: ThemeColors["secondary-emp-6"],
      colorBgContainerDisabled: ThemeColors["secondary-emp-3"],
      colorBorderDisabled: ThemeColors["secondary-emp-3"],

      // AntD centres the text with a line height of its own rather than ours,
      // which leaves the field 2px short of the design's 24/34/44, and pads it
      // from a scale step that is 3px wider than the design's 8.
      fontHeight: LineHeight.body,
      fontHeightLG: LineHeight.h6,
      lineHeightLG: LineHeight.h6 / FontSize.h6,
      paddingXS: SpaceTokens["2xs"] + BorderWidthTokens[1],
      paddingSM: SpaceTokens["2xs"] + BorderWidthTokens[1],

      // The panel insets its list by 8; an option is a 26px row of body text
      // padded by 4, so the tint behind it is a rounded block rather than a
      // full-width band. The one under the pointer and the chosen one both
      // take the primary tint, and the chosen one reads in primary at the same
      // weight. AntD insets by 4, greys the hovered row and bolds the chosen.
      paddingXXS: SpaceTokens["2xs"],
      optionHeight: SpaceTokens["3xs"] * 2 + LineHeight.body,
      optionFontSize: FontSize.body,
      optionPadding: `${SpaceTokens["3xs"]}px`,
      optionActiveBg: ThemeColors["primary-emp-1"],
      optionSelectedBg: ThemeColors["primary-emp-1"],

      // The chosen row keeps that same tint under the pointer; AntD deepens it.
      controlItemBgActiveHover: ThemeColors["primary-emp-1"],
      optionSelectedColor: ThemeColors.primary,
      optionSelectedFontWeight: FontWeight.normal,
    },

    Slider: {
      // An 8px grey track, 12px marks with a 2px ring, and a 16px handle —
      // 12px plus the same 2px ring, filled in by Slider.css.
      railSize: SpaceTokens["2xs"],
      railBg: ThemeColors["secondary-emp-4"],
      handleSize: SpaceTokens.xs,
      handleColor: ThemeColors.primary,
      dotSize: SpaceTokens.xs,
      dotBorderColor: ThemeColors["secondary-emp-5"],
      dotActiveBorderColor: ThemeColors["primary-emp-5"],

      // AntD rings a disabled mark in this colour, and greys a disabled
      // range with it too.
      trackBgDisabled: ThemeColors["secondary-emp-5"],

      // Hovering the slider would otherwise lighten the handle's ring and
      // leave it two-toned. The chosen range keeps AntD's own hover step.
      colorPrimaryBorderHover: ThemeColors.primary,
      trackHoverBg: ThemeColors["primary-emp-5"],
    },

    Steps: {
      // Circles are 16px and 20px across. AntD's defaults are the control
      // height (34) for medium and the h3 size for small.
      iconSizeSM: SpaceTokens.sm,
      iconSize: SpaceTokens.md,

      // The rail between two steps is dashed. AntD draws it solid.
      lineType: "dashed",
    },

    Tooltip: {
      // The sheet rounds the bubble at 4, as it rounds every other surface.
      // AntD leaves it on the global 6.
      borderRadius: RadiusTokens.sm,
    },

    Upload: {
      // The dropzone: white, radius-sm, and a primary border on hover. AntD
      // tints it grey, rounds it at radius-lg and hovers to the lighter
      // primary-emp-5. Upload reads these three only for its dropzone.
      colorFillAlter: ThemeColors.white,
      borderRadiusLG: RadiusTokens.sm,
      colorPrimaryHover: ThemeColors.primary,
    },

    Typography: {
      // A link is underlined until it is hovered or pressed. AntD's default
      // is no underline in any state.
      linkDecoration: "underline",
      linkHoverDecoration: "none",
    },
  },
};

export default antdTheme;
