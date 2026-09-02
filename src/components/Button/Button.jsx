import { Button as AntButton, ConfigProvider } from "antd";

import {
  BUTTON_OUTLINED_THEMES,
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

export default Button;
