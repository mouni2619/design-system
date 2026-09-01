import React from "react";

import { ElevationShadows, FocusRingShadows } from "@docs/data/shadow";

import "@docs/blocks/blocks.css";

/**
 * Elevation Shadow
 */
export function ElevationShadow() {
  return (
    <div className="sb-unstyled d-flex flex-wrap gap-6 p-2 mb-4">
      {ElevationShadows.map(({ token = "", value = "", usage = "" }) => (
        <div key={token} title={usage} className="shadow-item">
          <div className={`bg-white rounded mb-2 shadow-preview ${token}`} />
          <div className="fw-semibold small mb-1">{token}</div>
          <div className="small text-muted">{value}</div>
        </div>
      ))}
    </div>
  );
}

/**
 * Focus Ring Shadow
 */
export function FocusRingShadow() {
  return (
    <div className="sb-unstyled d-flex flex-wrap gap-6 p-2 mb-4">
      {FocusRingShadows.map(
        ({ token = "", borderClass = "", value = "", usage = "" }) => (
          <div key={token} title={usage} className="focus-item">
            <div
              className={`bg-white rounded mb-2 border focus-preview ${borderClass} ${token}`}
            />
            <div className="fw-semibold small mb-1">{token}</div>
            <div className="small text-muted">{value}</div>
          </div>
        ),
      )}
    </div>
  );
}
