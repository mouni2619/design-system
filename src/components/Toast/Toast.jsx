import { notification } from "antd";
import { Info, X } from "lucide-react";

import { DEFAULT_TOAST_DESCRIPTION, DEFAULT_TOAST_STATUS, DEFAULT_TOAST_TITLE, TOAST_CLOSE_CLEARANCE, TOAST_CLOSE_ICON_SIZE, TOAST_CLOSE_STYLE, TOAST_INFO_ICON_SIZE, TOAST_STATUSES } from "@components/Toast/constants";

/**
 * A toast, opened by calling the function this hook hands back. AntD owns the
 * corner, the stack and the motion; the theme paints the card.
 *
 * The holder has to sit in the tree or nothing renders.
 *
 * ```jsx
 * const [toast, holder] = useToast();
 *
 * return (
 *   <>
 *     {holder}
 *     <Button onClick={function () { toast({ title: "Saved", status: "success" }); }}>
 *       Save
 *     </Button>
 *   </>
 * );
 * ```
 *
 * `title`, `description`, `status`, `showInfoIcon` and `closable` are the
 * design's. Everything else — `duration`, `placement`, `onClose`, `key` — is
 * AntD's notification, passed straight through. A toast clears itself after
 * AntD's 4.5s; pass `duration: false` for one that waits to be dismissed.
 */
export function useToast() {
  const [api, holder] = notification.useNotification();

  function toast({
    title = DEFAULT_TOAST_TITLE,
    description = DEFAULT_TOAST_DESCRIPTION,
    status = DEFAULT_TOAST_STATUS,
    showInfoIcon = false,
    closable = true,
    ...rest
  } = {}) {
    // White text on the status colour, with a ring of the same colour.
    const tone = TOAST_STATUSES.includes(status) ? status : DEFAULT_TOAST_STATUS;

    api.open({
      // AntD's icon slot is a column of its own, which would indent the
      // description along with the title. The design keeps it on the title's
      // line, so the glyph goes in the title instead.
      title: showInfoIcon ? (
        <span className="d-flex align-items-center gap-2">
          <Info size={TOAST_INFO_ICON_SIZE} aria-hidden="true" />
          {title}
        </span>
      ) : (
        title
      ),
      description,
      closable: closable && {
        closeIcon: <X size={TOAST_CLOSE_ICON_SIZE} aria-hidden="true" />,
        "aria-label": "Close toast",
      },

      role: "alert",
      props: { "aria-live": "polite" },
      className: `border border-${tone} bg-${tone} shadow-${tone} text-white`,
      classNames: { title: "body fw-semibold", description: "body" },

      // Only the line the cross sits on clears it: the title's when there is
      // one, the description's when the toast is a single line. The design
      // runs a description under a title the full width of the card.
      styles: {
        close: TOAST_CLOSE_STYLE,
        title: closable ? { paddingInlineEnd: TOAST_CLOSE_CLEARANCE } : undefined,
        description: closable && !title ? { paddingInlineEnd: TOAST_CLOSE_CLEARANCE } : undefined,
      },
      ...rest,
    });
  }

  return [toast, holder];
}

export default useToast;
