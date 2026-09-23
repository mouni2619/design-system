import { useRef, useState } from "react";
import { DatePicker as AntDatePicker } from "antd";

import { Button } from "@components/Button/Button";
import { Link } from "@components/Link/Link";
import { DEFAULT_CALENDAR_MODE } from "@components/Calendar/constants";
import "@components/Calendar/Calendar.scss";

const { RangePicker: AntRangePicker } = AntDatePicker;

function CalendarFooter({ mode = DEFAULT_CALENDAR_MODE, onClear, onCancel, onApply, applyDisabled }) {
  return (
    <div className="d-flex align-items-center justify-content-between w-100 px-1 py-3">
      {mode === "range" ? (
        <Link size="large" className="text-decoration-none" onClick={onClear}>
          clear
        </Link>
      ) : (
        <span />
      )}
      <div className="ds-calendar-actions d-flex gap-3">
        <Button type="primary" variant="filled-subtle" size="large" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="primary" variant="filled-dark" size="large" onClick={onApply} disabled={applyDisabled}>
          Apply
        </Button>
      </div>
    </div>
  );
}

export function Calendar({
  mode = DEFAULT_CALENDAR_MODE,
  defaultValue = null,
  defaultOpen = false,
  onApply,
  onCancel,
  ...rest
}) {
  const [committedValue, setCommittedValue] = useState(defaultValue);
  const [pendingValue, setPendingValue] = useState(defaultValue);
  const [open, setOpen] = useState(defaultOpen);
  // RangePicker requests a close after the end date; leave it open for Apply.
  const ignoreNextRangeClose = useRef(false);

  function handleOpenChange(nextOpen) {
    if (!nextOpen && ignoreNextRangeClose.current) {
      ignoreNextRangeClose.current = false;
      return;
    }
    // Closing without Apply (outside click, escape) discards the in-progress pick.
    if (!nextOpen) {
      setPendingValue(committedValue);
    }
    setOpen(nextOpen);
  }

  function handleCancel() {
    ignoreNextRangeClose.current = false;
    setPendingValue(committedValue);
    setOpen(false);
    onCancel?.();
  }

  function handleApply() {
    ignoreNextRangeClose.current = false;
    setCommittedValue(pendingValue);
    setOpen(false);
    onApply?.(pendingValue);
  }

  function handleClear() {
    ignoreNextRangeClose.current = false;
    setPendingValue(null);
  }

  const rangeIncomplete =
    mode === "range" && Array.isArray(pendingValue) &&
    (!pendingValue[0] || !pendingValue[1]);

  const footer = function () {
    return (
      <CalendarFooter mode={mode} onClear={handleClear} onCancel={handleCancel} onApply={handleApply} applyDisabled={rangeIncomplete} />
    );
  };

  const sharedProps = {
    open,
    onOpenChange: handleOpenChange,
    value: pendingValue,
    onChange: function (date) {
      setPendingValue(date);
    },
    onCalendarChange: function (date) {
      setPendingValue(date);
      if (mode === "range" && date?.[0] && date?.[1]) {
        ignoreNextRangeClose.current = true;
      }
    },
    needConfirm: mode !== "range",
    renderExtraFooter: footer,
    classNames: {
      popup: { root: `ds-calendar-popup ds-calendar-popup--${mode}` },
    },
    // AntD's DatePicker defaults to showing a native "Today" link in the
    // footer; the custom footer above replaces it, so suppress the default.
    showToday: false,
    ...rest,
  };

  const Picker = mode === "range" ? AntRangePicker : AntDatePicker;

  return <Picker {...sharedProps} />;
}

export default Calendar;
