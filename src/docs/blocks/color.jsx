import React from "react";

import { CopyBadge, TABLE_CELL } from "@docs/blocks/primitives";

import "@docs/blocks/blocks.css";

/**
 * Palette Grid
 * @param {Object} palettes
 */
export function PaletteGrid({ palettes = {} }) {
  return (
    <div className="sb-unstyled d-flex flex-column overflow-auto">
      {Object.entries(palettes).map(([name, colors]) => (
        <div
          key={name}
          className="d-flex align-items-center py-3 border-bottom border-secondary-emp-4"
        >
          <h4 className="h6 fw-semibold mb-0 text-black flex-shrink-0 palette-name">
            {name}
          </h4>
          <div className="d-flex flex-nowrap">
            {Object.entries(colors).map(([token, hex], index) => (
              <div
                key={token}
                title={token}
                className="text-center flex-shrink-0 palette-swatch"
              >
                <div className="caption text-secondary mb-2">{index + 1}</div>
                <div
                  className="mx-auto palette-swatch-color"
                  style={{ backgroundColor: hex }}
                />
                <div className="caption text-secondary font-monospace mt-2">
                  {hex}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Theme Token Table
 * @param {Array} groups
 */
export function ThemeTokenTable({ groups = [] }) {
  const total = groups.reduce((sum, { tokens = [] }) => sum + tokens.length, 0);

  return (
    <div className="sb-unstyled mb-5">
      <p className="small text-secondary mb-3">All {total} tokens</p>

      {groups.map(({ title = "", baseToken = "", tokens = [] }) => (
        <div
          key={title}
          className="border rounded-3 bg-white mb-4 overflow-hidden"
        >
          <div className="d-flex justify-content-between align-items-center gap-2 px-3 py-3 border-bottom">
            <span className="d-inline-flex align-items-center gap-2 fw-semibold">
              <span
                className={`d-inline-block rounded-circle theme-group-dot bg-${baseToken}`}
              />
              {title}
            </span>
            <span className="small text-secondary flex-shrink-0">
              {tokens.length} tokens
            </span>
          </div>

          <div className="overflow-auto">
            <table className="w-100">
              <thead>
                <tr className="text-secondary">
                  <th className={`fw-normal ${TABLE_CELL}`}>Swatch</th>
                  <th className={`fw-normal ${TABLE_CELL}`}>Token Name</th>
                  <th className={`fw-normal ${TABLE_CELL}`}>Palette Ref</th>
                  <th className={`fw-normal ${TABLE_CELL}`}>HEX Value</th>
                </tr>
              </thead>
              <tbody>
                {tokens.map(
                  ({ token = "", alias = "", ref = "", hex = "" }) => (
                    <tr key={token}>
                      <td className={TABLE_CELL}>
                        <span
                          className={`d-block rounded-1 border border-secondary-emp-4 theme-token-swatch bg-${token}`}
                        />
                      </td>
                      <td className={`text-nowrap ${TABLE_CELL}`}>
                        <CopyBadge text={token}>
                          <span className="font-monospace fw-semibold">
                            {token}
                          </span>
                        </CopyBadge>
                        {alias && (
                          <>
                            <span className="text-secondary mx-1">/</span>
                            <CopyBadge text={alias}>
                              <span className="font-monospace text-secondary">
                                {alias}
                              </span>
                            </CopyBadge>
                          </>
                        )}
                      </td>
                      <td className={TABLE_CELL}>
                        <span className="d-inline-block bg-secondary-emp-3 text-secondary border rounded-1 fw-normal px-2 py-1 caption">
                          {ref}
                        </span>
                      </td>
                      <td className={TABLE_CELL}>
                        <CopyBadge text={hex}>
                          <span className="font-monospace text-secondary">
                            {hex}
                          </span>
                        </CopyBadge>
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
