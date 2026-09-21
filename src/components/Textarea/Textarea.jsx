import { Input } from "antd";
import { useId } from "react";

import "./Textarea.css";

/**
 * A textarea: the Input's taller twin, for a line of address or a note.
 *
 * `label` draws the sheet's label above it and ties the two together, so
 * clicking the label puts the focus in the field. The sheet only ever draws
 * this one with a label, and at one height — there is no small or large the
 * way there is for the fields that sit on a line. Hover, focus and disabled
 * are the field's own states, painted by the theme. `value`, `onChange`,
 * `placeholder` and `status` are AntD's TextArea, which is what lets a
 * `Form.Item` drive it.
 *
 * ```jsx
 * <Textarea label="Address line 1" placeholder="e.g. Street/locality/landmark" />
 * ```
 */
export function Textarea({ label = "", id = "", className = "", ...rest }) {
  // The label needs something to point at. A caller's own id wins, so a
  // `Form.Item` can still hand the field one.
  const generatedId = useId();
  const fieldId = id || generatedId;

  const field = (
    <Input.TextArea id={fieldId} className={`textarea ${className}`} {...rest} />
  );

  if (!label) {
    return field;
  }

  // The sheet sets the label on its own line 8px above the field, in the
  // field's own text and the flat neutral.
  return (
    <div>
      <label htmlFor={fieldId} className="body text-secondary-emp-8 d-block mb-2">
        {label}
      </label>
      {field}
    </div>
  );
}

export default Textarea;
