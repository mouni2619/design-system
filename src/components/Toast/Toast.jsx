import { Info, X } from "lucide-react";

import {
  DEFAULT_TOAST_DESCRIPTION,
  DEFAULT_TOAST_STATUS,
  DEFAULT_TOAST_TITLE,
  TOAST_STATUS_CONFIG,
} from "@components/constants";

export function Toast({
  title = DEFAULT_TOAST_TITLE,
  description = DEFAULT_TOAST_DESCRIPTION,
  status = DEFAULT_TOAST_STATUS,
  showInfoIcon = false,
  closable = true,
  onClose = null,
}) {
  const { backgroundClass, textClass, shadowClass } =
    TOAST_STATUS_CONFIG[status] || TOAST_STATUS_CONFIG[DEFAULT_TOAST_STATUS];

  return (
    <div
      className={`position-fixed top-0 end-0 m-3 z-3 mw-100 p-3 rounded-1 ${backgroundClass} ${textClass} ${shadowClass}`}
      role="alert"
      aria-live="polite"
    >
      <div className="d-flex align-items-center gap-3">
        {showInfoIcon ? <Info size={16} aria-hidden="true" /> : null}
        <span className="body fw-semibold flex-grow-1">{title}</span>
        {closable ? (
          <button
            type="button"
            className="bg-transparent p-0 border-0 text-white d-inline-flex align-items-center justify-content-center flex-shrink-0"
            aria-label="Close toast"
            onClick={onClose || undefined}
          >
            <X size={16} strokeWidth={1} aria-hidden="true" />
          </button>
        ) : null}
      </div>
      {description ? <div className="body mt-2">{description}</div> : null}
    </div>
  );
}

export default Toast;
