import { Drawer } from "antd";

import { Button } from "@components/Button/Button";
import { DEFAULT_OFFCANVAS_PLACEMENT, DEFAULT_OFFCANVAS_SIZE } from "@components/OffCanvas/constants";

export function OffCanvas({
  open = false,
  onClose = () => {},
  title = null,
  icon = null,
  placement = DEFAULT_OFFCANVAS_PLACEMENT,
  size = DEFAULT_OFFCANVAS_SIZE,
  footer = null,
  onCancel = null,
  cancelText = "Cancel",
  onConfirm = null,
  confirmText = "Confirm",
  children = null,
  ...rest
}) {
  const titleContent =
    icon != null ? (
      <span className="d-flex align-items-center gap-2">
        {icon}
        {title}
      </span>
    ) : (
      title
    );

  const showDefaultFooter = !footer && (onCancel != null || onConfirm != null);
  const resolvedFooter = footer
    ? footer
    : showDefaultFooter
      ? (
          <div className="d-flex justify-content-end gap-2">
            {onCancel != null && (
              <Button type="primary" variant="filled-subtle" onClick={onCancel}>
                {cancelText}
              </Button>
            )}
            {onConfirm != null && (
              <Button type="primary" variant="filled-dark" onClick={onConfirm}>
                {confirmText}
              </Button>
            )}
          </div>
        )
      : undefined;

  return (
    <Drawer
      title={titleContent}
      open={open}
      onClose={onClose}
      placement={placement}
      size={size}
      footer={resolvedFooter}
      {...rest}
    >
      {children}
    </Drawer>
  );
}

export default OffCanvas;
