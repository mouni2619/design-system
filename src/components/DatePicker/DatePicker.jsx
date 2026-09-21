import { DatePicker as AntDatePicker } from "antd";
import { Calendar, CircleCheck } from "lucide-react";
import { useId } from "react";

import { DATE_PICKER_ICON_SIZES, DATE_PICKER_SUCCESS_ICON_SIZE, DEFAULT_DATE_PICKER_SIZE } from "@components/DatePicker/constants";

/**
 * A date field: the Input's twin with a calendar on the end.
 *
 * `label` draws the sheet's label above the field and ties the two together,
 * so clicking it puts the focus in the field; leave it off for the sheet's
 * "No label" rows. Hover, focus and disabled are the field's own states,
 * painted by the theme. A `status` of `success` puts the sheet's tick before
 * the calendar; `error` turns the border, which is AntD's own. `value`,
 * `onChange`, `format`, `disabledDate` and `status` are AntD's DatePicker,
 * which is what lets a `Form.Item` drive it.
 *
 * ```jsx
 * <DatePicker placeholder="Placeholder" />
 * <DatePicker label="Start date" size="large" />
 * ```
 */
export function DatePicker({
  label = "",
  id = "",
  size = DEFAULT_DATE_PICKER_SIZE,
  status = "",
  className = "",
  ...rest
}) {
  // The label needs something to point at. A caller's own id wins, so a
  // `Form.Item` can still hand the field one.
  const glyphSize = DATE_PICKER_ICON_SIZES[size] || DATE_PICKER_ICON_SIZES[DEFAULT_DATE_PICKER_SIZE];

  const generatedId = useId();
  const fieldId = id || generatedId;

  const field = (
    <AntDatePicker
      id={fieldId}
      size={size}
      // A field fills its column, as the Input beside it does; AntD sizes a
      // date field to its format instead.
      className={`w-100 ${className}`}
      status={status}
      suffixIcon={
        <span className="d-inline-flex align-items-center gap-1">
          {status === "success" ? (
            <CircleCheck size={DATE_PICKER_SUCCESS_ICON_SIZE} className="text-success" />
          ) : null}
          <Calendar size={glyphSize} className="text-secondary-emp-6" />
        </span>
      }
      {...rest}
    />
  );

  if (!label) {
    return field;
  }

  // The sheet sets the label on its own line 8px above the field, in the field's
  // own text and the flat neutral.
  return (
    <div>
      <label htmlFor={fieldId} className="body text-secondary-emp-8 d-block mb-2">
        {label}
      </label>
      {field}
    </div>
  );
}

export default DatePicker;
