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
          <div style={{ fontFamily: FontFamily, fontSize: 13, fontWeight: 600, color: Grey["gray-900"] }}>{name}</div>
          <div style={{ display: "flex", gap: 2 }}>
            {Object.values(colors).map((hex, i) => (
              <div key={i} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ fontFamily: FontFamily, fontSize: 11, color: Grey["gray-700"], marginBottom: 4 }}>{i + 1}</div>
                <div style={{ height: 44, background: hex, border: `1px solid ${Grey["gray-400"]}`, borderRadius: 3 }} />
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
 * Theme tokens — separated on the basis of Color Gradient Families (without horizontal colored line).
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
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          {/* Group Header */}
          <div
            style={{
              padding: "14px 18px",
              background: Grey["gray-200"],
              borderBottom: `1px solid ${Grey["gray-400"]}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: color,
                  border: `1px solid rgba(0,0,0,0.15)`,
                }}
              />
              <h3 style={{ fontFamily: FontFamily, fontSize: 15, fontWeight: 700, color: Grey["gray-900"], margin: 0 }}>
                {name}
              </h3>
            </div>
            <span style={{ fontSize: 12, color: Grey["gray-700"] }}>{tokens.length} tokens</span>
          </div>

          {/* Gradient Tokens Table */}
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: FontFamily }}>
            <thead>
              <tr style={{ textAlign: "left", background: Grey["gray-100"], borderBottom: `1px solid ${Grey["gray-400"]}` }}>
                <th style={{ padding: "10px 16px", fontSize: 12, color: Grey["gray-700"], width: 64 }}>Swatch</th>
                <th style={{ padding: "10px 16px", fontSize: 12, color: Grey["gray-700"] }}>Token Name</th>
                <th style={{ padding: "10px 16px", fontSize: 12, color: Grey["gray-700"] }}>Palette Ref</th>
                <th style={{ padding: "10px 16px", fontSize: 12, color: Grey["gray-700"] }}>HEX Value</th>
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
                        boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
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
                  <td style={{ padding: "8px 16px", fontFamily: "monospace", fontSize: 12, color: Grey["gray-800"] }}>
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
 * Five weight boxes — Light 300 up to Bold 700.
 */
export function WeightSwatches() {
  return (
    <div style={{ display: "flex", gap: 16, fontFamily: FontFamily }}>
      {fontWeights.map(({ name, value }) => (
        <div key={name} style={{ textAlign: "center" }}>
          <div
            style={{
              width: 80,
              height: 80,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: value,
              color: Grey["gray-900"],
              border: `1px solid ${Grey["gray-400"]}`,
              borderRadius: 6,
              background: Grey["gray-100"],
            }}
          >
            S
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: Grey["gray-900"], marginTop: 8 }}>{name}</div>
          <div style={{ fontSize: 11, color: Grey["gray-700"] }}>{value}</div>
        </div>
      ))}
    </div>
  );
}

/**
 * The Style Matrix — every type-scale step rendered at all five weights (Small to Big).
 */
export function StyleMatrix() {
  return (
    <div style={{ display: "grid", gap: 24, fontFamily: FontFamily }}>
      {typeScale.map(({ token, fontSize: size, lineHeight: lh, letterSpacing: ls }) => (
        <div key={token} style={{ borderTop: `1px solid ${Grey["gray-400"]}`, paddingTop: 16 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: Grey["gray-900"] }}>{token}</span>
            <span style={{ fontSize: 12, color: Grey["gray-700"] }}>
              {size}px / {lh}px &middot; tracking {ls}px
            </span>
          </div>
          <div style={{ display: "grid", gap: 6 }}>
            {fontWeights.map(({ name, value }) => (
              <div
                key={name}
                style={{
                  fontFamily: FontFamily,
                  fontSize: size,
                  lineHeight: `${lh}px`,
                  letterSpacing: `${ls}px`,
                  fontWeight: value,
                  color: Grey["gray-900"],
                }}
              >
                {SAMPLE}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Roles & colors mapped for typography.
 */
export function TypographyColorTable() {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: FontFamily }}>
      <thead>
        <tr style={{ textAlign: "left", borderBottom: `2px solid ${Grey["gray-500"]}` }}>
          <th style={{ padding: "8px 12px", fontSize: 12, color: Grey["gray-700"] }}>Role</th>
          <th style={{ padding: "8px 12px", fontSize: 12, color: Grey["gray-700"] }}>Sample</th>
          <th style={{ padding: "8px 12px", fontSize: 12, color: Grey["gray-700"] }}>Palette ref</th>
          <th style={{ padding: "8px 12px", fontSize: 12, color: Grey["gray-700"] }}>Hex</th>
        </tr>
      </thead>
      <tbody>
        {typographyColors.map(([role, ref, hex]) => (
          <tr key={role} style={{ borderBottom: `1px solid ${Grey["gray-400"]}` }}>
            <td style={{ padding: "8px 12px", fontSize: 13, fontWeight: 500, color: Grey["gray-900"] }}>{role}</td>
            <td style={{ padding: "8px 12px", fontSize: 14, fontWeight: 600, color: hex }}>Aa</td>
            <td style={{ padding: "8px 12px", fontSize: 12, color: Grey["gray-700"] }}>{ref}</td>
            <td style={{ padding: "8px 12px", fontFamily: "monospace", fontSize: 12, color: Grey["gray-700"] }}>{hex}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/**
 * Spacing scale graphical specimen.
 */
export function SpacingScale() {
  return (
    <div style={{ display: "grid", gap: 12, fontFamily: FontFamily }}>
      {spacing.map(({ token, value }) => (
        <div
          key={token}
          style={{
            display: "grid",
            gridTemplateColumns: "100px 1fr 60px",
            alignItems: "center",
            gap: 16,
            padding: "8px 0",
            borderTop: `1px solid ${Grey["gray-400"]}`,
          }}
        >
          <span style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 600, color: Grey["gray-900"] }}>{token}</span>
          <div style={{ height: 20, width: value * 4, background: DaybreakBlue["blue-600"], borderRadius: 2 }} />
          <span style={{ fontSize: 12, color: Grey["gray-700"], textAlign: "right" }}>{value}px</span>
        </div>
      ))}
    </div>
  );
}

/**
 * Border strength scale specimen.
 */
export function BorderWidthScale() {
  return (
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap", fontFamily: FontFamily }}>
      {borderWidths.map(({ token, value }) => (
        <div key={token} style={{ textAlign: "center" }}>
          <div
            style={{
              width: 80,
              height: 80,
              border: `${value}px solid ${Grey["gray-900"]}`,
              borderRadius: 6,
              background: Grey["gray-100"],
              marginBottom: 8,
            }}
          />
          <div style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 600, color: Grey["gray-900"] }}>{token}</div>
          <div style={{ fontSize: 11, color: Grey["gray-700"] }}>{value}px</div>
        </div>
      ))}
    </div>
  );
}

/**
 * Border radius scale specimen.
 */
export function RadiusScale() {
  return (
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap", fontFamily: FontFamily }}>
      {borderRadius.map(({ token, value }) => (
        <div key={token} style={{ textAlign: "center" }}>
          <div
            style={{
              width: 80,
              height: 80,
              border: `2px solid ${DaybreakBlue["blue-600"]}`,
              borderRadius: value === 999 ? "50%" : value,
              background: Grey["gray-100"],
              marginBottom: 8,
            }}
          />
          <div style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 600, color: Grey["gray-900"] }}>{token}</div>
          <div style={{ fontSize: 11, color: Grey["gray-700"] }}>{value === 999 ? "circle" : `${value}px`}</div>
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
    <div style={{ display: "flex", gap: 32, flexWrap: "wrap", fontFamily: FontFamily }}>
      {elevationShadows.map(({ token, value }) => (
        <div key={token} style={{ textAlign: "center" }}>
          <div
            style={{
              width: 100,
              height: 100,
              background: Grey["gray-100"],
              borderRadius: 8,
              boxShadow: value,
              marginBottom: 12,
              border: `1px solid ${Grey["gray-400"]}`,
            }}
          />
          <div style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 600, color: Grey["gray-900"] }}>{token}</div>
        </div>
      ))}
    </div>
  );
}

/**
 * Focus ring shadows specimen.
 */
export function FocusRingShadows() {
  return (
    <div style={{ display: "flex", gap: 32, flexWrap: "wrap", fontFamily: FontFamily }}>
      {focusRingShadows.map(({ token, border, value }) => (
        <div key={token} style={{ textAlign: "center" }}>
          <div
            style={{
              width: 100,
              height: 100,
              background: Grey["gray-100"],
              borderRadius: 8,
              border: `1px solid ${border}`,
              boxShadow: value,
              marginBottom: 12,
            }}
          />
          <div style={{ fontFamily: "monospace", fontSize: 12, fontWeight: 600, color: Grey["gray-900"] }}>{token}</div>
        </div>
      ))}
    </div>
  );
}
