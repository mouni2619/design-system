import React, { useState } from "react";

export const TABLE_CELL =
  "border border-secondary-emp-4 text-start align-middle px-4 py-3";

/**
 * Copy Badge
 * @param {String} text
 * @param {Node} children
 */
export function CopyBadge({ text = "", children = null }) {
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
    : "bg-secondary-emp-3";

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
