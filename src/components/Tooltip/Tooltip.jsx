import { Tooltip as AntTooltip } from "antd";

import { DEFAULT_TOOLTIP_ICON_POSITION, TOOLTIP_ICON_SIZE } from "@components/Tooltip/constants";

export function Tooltip({
  children = null,
  title = "",
  icon: IconComponent = null,
  iconPosition = DEFAULT_TOOLTIP_ICON_POSITION,
  ...rest
}) {
  const iconNode = IconComponent ? <IconComponent size={TOOLTIP_ICON_SIZE} /> : null;

  const body = iconNode ? (
    // Icon and label on one line, separated by a 4px gap.
    <span className="d-inline-flex align-items-center gap-1">
      {iconPosition === "start" ? iconNode : null}
      {title}
      {iconPosition === "end" ? iconNode : null}
    </span>
  ) : (
    title
  );

  return (
    <AntTooltip {...rest} title={body}>
      {children}
    </AntTooltip>
  );
}

export default Tooltip;
