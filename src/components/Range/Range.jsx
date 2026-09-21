import { Form, Input } from "antd";
import { useId } from "react";

import "./Range.css";

import { DEFAULT_RANGE_SEPARATOR, DEFAULT_RANGE_SIZE } from "@components/Range/constants";

/**
 * A range: two fields in one box with a cell between them.
 *
 * `label` draws the sheet's label above the box and ties it to the first
 * field; leave it off for the sheet's "No label" rows. `separator` is what
 * sits in the middle cell, a dash by default. `start` and `end` carry
 * anything else the two fields take — a `placeholder` each, say.
 *
 * The pair is one value, `[from, to]`, so a `Form.Item` drives it as it would
 * any other field and its validation colours the box. Hover, focus and
 * disabled belong to the box rather than to either field, which is what makes
 * the two read as one control.
 *
 * ```jsx
 * <Range start={{ placeholder: "Min value" }} end={{ placeholder: "Max value" }} />
 * <Form.Item name="price"><Range label="Price" /></Form.Item>
 * ```
 */
export function Range({
  label = "",
  id = "",
  size = DEFAULT_RANGE_SIZE,
  separator = DEFAULT_RANGE_SEPARATOR,
  start = {},
  end = {},
  value = [],
  onChange = null,
  status = "",
  disabled = false,
  className = "",
  ...rest
}) {
  // The label needs something to point at. A caller's own id wins, so a
  // `Form.Item` can still hand the field one.
  const generatedId = useId();
  const fieldId = id || generatedId;

  // A `Form.Item` reports what it made of the field through context rather
  // than a prop, the way AntD's own fields read it.
  const { status: formStatus } = Form.Item.useStatus();
  const [from, to] = Array.isArray(value) ? value : [undefined, undefined];

  // The two fields are halves of one value, so either one changing hands the
  // whole pair back.
  function handleChange(index, event) {
    if (!onChange) {
      return;
    }

    const next = [from, to];
    next[index] = event.target.value;
    onChange(next);
  }

  const mergedStatus = status || formStatus || "";
  const statusClass = mergedStatus ? `range-status-${mergedStatus}` : "";
  const disabledClass = disabled ? "range-disabled" : "";

  const box = (
    <div
      className={`range range-${size} ${statusClass} ${disabledClass} ${className}`}
      {...rest}
    >
      <Input
        id={fieldId}
        size={size}
        variant="borderless"
        disabled={disabled}
        value={from}
        onChange={function (event) {
          handleChange(0, event);
        }}
        {...start}
      />
      <span className="range-separator" aria-hidden="true">
        {separator}
      </span>
      <Input
        size={size}
        variant="borderless"
        disabled={disabled}
        value={to}
        onChange={function (event) {
          handleChange(1, event);
        }}
        {...end}
      />
    </div>
  );

  if (!label) {
    return box;
  }

  // The sheet sets the label on its own line 8px above the box, in the field's
  // own text and the flat neutral.
  return (
    <div>
      <label htmlFor={fieldId} className="body text-secondary-emp-8 d-block mb-2">
        {label}
      </label>
      {box}
    </div>
  );
}

export default Range;
