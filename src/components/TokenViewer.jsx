import React, { useState } from "react";
import {
  fontFamily,
  typeScale,
  fontWeights,
  grey,
  daybreakBlue,
  spacing,
  borderRadius,
  elevationShadows,
  focusRingShadows,
} from "../tokens";

const SAMPLE = "The quick brown fox jumps over the lazy dog";

const CopyBadge = ({ text, children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <span
      onClick={handleCopy}
      title="Click to copy"
      style={{
        cursor: "pointer",
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        padding: "2px 6px",
        borderRadius: "4px",
        backgroundColor: copied ? "#e6f7ff" : "rgba(0,0,0,0.04)",
        color: copied ? "#1890ff" : "inherit",
        transition: "all 0.2s ease",
        userSelect: "none",
      }}
    >
      {children}
      {copied && (
        <span style={{ fontSize: "10px", fontWeight: "bold" }}>✓ Copied</span>
      )}
    </span>
  );
};

export function ThemeTokenGrid({ title, tokens }) {
  const [query, setQuery] = useState("");

  const filtered = tokens.filter(
    ([name, ref]) =>
      name.toLowerCase().includes(query.toLowerCase()) ||
      ref.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div style={{ marginBottom: 32, fontFamily }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h3 style={{ margin: 0, fontSize: 16, color: grey["Grey 9"] }}>
          {title} ({tokens.length})
        </h3>
        <input
          type="text"
          placeholder="Filter tokens..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "6px 12px",
            fontSize: 12,
            border: `1px solid ${grey["Grey 5"]}`,
            borderRadius: 6,
            outline: "none",
            width: 200,
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 16,
        }}
      >
        {filtered.map(([name, ref, hex]) => (
          <div
            key={name}
            style={{
              display: "flex",
              alignItems: "center",
              padding: 12,
              border: `1px solid ${grey["Grey 4"]}`,
              borderRadius: 8,
              background: grey["Grey 1"],
              gap: 12,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 6,
                backgroundColor: hex,
                border: `1px solid ${grey["Grey 5"]}`,
                flexShrink: 0,
              }}
            />
            <div style={{ flexGrow: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: grey["Grey 9"],
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                <CopyBadge text={hex}>{name}</CopyBadge>
              </div>
              <div
                style={{ fontSize: 11, color: grey["Grey 7"], marginTop: 2 }}
              >
                Ref: <code>{ref}</code> |{" "}
                <CopyBadge text={hex}>{hex}</CopyBadge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WeightSwatches() {
  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      {fontWeights.map((w) => (
        <div key={w.value} style={{ textAlign: "center" }}>
          <div
            style={{
              width: 88,
              height: 88,
              border: `1px solid ${grey["Grey 5"]}`,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily,
              fontSize: 40,
              fontWeight: w.value,
              color: grey["Grey 9"],
            }}
          >
            S
          </div>
          <div
            style={{
              fontFamily,
              fontSize: 12,
              color: grey["Grey 7"],
              marginTop: 6,
            }}
          >
            {w.name} {w.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export function StyleMatrix() {
  const tokens = [...typeScale].reverse();

  return (
    <div>
      {tokens.map((t) => (
        <div
          key={t.token}
          style={{
            borderTop: `1px solid ${grey["Grey 4"]}`,
            padding: "16px 0",
          }}
        >
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
              <span style={{ fontFamily, fontSize: 12, color: grey["Grey 7"] }}>
                Inter · {w.name} · {t.fontSize}px · {w.value}
              </span>
              <span style={{ fontFamily, fontSize: 12, color: grey["Grey 7"] }}>
                {t.token}
              </span>
              <span
                style={{
                  fontFamily,
                  fontSize: t.fontSize,
                  lineHeight: `${t.lineHeight}px`,
                  letterSpacing: `${t.letterSpacing}px`,
                  fontWeight: w.value,
                  color: grey["Grey 9"],
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

export function SpacingScale() {
  return (
    <div style={{ fontFamily }}>
      {spacing.map((s) => (
        <div
          key={s.token}
          style={{
            display: "grid",
            gridTemplateColumns: "140px 160px 1fr",
            gap: 16,
            alignItems: "center",
            padding: "12px 0",
            borderTop: `1px solid ${grey["Grey 4"]}`,
          }}
        >
          <span
            style={{ fontSize: 12, fontWeight: 600, color: grey["Grey 9"] }}
          >
            <CopyBadge text={s.token}>{s.token}</CopyBadge>{" "}
          </span>
          <div
            style={{
              width: s.value,
              height: 24,
              background: daybreakBlue["Daybreak Blue 6"],
              borderRadius: 2,
            }}
          />
          <span style={{ fontSize: 12, color: grey["Grey 8"] }}>
            {s.value}px —{" "}
            <span style={{ color: grey["Grey 7"] }}>{s.usage}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export function RadiusScale() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 24,
        padding: 8,
        fontFamily,
      }}
    >
      {borderRadius.map((r) => (
        <div key={r.token} style={{ width: 140, textAlign: "center" }}>
          <div
            style={{
              width: 96,
              height: 96,
              margin: "0 auto 12px",
              background: grey["Grey 1"],
              border: `1px solid ${grey["Grey 5"]}`,
              borderRadius: r.value,
            }}
          />
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: grey["Grey 9"],
              marginBottom: 4,
            }}
          >
            <CopyBadge text={r.token}>{r.token}</CopyBadge>
          </div>
          <div style={{ fontSize: 12, color: grey["Grey 7"] }}>
            {r.value < 999 ? `${r.value}px` : "Circle"}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ElevationShadows() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 24,
        padding: 8,
        fontFamily,
      }}
    >
      {elevationShadows.map((sh) => (
        <div key={sh.token} style={{ width: 180 }}>
          <div
            style={{
              height: 96,
              background: grey["Grey 1"],
              borderRadius: 8,
              boxShadow: sh.value,
              marginBottom: 12,
            }}
          />
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: grey["Grey 9"],
              marginBottom: 4,
            }}
          >
            <CopyBadge text={sh.token}>{sh.token}</CopyBadge>
          </div>
          <div style={{ fontSize: 11, color: grey["Grey 7"] }}>{sh.value}</div>
        </div>
      ))}
    </div>
  );
}

export function FocusRingShadows() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 24,
        padding: 8,
        fontFamily,
      }}
    >
      {focusRingShadows.map((sh) => (
        <div key={sh.token} style={{ width: 180 }}>
          <div
            style={{
              height: 96,
              background: grey["Grey 1"],
              borderRadius: 8,
              border: `1px solid ${sh.border}`,
              boxShadow: sh.value,
              marginBottom: 12,
            }}
          />
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: grey["Grey 9"],
              marginBottom: 4,
            }}
          >
            <CopyBadge text={sh.token}>{sh.token}</CopyBadge>
          </div>
          <div style={{ fontSize: 11, color: grey["Grey 7"] }}>{sh.usage}</div>
        </div>
      ))}
    </div>
  );
}
