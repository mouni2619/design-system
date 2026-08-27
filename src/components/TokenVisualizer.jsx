import React, { useState } from "react";
import {
  TypeScale,
  FontWeights,
  TextColors,
  Spacing,
  BorderRadius,
  BorderStrength,
  ElevationShadows,
  FocusRingShadows,
} from "@design-tokens";
import "@components/TokenVisualizer.css";

const SPECIMEN = "The quick brown fox";
const MATRIX_SAMPLE = "Ag";

/**
 * Copy Badge
 * @param {String} text
 * @param {Node} children
 */
function CopyBadge({ text = "", children = null }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Copy failed", error);
    }
  }

  const copyBadgeClass = copied
    ? "bg-primary-subtle text-primary"
    : "bg-light text-dark";

  return (
    <span
      onClick={handleCopy}
      title="Click to copy"
      className={`d-inline-flex align-items-center gap-1 px-2 py-1 rounded user-select-none copy-badge ${copyBadgeClass}`}
    >
      {children}
      {copied && <span className="small fw-bold">✓ Copied</span>}
    </span>
  );
}

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

const TABLE_CELL =
  "border border-secondary-emp-4 text-start align-middle px-4 py-3";

/**
 * Theme Token Table
 * @param {Array} groups
 */
export function ThemeTokenTable({ groups = [] }) {
  const total = groups.reduce((sum, { tokens = [] }) => sum + tokens.length, 0);

  return (
    <div className="sb-unstyled mb-5">
      <p className="small text-secondary mb-3">All {total} tokens</p>

      {groups.map(({ title = "", baseHex = "", tokens = [] }) => (
        <div
          key={title}
          className="border rounded-3 bg-white mb-4 overflow-hidden"
        >
          <div className="d-flex justify-content-between align-items-center gap-2 px-3 py-3 border-bottom">
            <span className="d-inline-flex align-items-center gap-2 fw-semibold text-dark">
              <span
                className="d-inline-block rounded-circle theme-group-dot"
                style={{ backgroundColor: baseHex }}
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
                          className="d-block rounded-1 border border-secondary-emp-4 theme-token-swatch"
                          style={{ backgroundColor: hex }}
                        />
                      </td>
                      <td className={`text-nowrap ${TABLE_CELL}`}>
                        <CopyBadge text={token}>
                          <span className="font-monospace fw-semibold text-dark">
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
                        <span className="badge bg-light text-secondary border fw-normal px-2 py-1 caption">
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

/**
 * Weight Swatches
 */
export function WeightSwatches() {
  return (
    <div className="sb-unstyled d-flex flex-wrap gap-4 py-3 mb-4">
      {FontWeights.map(({ name = "", value = 0 }) => (
        <div key={value} className="text-center scale-item">
          <div
            className={`mx-auto mb-2 border rounded d-flex align-items-center justify-content-center text-dark bg-white weight-swatch ${name}`}
          >
            {MATRIX_SAMPLE}
          </div>
          <div className="fw-semibold small text-dark mb-1">{name}</div>
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
            <div className="fw-semibold small text-dark flex-shrink-0 type-name">
              {token}
            </div>
            <div className={`text-dark text-truncate type-sample ${token}`}>
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
              <th className={`text-nowrap fw-semibold text-dark ${TABLE_CELL}`}>
                {token}
                <span className="d-block caption fw-normal text-secondary">
                  {fontSize}px
                </span>
              </th>
              {FontWeights.map(({ name = "", value = 0 }) => (
                <td
                  key={value}
                  title={`${token} · ${name} · ${value}`}
                  className={`text-dark ${TABLE_CELL} ${token} ${name}`}
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
          <div className="fw-semibold small text-dark flex-shrink-0 space-name">
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
              className={`mx-auto mb-3 bg-light border border-2 border-secondary-emp-8 radius-box ${token}`}
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
          <div className="fw-semibold small text-dark mb-1">
            <CopyBadge text={token}>{token}</CopyBadge>
          </div>
          <div className="small text-muted">{value}px</div>
        </div>
      ))}
    </div>
  );
}

/**
 * Elevation Shadow
 */
export function ElevationShadow() {
  return (
    <div className="sb-unstyled d-flex flex-wrap gap-6 p-2 mb-4">
      {ElevationShadows.map(({ token = "", value = "", usage = "" }) => (
        <div key={token} title={usage} className="shadow-item">
          <div className={`bg-white rounded mb-2 shadow-preview ${token}`} />
          <div className="fw-semibold small text-dark mb-1">{token}</div>
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
            <div className="fw-semibold small text-dark mb-1">{token}</div>
            <div className="small text-muted">{value}</div>
          </div>
        ),
      )}
    </div>
  );
}
