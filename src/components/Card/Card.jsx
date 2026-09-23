import { Card as AntCard } from "antd";
import { X } from "lucide-react";
import "@components/Card/Card.scss";

function buildTitle(icon, title) {
  if (!icon) {
    return title;
  }
  return (
    <span className="d-flex align-items-center gap-2">
      {icon}
      {title}
    </span>
  );
}

export function Card({
  icon = null,
  title = null,
  closable = false,
  onClose = () => {},
  footer = null,
  footerExtra = null,
  children = null,
  ...rest
}) {
  const closeButton = closable ? (
    <button
      type="button"
      aria-label="Close"
      className="border-0 bg-transparent p-0 d-flex align-items-center text-secondary"
      onClick={onClose}
    >
      <X size={12} />
    </button>
  ) : null;

  const showFooter = Boolean(footer) || Boolean(footerExtra);
  const footerNode = showFooter ? (
    <div className="d-flex align-items-center justify-content-between w-100 px-6">
      <span className="caption text-secondary">{footer}</span>
      {footerExtra ? <span className="caption text-secondary">{footerExtra}</span> : null}
    </div>
  ) : null;

  return (
    <AntCard
      title={title ? buildTitle(icon, title) : null}
      extra={closeButton}
      actions={showFooter ? [footerNode] : undefined}
      {...rest}
    >
      {children}
    </AntCard>
  );
}

export default Card;
