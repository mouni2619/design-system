import React from "react";
import { Button as AntButton } from "antd";

// TODO: EXAMPLE

/**
 * Button
 *
 * Reference component: wraps Ant Design's Button so the design system controls
 * the public API. Consumers import from `@components/Button`, never from `antd`
 * directly — that keeps the underlying implementation swappable.
 *
 * @param {"primary"|"default"|"dashed"|"text"|"link"} variant
 * @param {"small"|"middle"|"large"} size
 * @param {Boolean} danger
 * @param {Boolean} disabled
 * @param {Boolean} loading
 * @param {Node} children
 */
export function Button({
  variant = "primary",
  size = "middle",
  danger = false,
  disabled = false,
  loading = false,
  children = null,
  ...rest
}) {
  return (
    <AntButton
      type={variant}
      size={size}
      danger={danger}
      disabled={disabled}
      loading={loading}
      {...rest}
    >
      {children}
    </AntButton>
  );
}

export default Button;
