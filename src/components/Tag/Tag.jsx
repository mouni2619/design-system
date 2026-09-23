import { Tag as AntTag, theme } from "antd";
import { CircleX } from "lucide-react";

import {
  DEFAULT_TAG_SIZE,
  DEFAULT_TAG_TYPE,
  DEFAULT_TAG_VARIANT,
  TAG_TYPES,
  TAG_VARIANTS,
  getTagSizeStyle,
} from "@components/Tag/constants";

// All three sizes share space-3xs (4px) vertical padding & gap, space-2xs (8px) horizontal padding
const SIZE_CLASSES = {
  small: "py-1 px-2 gap-1 caption mb-0 fw-medium rounded-1",
  medium: "py-1 px-2 gap-1 body fw-medium mb-0",
  large: "py-1 px-2 gap-1 h6 mb-0 fw-medium",
};

export function Tag({
  type = DEFAULT_TAG_TYPE,
  variant = DEFAULT_TAG_VARIANT,
  size = DEFAULT_TAG_SIZE,
  icon = null,
  closable = false,
  disabled = false,
  children = null,
  className = "",
  style,
  ...rest
}) {
  const { token } = theme.useToken();

  const tagClasses = `d-inline-flex align-items-center justify-content-center ${SIZE_CLASSES[size]} ${className}`.trim();

  return (
    <AntTag
      color={TAG_TYPES[type]}
      variant={TAG_VARIANTS[variant]}
      icon={icon || undefined}
      closable={closable && !disabled}
      disabled={disabled}
      closeIcon={
        closable ? (
          <CircleX size={12} color="#FFFFFF" className="text-white" />
        ) : undefined
      }
      className={tagClasses}
      style={{ ...getTagSizeStyle(token, size), ...style }}
      {...rest}
    >
      {children}
    </AntTag>
  );
}

export default Tag;
