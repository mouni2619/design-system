import { Avatar as AntAvatar } from "antd";

import {
  AVATAR_SIZE_MAP,
  DEFAULT_AVATAR_SIZE,
  DEFAULT_AVATAR_VARIANT,
} from "@components/Avatar/constants";
import "./Avatar.scss";

export function Avatar({
  variant = DEFAULT_AVATAR_VARIANT,
  size = DEFAULT_AVATAR_SIZE,
  status = null,
  children = null,
  className = "",
  ...rest
}) {
  const avatar = (
    <AntAvatar
      className={[
        "ds-avatar",
        "flex-shrink-0",
        "fw-normal",
        "border-2",
        `ds-avatar--${variant}`,
        `ds-avatar--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      size={AVATAR_SIZE_MAP[size] || AVATAR_SIZE_MAP[DEFAULT_AVATAR_SIZE]}
      {...rest}
    >
      {children}
    </AntAvatar>
  );

  if (status !== "online") return avatar;

  return (
    <span
      className={`ds-avatar-status--${size} d-inline-flex position-relative`}
    >
      {avatar}
      <span
        className="ds-avatar-status__indicator position-absolute bottom-0 rounded-circle border border-white bg-success"
        role="status"
        aria-label={status}
      />
    </span>
  );
}

export default Avatar;
