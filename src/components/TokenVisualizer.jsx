import React, { useState } from "react";
import {
  TypeScale,
  FontWeights,
  Spacing,
  BorderRadius,
  BorderStrength,
  ElevationShadows,
  FocusRingShadows,
} from "../designTokens";
import "./TokenVisualizer.css";

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
      className={`d-inline-flex align-items-center gap-1 px-2 py-1 rounded user-select-none ${
        copied ? "bg-primary-subtle text-primary" : "bg-light text-dark"
      } tv-copy-badge`}
    >
      {children}
      {copied && <span className="small fw-bold">✓ Copied</span>}
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
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="h6 fw-bold mb-0 text-dark">
          {title} ({tokens.length})
        </h4>
        <input
          type="text"
          placeholder="Filter tokens..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control form-control-sm tv-token-filter-input"
        />
      </div>

      <div className="row g-3">
        {filtered.map(([name, ref, hex]) => (
          <div key={name} className="col-12 col-md-6 col-lg-4">
            <div className="p-3 border rounded-3 bg-white d-flex align-items-center gap-3 shadow-sm h-100 tv-token-card">
              {/* Color Box Preview */}
              <div
                className={`rounded-2 border flex-shrink-0 tv-color-swatch bg-${name}`}
              />
              <div className="flex-grow-1 text-truncate">
                <div className="fw-bold text-dark mb-1 small text-truncate">
                  <CopyBadge text={name}>
                    <span>{name}</span>
                  </CopyBadge>
                </div>

                <div className="small text-muted d-flex align-items-center gap-1 tv-ref-row">
                  <span className="small tv-ref-label">Ref:</span>
                  <span className="badge bg-light text-secondary border fw-normal px-2 py-1 tv-ref-badge">
                    {ref}
                  </span>
                  <span className="text-muted ms-1">|</span>
                  <CopyBadge text={hex}>
                    <span className="text-secondary font-monospace ms-1">
                      {hex}
                    </span>
                  </CopyBadge>
                </div>
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
    <div className="d-flex flex-wrap gap-3 mb-4">
      {FontWeights.map(({ name = "", value = 0 }) => (
        <div key={value} className="text-center">
          <div
            className={`border rounded d-flex align-items-center justify-content-center text-dark bg-white tv-weight-swatch ${name}`}
          >
            S
          </div>
          <div className="small text-muted mt-1">
            {name} {value}
          </div>
        </div>
      ))}
    </div>
  );
}

export function StyleMatrix() {
  const tokens = [...TypeScale].reverse();

  return (
    <div className="mb-4">
      {tokens.map(({ token = "", fontSize = 0 } = {}) => (
        <div key={token} className="border-top py-3">
          {FontWeights.map(({ name = "", value = 0 }) => (
            <div key={value} className="row align-items-baseline py-1 g-2">
              <div className="col-12 col-md-3 small text-muted">
                Inter · {name} · {fontSize}px · {value}
              </div>
              <div className="col-12 col-md-1 small text-muted">{token}</div>
              <div className={`col-12 col-md-8 text-dark ${token} ${name}`}>
                {SAMPLE}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function SpacingScale() {
  return (
    <div className="mb-4">
      {Spacing.map(({ token = "", value = 0, usage = "" }) => (
        <div key={token} className="row align-items-center py-2 border-top g-3">
          <div className="col-12 col-md-2 fw-semibold small text-dark">
            <CopyBadge text={token}>{token}</CopyBadge>
          </div>
          <div className="col-12 col-md-3">
            <div className={`bg-primary tv-space-bar ${value}`} />
          </div>
          <div className="col-12 col-md-7 small text-secondary">
            {value}px — <span className="text-muted">{usage}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function RadiusScale() {
  return (
    <div className="d-flex flex-wrap gap-4 py-3 mb-4">
      {BorderRadius.map(({ token = "", value = 0 }) => {
        const isCircle = token.includes("circle") || value >= 999;
        const displayValue = isCircle ? "50%" : `${value}px`;

        return (
          <div key={token} className="text-center tv-scale-item">
            <div
              className={`mx-auto mb-3 bg-light border border-2 border-secondary-emp-5 tv-radius-box ${token}`}
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

export function StrengthScale() {
  return (
    <div className="d-flex flex-wrap gap-4 py-3 mb-4">
      {BorderStrength.map(({ token = "", value = 0 }) => (
        <div key={token} className="text-center tv-scale-item">
          <div
            className={`mx-auto mb-2 bg-white border-dark rounded tv-strength-box tv-radius-box ${
              token
            }`}
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

export function ElevationShadow() {
  return (
    <div className="d-flex flex-wrap gap-4 p-2 mb-4">
      {ElevationShadows.map(({ token = "", value = "" }) => (
        <div key={token} className="w-25">
          <div className={`bg-white rounded mb-2 tv-shadow-preview ${token}`} />
          <div className="fw-semibold small text-dark mb-1">
            <CopyBadge text={token}>{token}</CopyBadge>
          </div>
          <div className="small text-muted">{value}</div>
        </div>
      ))}
    </div>
  );
}

export function FocusRingShadow() {
  return (
    <div className="d-flex flex-wrap gap-4 p-2 mb-4">
      {FocusRingShadows.map(({ token = "", usage = "" }) => (
        <div key={token} className="w-25">
          <div
            className={`bg-white rounded mb-2 border tv-focus-preview ${token}`}
          />
          <div className="fw-semibold small text-dark mb-1">
            <CopyBadge text={token}>{token}</CopyBadge>
          </div>
          <div className="small text-muted">{usage}</div>
        </div>
      ))}
    </div>
  );
}
