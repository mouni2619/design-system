import { Calendar } from "@components/Calendar/Calendar";
import { CALENDAR_MODES } from "@components/Calendar/constants";

export default {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  args: {
    mode: "single",
  },
  argTypes: {
    mode: { control: "select", options: CALENDAR_MODES },
    defaultValue: { control: false },
    onApply: { action: "apply" },
    onCancel: { action: "cancel" },
  },
};

export const Default = {};

export const Range = {
  args: {
    mode: "range",
  },
};
