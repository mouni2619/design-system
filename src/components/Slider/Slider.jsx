import { Slider as AntSlider } from "antd";

import "@components/Slider/Slider.css";

import { DEFAULT_SLIDER_MAX, DEFAULT_SLIDER_MIN, DEFAULT_SLIDER_PARTITIONS } from "@components/Slider/constants";

/**
 * A slider, single or a range, with its track marked into `partitions` equal
 * parts and, with `showLabels`, each mark's value under it. With no
 * partitions and labels on, only the two ends are labelled.
 *
 * Marks are guides, not stops: the handle moves in `step`s as usual. The
 * chosen value or range is tinted, and the marks inside it turn blue.
 * `range` (with a `[start, end]` value), `value`, `defaultValue`, `step` and
 * `onChange` are antd's Slider.
 *
 * ```jsx
 * <Slider partitions={5} defaultValue={50} />
 * <Slider range partitions={4} showLabels defaultValue={[0, 50]} />
 * <Slider max={24} showLabels defaultValue={12} disabled />
 * ```
 */
export function Slider({
  min = DEFAULT_SLIDER_MIN,
  max = DEFAULT_SLIDER_MAX,
  partitions = DEFAULT_SLIDER_PARTITIONS,
  showLabels = false,
  disabled = false,
  className = "",
  ...rest
}) {
  const labelClass = disabled ? "text-secondary-emp-6" : "text-secondary-emp-8";
  const noMarksClass = partitions === 0 ? "slider-no-marks" : "";

  // antd drops a mark whose label is empty, so each gets a span, filled only
  // when labels are shown. No partitions still marks the ends for the labels.
  const parts = partitions === 0 ? 1 : partitions;
  let marks;
  if (partitions > 0 || showLabels) {
    marks = {};
    for (let part = 0; part <= parts; part += 1) {
      const value = min + ((max - min) * part) / parts;
      const label = showLabels ? Number(value.toFixed(1)) : null;
      marks[value] = <span className={`d-block mt-1 ${labelClass}`}>{label}</span>;
    }
  }

  return (
    <AntSlider
      min={min}
      max={max}
      marks={marks}
      disabled={disabled}
      className={`slider ${noMarksClass} ${className}`}
      // A range's start handle stops at its end handle rather than passing it.
      allowCross={false}
      {...rest}
    />
  );
}

export default Slider;
