import { ChevronRight } from "lucide-react";

import { Link } from "@components/Link/Link";
import { BREADCRUMB_ICON_SIZE, DEFAULT_BREADCRUMB_SEPARATOR } from "@components/Breadcrumb/constants";

/**
 * One crumb: the Link component, untouched, when it has an `href`; the current
 * page in the neutral grey when it does not. Icon and label sit on one line,
 * 4px apart.
 */
function Crumb({ title = null, href = null, icon: IconComponent = null, onClick = null }) {
  const iconNode = IconComponent ? <IconComponent size={BREADCRUMB_ICON_SIZE} /> : null;

  if (!href) {
    return (
      <span className="d-inline-flex align-items-center gap-1 text-secondary" aria-current="page">
        {iconNode}
        {title}
      </span>
    );
  }

  return (
    <Link href={href} className="d-inline-flex align-items-center gap-1" onClick={onClick}>
      {iconNode}
      {title}
    </Link>
  );
}

/**
 * The path to the current page, each step before it a Link.
 *
 * `items` follow antd's shape — `{ title, href, onClick }` — plus an optional
 * `icon`, a lucide component drawn before the title. The last item is the
 * current page: leave its `href` off and it renders as plain text.
 *
 * ```jsx
 * <Breadcrumb
 *   separator="arrow"
 *   items={[
 *     { title: "Home", href: "/", icon: House },
 *     { title: "Settings", href: "/settings" },
 *     { title: "Profile" },
 *   ]}
 * />
 * ```
 */
export function Breadcrumb({ items = [], separator = DEFAULT_BREADCRUMB_SEPARATOR, ...rest }) {
  const separatorNode = separator === "arrow" ? <ChevronRight size={BREADCRUMB_ICON_SIZE} /> : "/";

  return (
    <nav aria-label="Breadcrumb" {...rest}>
      {/* Set in body/medium, the Link's own size, so the current page and the separators share the crumbs' line. */}
      <ol className="d-flex flex-wrap align-items-center gap-2 list-unstyled mb-0 body fw-medium">
        {items.map(function (item, index) {
          return (
            <li key={item.key ?? index} className="d-flex align-items-center gap-2">
              {/* Fills the 12px icon slot, so a "/" spaces the trail exactly as the chevron does. */}
              {index > 0 ? (
                <span className="d-flex justify-content-center w-3 text-secondary" aria-hidden="true">
                  {separatorNode}
                </span>
              ) : null}
              <Crumb title={item.title} href={item.href} icon={item.icon} onClick={item.onClick} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
