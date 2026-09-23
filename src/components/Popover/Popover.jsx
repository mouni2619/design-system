import { useState } from "react";
import { Popover as AntPopover } from "antd";
import { Target, X } from "lucide-react";

import { DEFAULT_POPOVER_PLACEMENT } from "@components/Popover/constants";
import "./Popover.scss";

export function Popover({
  placement = DEFAULT_POPOVER_PLACEMENT,
  title = null,
  content = null,
  icon = null,
  size = "small",
  open,
  defaultOpen = false,
  onOpenChange = null,
  children = null,
  ...rest
}) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = open !== undefined;
  const resolvedOpen = isControlled ? open : internalOpen;
  const titleIcon = icon === true ? <Target size={14} strokeWidth={1.5} /> : icon || null;
  const hasContent = content != null && content !== "";

  function handleOpenChange(next) {
    if (!isControlled) {
      setInternalOpen(next);
    }
    onOpenChange?.(next);
  }

  const titleNode = title ? (
    <div className="d-flex align-items-center justify-content-between gap-3">
      <span className="d-flex align-items-center gap-1">
        {titleIcon}
        {title}
      </span>
      <button
        type="button"
        aria-label="Close"
        className="border-0 bg-transparent p-0 d-flex align-items-center text-secondary"
        onClick={() => handleOpenChange(false)}
      >
        <X size={12} />
      </button>
    </div>
  ) : null;

  return (
    <AntPopover
      placement={placement}
      title={titleNode}
      content={hasContent ? content : null}
      open={resolvedOpen}
      onOpenChange={handleOpenChange}
      rootClassName={`design-system-popover design-system-popover--${size} ${hasContent ? "" : "design-system-popover--title-only"}`.trim()}
      {...rest}
    >
      {children}
    </AntPopover>
  );
}

export default Popover;
