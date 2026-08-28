import React from "react";

import { Spacing } from "@docs/data/spacing";

import "@docs/blocks/blocks.css";

/**
 * Spacing Scale
 */
export function SpacingScale() {
  return (
    <div className="sb-unstyled border-bottom border-secondary-emp-4 mb-4">
      {Spacing.map(({ token = "", widthClass = "", value = 0, usage = "" }) => (
        <div
          key={token}
          title={usage}
          className="d-flex align-items-center py-3 border-top border-secondary-emp-4"
        >
          <div className="fw-semibold small flex-shrink-0 space-name">
            {token}
          </div>
          <div className="flex-shrink-0 space-track">
            <div className={`bg-primary rounded-1 space-bar ${widthClass}`} />
          </div>
          <div className="small text-secondary">{value}px</div>
        </div>
      ))}
    </div>
  );
}
