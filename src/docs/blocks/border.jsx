import React from "react";

import { BorderRadius, BorderStrength } from "@docs/data/border";
import { CopyBadge } from "@docs/blocks/primitives";

import "@docs/blocks/blocks.css";

/**
 * Border Radius Scale
 */
export function RadiusScale() {
  return (
    <div className="sb-unstyled d-flex flex-wrap gap-4 py-3 mb-4">
      {BorderRadius.map(({ token = "", value = 0 }) => {
        const isCircle = token.includes("circle") || value >= 999;
        const displayValue = isCircle ? "50%" : `${value}px`;

        return (
          <div key={token} className="text-center scale-item">
            <div
              className={`mx-auto mb-3 bg-white border border-2 border-secondary-emp-8 radius-box ${token}`}
            />
            <div className="mb-1">
              <CopyBadge text={token}>{token}</CopyBadge>
            </div>
            <div className="small text-muted">{displayValue}</div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Border Strength Scale
 */
export function StrengthScale() {
  return (
    <div className="sb-unstyled d-flex flex-wrap gap-4 py-3 mb-4">
      {BorderStrength.map(({ token = "", value = 0 }) => (
        <div key={token} className="text-center scale-item">
          <div
            className={`mx-auto mb-2 bg-white border border-secondary-emp-8 rounded strength-box radius-box ${token}`}
          />
          <div className="fw-semibold small mb-1">
            <CopyBadge text={token}>{token}</CopyBadge>
          </div>
          <div className="small text-muted">{value}px</div>
        </div>
      ))}
    </div>
  );
}
