import { Modal as AntModal } from "antd";
import { Star, X } from "lucide-react";

import { Button } from "@components/Button/Button";
import { DEFAULT_MODAL_SIZE, MODAL_SIZE_WIDTHS } from "@components/Modal/constants";
import "@components/Modal/Modal.scss";

export function Modal({
  open = false,
  onClose = () => {},
  title = null,
  icon = null,
  size = DEFAULT_MODAL_SIZE,
  footer = null,
  onCancel = null,
  cancelText = "Cancel",
  onConfirm = null,
  confirmText = "Confirm",
  children = null,
  className = "",
  ...rest
}) {
  const titleIcon = icon === true ? <Star size={12} /> : icon || null;
  const titleContent =
    titleIcon ? (
      <span className="d-flex align-items-center gap-2">
        {titleIcon}
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
      : null;

  return (
    <AntModal
      title={titleContent}
      open={open}
      onCancel={onClose}
      width={MODAL_SIZE_WIDTHS[size]}
      footer={resolvedFooter}
      closeIcon={<X size={12} strokeWidth={1.5} />}
      className={`design-system-modal ${className}`.trim()}
      {...rest}
    >
      {children}
    </AntModal>
  );
}

export default Modal;
