import { Button as AntButton, ConfigProvider } from "antd";
import PropTypes from "prop-types";

import {
  BUTTON_ICON_POSITIONS,
  BUTTON_OUTLINED_THEMES,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
  DEFAULT_BUTTON_ICON_POSITION,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_TYPE,
  DEFAULT_BUTTON_VARIANT,
} from "@components/constants";

export function Button({
  type = DEFAULT_BUTTON_TYPE,
  variant = DEFAULT_BUTTON_VARIANT,
  size = DEFAULT_BUTTON_SIZE,
  icon = null,
  iconPosition = DEFAULT_BUTTON_ICON_POSITION,
  children = null,
  ...rest
}) {
  const showIcon = Boolean(icon) && iconPosition !== "none";
  const iconOnly = showIcon && iconPosition === "only";
  const outlinedPalette = variant === "outlined" ? BUTTON_OUTLINED_THEMES[type] : null;

  const button = (
    <AntButton
      color={outlinedPalette ? "default" : BUTTON_TYPES[type]}
      variant={BUTTON_VARIANTS[variant]}
      size={size}
      icon={showIcon ? icon : undefined}
      iconPlacement={iconPosition === "end" ? "end" : "start"}
      {...rest}
    >
      {iconOnly ? null : children}
    </AntButton>
  );

  if (outlinedPalette) {
    return <ConfigProvider theme={outlinedPalette}>{button}</ConfigProvider>;
  }

  return button;
}

Button.propTypes = {
  /** Which colour the button carries. */
  type: PropTypes.oneOf(Object.keys(BUTTON_TYPES)),
  /** How it is filled. Named `variant` because `style` is React's inline-style prop. */
  variant: PropTypes.oneOf(Object.keys(BUTTON_VARIANTS)),
  size: PropTypes.oneOf(BUTTON_SIZES),
  /** The icon node, e.g. `<Trash2 size={12} />`. */
  icon: PropTypes.node,
  /** Where the icon sits. `only` drops the label — pass `aria-label` with it. */
  iconPosition: PropTypes.oneOf(BUTTON_ICON_POSITIONS),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
