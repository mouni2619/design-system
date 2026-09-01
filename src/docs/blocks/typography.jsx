import React from "react";

import { TypeScale, FontWeights, TextColors } from "@docs/data/typography";
import { CopyBadge, TABLE_CELL } from "@docs/blocks/primitives";

import "@docs/blocks/blocks.css";

const SPECIMEN = "The quick brown fox";
const MATRIX_SAMPLE = "Ag";

/**
 * Weight Swatches
 */
export function WeightSwatches() {
  return (
    <div className="sb-unstyled d-flex flex-wrap gap-4 py-3 mb-4">
      {FontWeights.map(({ name = "", value = 0 }) => (
        <div key={value} className="text-center scale-item">
          <div
            className={`mx-auto mb-2 border rounded d-flex align-items-center justify-content-center bg-white weight-swatch ${name}`}
          >
            {MATRIX_SAMPLE}
          </div>
          <div className="fw-semibold small mb-1">{name}</div>
          <div className="small text-muted">{value}</div>
        </div>
      ))}
    </div>
  );
}

/**
 * Type Specimen
 */
export function TypeSpecimen() {
  return (
    <div className="sb-unstyled border-bottom border-secondary-emp-4 mb-4">
      <div className="d-flex align-items-center gap-3 py-2 caption text-secondary">
        <div className="flex-shrink-0 type-name">Token</div>
        <div className="type-sample">Preview</div>
        <div className="flex-shrink-0 type-metric">Size</div>
        <div className="flex-shrink-0 type-metric">Line height</div>
        <div className="flex-shrink-0 type-metric">Letter spacing</div>
      </div>

      {TypeScale.map(
        ({ token = "", fontSize = 0, lineHeight = 0, letterSpacing = 0 }) => (
          <div
            key={token}
            className="d-flex align-items-center gap-3 py-3 border-top border-secondary-emp-4"
          >
            <div className="fw-semibold small flex-shrink-0 type-name">
              {token}
            </div>
            <div className={`text-truncate type-sample ${token}`}>
              {SPECIMEN}
            </div>
            <div className="small text-secondary flex-shrink-0 type-metric">
              {fontSize}px
            </div>
            <div className="small text-secondary flex-shrink-0 type-metric">
              {lineHeight}px
            </div>
            <div className="small text-secondary flex-shrink-0 type-metric">
              {letterSpacing}px
            </div>
          </div>
        ),
      )}
    </div>
  );
}

/**
 * Styles Matrix
 */
export function StyleMatrix() {
  return (
    <div className="sb-unstyled overflow-auto mb-4">
      <table className="w-100">
        <thead>
          <tr className="text-secondary">
            <th className={`fw-normal ${TABLE_CELL}`}>Token</th>
            {FontWeights.map(({ name = "", value = 0 }) => (
              <th key={value} className={`fw-normal text-nowrap ${TABLE_CELL}`}>
                {name}
                <span className="d-block caption">{value}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TypeScale.map(({ token = "", fontSize = 0 }) => (
            <tr key={token}>
              <th className={`text-nowrap fw-semibold ${TABLE_CELL}`}>
                {token}
                <span className="d-block caption fw-normal text-secondary">
                  {fontSize}px
                </span>
              </th>
              {FontWeights.map(({ name = "", value = 0 }) => (
                <td
                  key={value}
                  title={`${token} · ${name} · ${value}`}
                  className={`${TABLE_CELL} ${token} ${name}`}
                >
                  {MATRIX_SAMPLE}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Text Color
 */
export function TextColor() {
  return (
    <div className="sb-unstyled mb-4">
      {TextColors.map(
        ({
          role = "",
          ref = "",
          hex = "",
          className = "",
          bgClassName = "",
        }) => (
          <div key={role} className="d-flex">
            <div className="small text-secondary text-end align-self-center flex-shrink-0 pe-3 text-color-ref">
              {ref}
            </div>
            <div className="d-flex align-items-center gap-2 flex-grow-1 ps-3 py-3 border-start border-secondary-emp-4">
              <span
                className={`rounded-1 flex-shrink-0 text-color-swatch ${bgClassName}`}
              />
              <span className={`flex-grow-1 ${className}`}>{role}</span>
              {className ? (
                <CopyBadge text={className}>
                  <span className="font-monospace caption">{className}</span>
                </CopyBadge>
              ) : (
                <span className="caption text-secondary">inherited</span>
              )}
              <span className="font-monospace caption text-secondary flex-shrink-0 text-color-hex">
                {hex}
              </span>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
