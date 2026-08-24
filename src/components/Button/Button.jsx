import { Button as AntButton } from "antd";
import PropTypes from "prop-types";

const types = {
  primary: "primary",
  secondary: "default",
  info: "blue",
  success: "green",
  warning: "orange",
  danger: "danger",
};

const variants = {
  "filled-dark": "solid",
  "filled-subtle": "filled",
  ghost: "text",
  outlined: "outlined",
};

const sizes = { small: "small", medium: "middle", large: "large" };

export function Button({
  type = "primary",
  variant = "filled-dark",
  size,
  icon,
  iconPosition = "none",
  children,
  ...rest
}) {
  const showIcon = icon && iconPosition !== "none";
  const iconOnly = showIcon && iconPosition === "only";

  return (
    <AntButton
      type="button"
      color={types[type]}
      variant={variants[variant]}
      size={sizes[size]}
      icon={showIcon ? icon : undefined}
      iconPlacement={iconPosition === "right" ? "end" : "start"}
      {...rest}
    >
      {iconOnly ? null : children}
    </AntButton>
  );
}

Button.propTypes = {
  /** Design system type. */
  type: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "danger"]),
  /** Design system style. Named `variant` because `style` is React's inline-style prop. */
  variant: PropTypes.oneOf(["filled-dark", "filled-subtle", "ghost", "outlined"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** The icon node. Sized 10 / 12 / 14 by the theme, to match the label. */
  icon: PropTypes.node,
  /** Where the icon sits. `only` drops the label. */
  iconPosition: PropTypes.oneOf(["none", "left", "right", "only"]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
