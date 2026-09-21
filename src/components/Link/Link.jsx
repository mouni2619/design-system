import { Typography } from "antd";

import "@components/Link/Link.css";

import { DEFAULT_LINK_SIZE } from "@components/Link/constants";

/**
 * A text link in the three sizes the design specifies, underlined until it is
 * hovered, pressed or focused.
 *
 * Colour and underline per state come from the AntD theme (`colorLink*` and
 * the Typography `linkDecoration` tokens), so what is decided here is the size,
 * `disabled` — which AntD greys out but leaves underlined where the design
 * drops the underline — and the focus colour, in Link.css. Everything else —
 * `href`, `target`, `onClick` — is antd's `Typography.Link` untouched.
 *
 * ```jsx
 * <Link href="/settings">Settings</Link>
 * <Link href="/settings" size="large" disabled>Settings</Link>
 * ```
 */
export function Link({
  size = DEFAULT_LINK_SIZE,
  disabled = false,
  className = "",
  children = null,
  ...rest
}) {
  // One step of the type scale per size — caption, body, h6. `.h6` is also a
  // heading class and brings a bottom margin, so `mb-0` takes it back off.
  let sizeClass = "body";
  if (size === "small") {
    sizeClass = "caption";
  } else if (size === "large") {
    sizeClass = "h6 mb-0";
  }
  const underlineClass = disabled ? "text-decoration-none" : "";

  return (
    <Typography.Link
      className={`link ${sizeClass} fw-medium ${underlineClass} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Typography.Link>
  );
}

export default Link;
