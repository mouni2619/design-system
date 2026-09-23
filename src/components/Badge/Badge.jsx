import { Badge as AntBadge } from "antd";
import { Tag } from "@components/Tag/Tag";

import {
  DEFAULT_BADGE_SIZE,
  DEFAULT_BADGE_TYPE,
  DEFAULT_BADGE_VARIANT,
} from "@components/Badge/constants";
import "./Badge.scss";

const BADGE_TAG_TYPES = {
  primary: "primary",
  default: "secondary",
  warning: "warning",
  danger: "danger",
  success: "success",
  info: "info",
  disabled: "secondary",
};

const BADGE_TAG_VARIANTS = {
  filled: "filled-dark",
  outlined: "outlined",
  subtle: "filled-subtle",
};

export function Badge({
  type = DEFAULT_BADGE_TYPE,
  size = DEFAULT_BADGE_SIZE,
  variant = DEFAULT_BADGE_VARIANT,
  dot,
  count,
  children = null,
  className = "",
  ...rest
}) {
  const activeVariant = dot ? "dot" : variant;
  const classes = [
    "ds-badge",
    `ds-badge--${type}`,
    `ds-badge--${size}`,
    `ds-badge--${activeVariant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (["filled", "outlined", "subtle"].includes(activeVariant)) {
    return (
      <Tag
        type={BADGE_TAG_TYPES[type] || BADGE_TAG_TYPES.primary}
        variant={BADGE_TAG_VARIANTS[activeVariant]}
        size={size}
        disabled={type === "disabled"}
        className={className}
        {...rest}
      >
        {children}
      </Tag>
    );
  }

  return (
    <AntBadge
      dot={activeVariant === "dot"}
      count={count}
      className={classes}
      {...rest}
    >
      {children}
    </AntBadge>
  );
}

export default Badge;
