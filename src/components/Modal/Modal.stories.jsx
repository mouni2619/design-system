import { useState } from "react";

import { Modal } from "@components/Modal/Modal";
import { Button } from "@components/Button/Button";
import { MODAL_SIZES } from "@components/Modal/constants";

function ModalDemo({ triggerLabel = "Open", ...args }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{triggerLabel}</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    title: "Modal Title",
    size: "default",
    icon: false,
    children: "Body",
  },
  argTypes: {
    size: { control: "inline-radio", options: MODAL_SIZES },
    icon: { control: "boolean" },
    open: { control: false, table: { disable: true } },
    onClose: { control: false, table: { disable: true } },
  },
  render: function (args) {
    return <ModalDemo {...args} />;
  },
};

export const Default = {
  args: {
    icon: true,
    onCancel: () => {},
    cancelText: "Button",
    onConfirm: () => {},
    confirmText: "Button",
  },
};

export const WithFooter = {
  args: {
    onCancel: () => {},
    cancelText: "Button",
    onConfirm: () => {},
    confirmText: "Button",
  },
};

export const WithoutFooter = {
  args: {
    icon: true,
  },
};

export const Minimal = {
  args: {},
};

function SizesDemo(args) {
  const [openSize, setOpenSize] = useState(null);

  return (
    <>
      <div className="d-flex gap-2">
        {MODAL_SIZES.map(function (size) {
          return (
            <Button key={size} onClick={() => setOpenSize(size)}>
              {size}
            </Button>
          );
        })}
      </div>
      <Modal
        {...args}
        size={openSize ?? MODAL_SIZES[0]}
        open={openSize != null}
        onClose={() => setOpenSize(null)}
      />
    </>
  );
}

export const Sizes = {
  render: function (args) {
    return <SizesDemo {...args} />;
  },
};
