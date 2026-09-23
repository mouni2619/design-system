import { useState } from "react";
import { Star } from "lucide-react";

import { OffCanvas } from "@components/OffCanvas/OffCanvas";
import { Button } from "@components/Button/Button";
import { OFFCANVAS_PLACEMENTS, OFFCANVAS_SIZES } from "@components/OffCanvas/constants";

// Icon sits at the title's size, matching Button's demo icon-sizing note.
const DEMO_ICON_SIZE = 14;

function OffCanvasDemo({ triggerLabel = "Open", ...args }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{triggerLabel}</Button>
      <OffCanvas {...args} open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default {
  title: "Components/OffCanvas",
  component: OffCanvas,
  tags: ["autodocs"],
  args: {
    title: "OffCanvas",
    placement: "right",
    size: "default",
    children: "Body",
  },
  argTypes: {
    placement: { control: "inline-radio", options: OFFCANVAS_PLACEMENTS },
    size: { control: "inline-radio", options: OFFCANVAS_SIZES },
    open: { control: false, table: { disable: true } },
    onClose: { control: false, table: { disable: true } },
  },
  render: function (args) {
    return <OffCanvasDemo {...args} />;
  },
};

export const Default = {
  args: {
    icon: <Star size={DEMO_ICON_SIZE} />,
    onCancel: () => {},
    cancelText: "Button",
    onConfirm: () => {},
    confirmText: "Button",
  },
};

export const WithoutFooter = {
  args: {
    icon: <Star size={DEMO_ICON_SIZE} />,
  },
};

export const Minimal = {
  args: {},
};
