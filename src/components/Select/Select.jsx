import { Select as AntSelect } from "antd";
import { ChevronDown, Search as SearchIcon } from "lucide-react";
import { useId } from "react";

import { DEFAULT_SELECT_SIZE, SELECT_ICON_SIZE, SELECT_POPUP_STYLES } from "@components/Select/constants";

/**
 * A select: a field that opens a list of options.
 *
 * `label` draws the sheet's label above the field and ties the two together,
 * so clicking it puts the focus in the field; leave it off for the sheet's
 * "No label" rows.
 * `showSearch` is antd's, and turns the field into one you can type in to
 * filter — the design swaps the chevron for a magnifier there. Hover, focus
 * and disabled are the field's own states, painted by the theme. `options`,
 * `value`, `onChange`, `placeholder` and `status` are antd's Select, which is
 * what lets a `Form.Item` drive it.
 *
 * ```jsx
 * <Select options={cities} placeholder="Select" />
 * <Select options={cities} label="City" showSearch size="large" />
 * ```
 */
export function Select({
  label = "",
  id = "",
  size = DEFAULT_SELECT_SIZE,
  showSearch = false,
  className = "",
  ...rest
}) {
  const Glyph = showSearch ? SearchIcon : ChevronDown;

  // The label needs something to point at. A caller's own id wins, so a
  // `Form.Item` can still hand the field one.
  const generatedId = useId();
  const fieldId = id || generatedId;

  const field = (
    <AntSelect
      id={fieldId}
      size={size}
      showSearch={showSearch}
      // A field fills its column, as the Input beside it does; AntD sizes a
      // select to its longest option instead.
      className={`w-100 ${className}`}
      suffixIcon={<Glyph size={SELECT_ICON_SIZE} className="text-secondary-emp-6" />}
      styles={{ popup: SELECT_POPUP_STYLES }}
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

export default Select;
