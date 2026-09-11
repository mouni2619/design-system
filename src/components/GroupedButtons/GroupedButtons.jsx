import { Radio } from "antd";

import { GROUPED_BUTTONS_ICON_SIZE } from "@components/constants";

/**
 * antd's `options` take a plain label, so an icon has to be composed into the
 * label node itself. The 8px gap is what the design measures between glyph and
 * text.
 */
function optionLabel(label, IconComponent) {
  if (!IconComponent) {
    return label;
  }

  return (
    <span className="d-inline-flex align-items-center gap-2">
      <IconComponent size={GROUPED_BUTTONS_ICON_SIZE} />
      {label}
    </span>
  );
}

/**
 * Only the two ends round, and a lone button rounds on both. antd caps the
 * group with the global `borderRadius` — 6px, where the design draws a tighter
 * corner — and Radio has no radius token of its own, so the outer corners are
 * re-rounded here. The inner cells are already square and need nothing.
 * Bootstrap emits the directional utilities after `.rounded-*` and both carry
 * `!important`, so they outrank antd's first/last-child rule.
 */
function cornerClass(index, lastIndex) {
  const corners = [];
  if (index === 0) {
    corners.push("rounded-start-1");
  }
  if (index === lastIndex) {
    corners.push("rounded-end-1");
  }
  return corners;
}

/**
 * A row of connected buttons with one of them selected, in the two states the
 * design specifies: with an icon beside each label, or without.
 *
 * `icon` takes one Lucide component for the whole group — the design gives
 * every button the same glyph, so it is not worth repeating per option.
 * Options are antd's own, and everything else — `value`, `defaultValue`,
 * `onChange`, `size`, `disabled`, `block` — is antd's `Radio.Group` API
 * untouched, so it is controlled when given a `value` and uncontrolled
 * otherwise.
 *
 * ```jsx
 * <GroupedButtons defaultValue="day" options={[{ label: "Day", value: "day" }]} />
 * <GroupedButtons defaultValue="day" icon={Star} options={[{ label: "Day", value: "day" }]} />
 * ```
 */
export function GroupedButtons({ options = [], icon: IconComponent = null, ...rest }) {
  const lastIndex = options.length - 1;

  const radioOptions = options.map(function (option, index) {
    const { label = "", className = "", ...optionRest } = option;

    return {
      ...optionRest,
      className: [...cornerClass(index, lastIndex), className].filter(Boolean).join(" "),
      label: optionLabel(label, IconComponent),
    };
  });

  return <Radio.Group options={radioOptions} optionType="button" buttonStyle="solid" {...rest} />;
}

export default GroupedButtons;
