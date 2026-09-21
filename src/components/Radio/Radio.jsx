import { Radio as AntRadio } from "antd";

import "./Radio.css";

import { DEFAULT_RADIO_SIZE, RADIO_CIRCLE_STYLE, RADIO_SIZES } from "@components/Radio/constants";

/**
 * A radio: one choice out of a set.
 *
 * `size` is the design's small, medium or large circle — AntD draws one size
 * only, so the two it does not carry ride on the circle's own variables.
 * Hover, focus and disabled are the control's own states, painted by the
 * theme. `checked`, `value`, `onChange`, `disabled` and `children` are AntD's
 * Radio, which is what lets a `Radio.Group` or a `Form.Item` drive it.
 *
 * ```jsx
 * <Radio value="a">Option a</Radio>
 * <Radio value="b" size="large" />
 * ```
 */
export function Radio({
  size = DEFAULT_RADIO_SIZE,
  styles = {},
  classNames = {},
  children = null,
  ...rest
}) {
  const diameter = RADIO_SIZES[size] || RADIO_SIZES[DEFAULT_RADIO_SIZE];

  return (
    <AntRadio
      classNames={{ ...classNames, root: `radio ${classNames.root || ""}` }}
      styles={{
        ...styles,
        icon: {
          ...RADIO_CIRCLE_STYLE,
          "--ant-radio-radio-size": diameter,
          "--ant-radio-dot-size": diameter / 2,
          ...styles.icon,
        },
      }}
      {...rest}
    >
      {children}
    </AntRadio>
  );
}

export default Radio;
