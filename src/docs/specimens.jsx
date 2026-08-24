import React from "react";
import { FontFamily, Palettes, Grey, DaybreakBlue } from "../tokens.js";
import {
  themeGradientGroups,
  typeScale,
  fontWeights,
  typographyColors,
  spacing,
  borderRadius,
  borderWidths,
  elevationShadows,
  focusRingShadows,
} from "../theme/theme.js";

const SAMPLE = "The quick brown fox jumps over the lazy dog";

/**
 * Palettes — one row per ramp, step number above each swatch and hex below.
 */
export function PaletteRamps() {
  return (
    <div style={{ fontFamily: FontFamily }}>
      {Object.entries(Palettes).map(([name, colors]) => (
        <section
          key={name}
          style={{
            display: "grid",
            gridTemplateColumns: "140px 1fr",
            gap: 24,
            alignItems: "center",
            padding: "14px 0",
            borderTop: `1px solid ${Grey["gray-400"]}`,
          }}
        >
          <div style={{ fontFamily: FontFamily, fontSize: 13, fontWeight: 600, color: Grey["gray-900"] }}>
            {name}
          </div>
          <div style={{ display: "flex", gap: 2 }}>
            {Object.values(colors).map((hex, i) => (
              <div key={i} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontFamily: FontFamily, fontSize: 11, color: Grey["gray-700"], marginBottom: 4 }}>
                  {i + 1}
                </div>
                <div
                  style={{
                    height: 44,
                    background: hex,
                    border: `1px solid ${Grey["gray-400"]}`,
                    borderRadius: 3,
                  }}
                />
                <code style={{ fontSize: 10, color: Grey["gray-700"] }}>{hex}</code>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

/**
 * Theme tokens — separated on the basis of Color Gradient Families.
 */
export function ThemeTokens() {
  return (
    <div style={{ display: "grid", gap: 32, fontFamily: FontFamily }}>
      {themeGradientGroups.map(({ name, color, tokens }) => (
        <div
          key={name}
          style={{
            background: Grey["gray-100"],
            border: `1px solid ${Grey["gray-400"]}`,
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          }}
        >
          {/* Group Header */}
          <div
            style={{
              padding: "12px 16px",
              background: Grey["gray-200"],
              borderBottom: `1px solid ${Grey["gray-400"]}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: color,
                  border: "1px solid rgba(0,0,0,0.15)",
                }}
              />
              <h4 style={{ fontFamily: FontFamily, fontSize: 14, fontWeight: 600, color: Grey["gray-900"], margin: 0 }}>
                {name}
              </h4>
            </div>
            <span style={{ fontSize: 12, color: Grey["gray-700"] }}>
              {tokens.length} tokens
            </span>
          </div>

          {/* Gradient Tokens Table */}
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: FontFamily }}>
            <thead>
              <tr style={{ textAlign: "left", background: Grey["gray-100"], borderBottom: `1px solid ${Grey["gray-400"]}` }}>
                <th style={{ padding: "8px 16px", fontSize: 12, fontWeight: 500, color: Grey["gray-700"], width: 64 }}>
                  Swatch
                </th>
                <th style={{ padding: "8px 16px", fontSize: 12, fontWeight: 500, color: Grey["gray-700"] }}>
                  Token Name
                </th>
                <th style={{ padding: "8px 16px", fontSize: 12, fontWeight: 500, color: Grey["gray-700"] }}>
                  Palette Ref
                </th>
                <th style={{ padding: "8px 16px", fontSize: 12, fontWeight: 500, color: Grey["gray-700"] }}>
                  HEX Value
                </th>
              </tr>
            </thead>
            <tbody>
              {tokens.map(([tokenName, ref, hex], idx) => (
                <tr
                  key={tokenName}
                  style={{
                    borderBottom: idx < tokens.length - 1 ? `1px solid ${Grey["gray-300"]}` : "none",
                    background: idx % 2 === 0 ? "transparent" : Grey["gray-200"],
                  }}
                >
                  <td style={{ padding: "8px 16px" }}>
                    <div
                      style={{
                        width: 36,
                        height: 22,
                        background: hex,
                        border: `1px solid ${Grey["gray-400"]}`,
                        borderRadius: 3,
                      }}
                    />
                  </td>
                  <td style={{ padding: "8px 16px", fontFamily: "monospace", fontSize: 12, fontWeight: 600, color: Grey["gray-900"] }}>
                    {tokenName}
                  </td>
                  <td style={{ padding: "8px 16px", fontSize: 12, color: Grey["gray-700"] }}>
                    <span
                      style={{
                        background: Grey["gray-300"],
                        padding: "2px 8px",
                        borderRadius: 4,
                        fontSize: 11,
                        border: `1px solid ${Grey["gray-400"]}`,
                      }}
                    >
                      {ref}
                    </span>
                  </td>
                  <td style={{ padding: "8px 16px", fontFamily: "monospace", fontSize: 12, color: Grey["gray-700"] }}>
                    {hex}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

/**
 * Type Scale Table.
 */
export function TypeScaleTable() {
  return (
    <div style={{ maxWidth: 720, margin: "16px 0 32px", fontFamily: FontFamily }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: `2px solid ${Grey["gray-500"]}` }}>
            <th style={{ padding: "8px 12px", fontSize: 12, color: Grey["gray-700"] }}>Step</th>
            <th style={{ padding: "8px 12px", fontSize: 12, color: Grey["gray-700"] }}>Font size</th>
            <th style={{ padding: "8px 12px", fontSize: 12, color: Grey["gray-700"] }}>Line height</th>
            <th style={{ padding: "8px 12px", fontSize: 12, color: Grey["gray-700"] }}>Tracking</th>
          </tr>
        </thead>
        <tbody>
          {typeScale.map(({ token, fontSize, lineHeight, letterSpacing }) => (
            <tr key={token} style={{ borderBottom: `1px solid ${Grey["gray-400"]}` }}>
              <td style={{ padding: "8px 12px", fontSize: 13, fontWeight: 600, color: Grey["gray-900"] }}>{token}</td>
              <td style={{ padding: "8px 12px", fontSize: 12, color: Grey["gray-700"] }}>{fontSize}px</td>
              <td style={{ padding: "8px 12px", fontSize: 12, color: Grey["gray-700"] }}>{lineHeight}px</td>
              <td style={{ padding: "8px 12px", fontSize: 12, color: Grey["gray-700"] }}>{letterSpacing}px</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Font Weight — one box per weight, Light 300 → Bold 700.
 */
export function WeightSwatches() {
  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontFamily: FontFamily }}>
      {fontWeights.map((w) => (
        <div key={w.value} style={{ textAlign: "center" }}>
          <div
            style={{
              width: 88,
              height: 88,
              border: `1px solid ${Grey["gray-500"]}`,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: FontFamily,
              fontSize: 40,
              fontWeight: w.value,
              color: Grey["gray-900"],
              background: Grey["gray-100"],
            }}
          >
            S
          </div>
          <div style={{ fontFamily: FontFamily, fontSize: 12, fontWeight: 600, color: Grey["gray-900"], marginTop: 6 }}>
            {w.name}
          </div>
          <div style={{ fontFamily: FontFamily, fontSize: 11, color: Grey["gray-700"] }}>
            {w.value}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Style Matrix — every token rendered at every weight, smallest to biggest (Caption -> H1).
 */
export function StyleMatrix() {
  return (
    <div style={{ display: "grid", gap: 16, fontFamily: FontFamily }}>
      {typeScale.map((t) => (
        <div key={t.token} style={{ borderTop: `1px solid ${Grey["gray-400"]}`, padding: "16px 0" }}>
          {fontWeights.map((w) => (
            <div
              key={w.value}
              style={{
                display: "grid",
                gridTemplateColumns: "220px 64px 1fr",
                gap: 16,
                alignItems: "baseline",
                padding: "6px 0",
              }}
            >
              <span style={{ fontFamily: FontFamily, fontSize: 12, color: Grey["gray-700"] }}>
                Inter · {w.name} · {t.fontSize}px · {w.value}
              </span>
              <span style={{ fontFamily: FontFamily, fontSize: 12, fontWeight: 600, color: Grey["gray-800"] }}>
                {t.token}
              </span>
              <span
                style={{
                  fontFamily: FontFamily,
                  fontSize: t.fontSize,
                  lineHeight: `${t.lineHeight}px`,
                  letterSpacing: `${t.letterSpacing}px`,
                  fontWeight: w.value,
                  color: Grey["gray-900"],
                }}
              >
                {SAMPLE}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/**
 * Typography Colour table.
 */
export function TypographyColorTable() {
  return (
    <div style={{ maxWidth: 720, margin: "16px 0 32px", fontFamily: FontFamily }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: `2px solid ${Grey["gray-500"]}` }}>
            <th style={{ padding: "8px 12px", fontSize: 12, color: Grey["gray-700"] }}>Role</th>
            <th style={{ padding: "8px 12px", fontSize: 12, color: Grey["gray-700"] }}>Reference</th>
            <th style={{ padding: "8px 12px", fontSize: 12, color: Grey["gray-700"] }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {typographyColors.map(([role, ref, value]) => (
            <tr key={role} style={{ borderBottom: `1px solid ${Grey["gray-400"]}` }}>
              <td style={{ padding: "8px 12px", fontSize: 13, fontWeight: 500, color: Grey["gray-900"] }}>
                {role}
              </td>
              <td style={{ padding: "8px 12px", fontSize: 12, color: Grey["gray-700"] }}>
                {ref}
              </td>
              <td style={{ padding: "8px 12px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      background: value,
                      border: `1px solid ${Grey["gray-500"]}`,
                      borderRadius: 4,
                    }}
                  />
                  <code style={{ fontSize: 12, color: Grey["gray-800"] }}>{value}</code>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Spacing — a blue bar sized to each step, smallest first (1:1 true pixel scale).
 */
export function SpacingScale() {
  return (
    <div style={{ fontFamily: FontFamily }}>
      {spacing.map((s) => (
        <div
          key={s.token}
          style={{
            display: "grid",
            gridTemplateColumns: "140px 160px 1fr",
            gap: 16,
            alignItems: "center",
            padding: "12px 0",
            borderTop: `1px solid ${Grey["gray-400"]}`,
          }}
        >
          <span style={{ fontFamily: FontFamily, fontSize: 12, fontWeight: 600, color: Grey["gray-900"] }}>
            {s.token}
          </span>
          <div
            style={{
              width: s.value,
              height: 20,
              background: DaybreakBlue["blue-600"],
              borderRadius: 2,
            }}
          />
          <span style={{ fontFamily: FontFamily, fontSize: 12, color: Grey["gray-700"] }}>
            {s.value}px
          </span>
        </div>
      ))}
    </div>
  );
}

/**
 * Border strength — a box drawn at each width.
 */
export function BorderWidthScale() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24, padding: 8, fontFamily: FontFamily }}>
      {borderWidths.map((w) => (
        <div key={w.token} style={{ width: 140, textAlign: "center" }}>
          <div
            style={{
              width: 96,
              height: 96,
              margin: "0 auto 12px",
              background: Grey["gray-100"],
              border: `${w.value}px solid ${Grey["gray-900"]}`,
              borderRadius: 8,
            }}
          />
          <div style={{ fontFamily: FontFamily, fontSize: 12, fontWeight: 600, color: Grey["gray-900"], marginBottom: 4 }}>
            {w.token}
          </div>
          <div style={{ fontFamily: FontFamily, fontSize: 11, color: Grey["gray-700"] }}>
            {w.value}px
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Border radius — a rounded box per step, up to a full circle.
 */
export function RadiusScale() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24, padding: 8, fontFamily: FontFamily }}>
      {borderRadius.map((r) => (
        <div key={r.token} style={{ width: 140, textAlign: "center" }}>
          <div
            style={{
              width: 96,
              height: 96,
              margin: "0 auto 12px",
              background: Grey["gray-100"],
              border: `2px solid ${DaybreakBlue["blue-600"]}`,
              borderRadius: r.value === 999 ? "50%" : r.value,
            }}
          />
          <div style={{ fontFamily: FontFamily, fontSize: 12, fontWeight: 600, color: Grey["gray-900"], marginBottom: 4 }}>
            {r.token}
          </div>
          <div style={{ fontFamily: FontFamily, fontSize: 11, color: Grey["gray-700"] }}>
            {r.value === 999 ? "circle (50%)" : `${r.value}px`}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Elevation shadows specimen.
 */
export function ElevationShadows() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24, padding: 8, fontFamily: FontFamily }}>
      {elevationShadows.map((sh) => (
        <div key={sh.token} style={{ width: 180 }}>
          <div
            style={{
              height: 96,
              background: Grey["gray-100"],
              borderRadius: 8,
              boxShadow: sh.value,
              marginBottom: 12,
              border: `1px solid ${Grey["gray-400"]}`,
            }}
          />
          <div style={{ fontFamily: FontFamily, fontSize: 12, fontWeight: 600, color: Grey["gray-900"], marginBottom: 4 }}>
            {sh.token}
          </div>
          <div style={{ fontFamily: FontFamily, fontSize: 11, color: Grey["gray-700"] }}>
            {sh.value}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Focus rings specimen.
 */
export function FocusRingShadows() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24, padding: 8, fontFamily: FontFamily }}>
      {focusRingShadows.map((sh) => (
        <div key={sh.token} style={{ width: 180 }}>
          <div
            style={{
              height: 96,
              background: Grey["gray-100"],
              borderRadius: 8,
              border: `1px solid ${sh.border}`,
              boxShadow: sh.value,
              marginBottom: 12,
            }}
          />
          <div style={{ fontFamily: FontFamily, fontSize: 12, fontWeight: 600, color: Grey["gray-900"], marginBottom: 4 }}>
            {sh.token}
          </div>
          <div style={{ fontFamily: FontFamily, fontSize: 11, color: Grey["gray-700"] }}>
            {sh.value}
          </div>
        </div>
      ))}
    </div>
  );
}
