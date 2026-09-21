import { Radio as AntRadio } from "antd";

import "./Radio.css";

import { DEFAULT_RADIO_SIZE, RADIO_SIZES } from "@components/Radio/constants";

/**
 * A radio: one choice out of a set.
 *
 * `size` is the design's small, medium or large circle — AntD draws one size
 * only, so the two it does not carry are set on the circle by the stylesheet.
 * Hover, focus and disabled are the control's own states, painted by the
 * theme. `checked`, `value`, `onChange`, `disabled` and `children` are AntD's
 * Radio, which is what lets a `Radio.Group` or a `Form.Item` drive it.
 *
 * ```jsx
 * <Radio value="a">Option a</Radio>
 * <Radio value="b" size="large" />
 * ```
 */
export function Radio({ size = DEFAULT_RADIO_SIZE, classNames = {}, children = null, ...rest }) {
  const sizeClass = RADIO_SIZES[size] ? `radio-${size}` : `radio-${DEFAULT_RADIO_SIZE}`;

  return (
    <AntRadio
      classNames={{ ...classNames, root: `radio ${sizeClass} ${classNames.root || ""}` }}
      {...rest}
    >
      {children}
    </AntRadio>
  );
}

export default Radio;
