import { Spin } from "antd";

import { DEFAULT_ICON_SIZE, DEFAULT_SPIN_SIZE, ICON_SIZES, ICON_SPIN_SIZES } from "@components/Icon/constants";
import { Tooltip } from "@components/Tooltip/Tooltip";

export function Icon({
  icon: IconComponent = null,
  size = DEFAULT_ICON_SIZE,
  title = "",
  onClick = null,
  loading = false,
  disabled = false,
  ...rest
}) {
  if (!IconComponent && !loading) {
    return null;
  }

  const iconNode = loading ? (
    <Spin size={ICON_SPIN_SIZES[size] || DEFAULT_SPIN_SIZE} />
  ) : (
    <IconComponent {...rest} size={ICON_SIZES[size] || size} />
  );

  const dimmed = disabled ? "opacity-50" : "";
  let content;

  if (onClick) {
    content = (
      <button
        type="button"
        className={`bg-transparent p-0 border-0 text-reset d-inline-flex align-items-center justify-content-center ${dimmed}`}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        aria-label={title || undefined}
        onClick={onClick}
      >
        {iconNode}
      </button>
    );
  } else {
    content = (
      <span
        className={`d-inline-flex align-items-center justify-content-center ${dimmed}`}
        role={title ? "img" : undefined}
        aria-label={title || undefined}
        aria-hidden={title ? undefined : true}
      >
        {iconNode}
      </span>
    );
  }

  if (title) {
    return <Tooltip title={title}>{content}</Tooltip>;
  }

  return content;
}

export default Icon;
