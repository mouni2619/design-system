import { Flex } from "antd";

import { Button } from "@components/Button/Button";
import { useToast } from "@components/Toast/Toast";
import { TOAST_STATUSES } from "@components/Toast/constants";

const CAPTION_CLASS = "caption text-secondary";

// The six content combinations from the design. Each one pins both the icon
// and the close glyph, so the controls for the two cannot leak into a row that
// the design draws without them.
const TOAST_STATES = [
  { label: "title + description + X", props: { showInfoIcon: false, closable: true } },
  { label: "title + description + i + X", props: { showInfoIcon: true, closable: true } },
  { label: "title + description", props: { showInfoIcon: false, closable: false } },
  { label: "title + description + i", props: { showInfoIcon: true, closable: false } },
  { label: "description + X", props: { title: null, showInfoIcon: false, closable: true } },
  { label: "description", props: { title: null, showInfoIcon: false, closable: false } },
];

const TOAST_STATUS_ITEMS = TOAST_STATUSES.map(function (status) {
  return { label: status, props: { status } };
});

const SINGLE_TRIGGER = [{ label: "Show toast", props: {} }];

// A toast is opened by a call, not rendered, so every story needs a trigger —
// and the holder the hook returns has to sit in the tree for it to show.
function ToastPlayground({ label = "", items = SINGLE_TRIGGER, args = {} }) {
  const [toast, holder] = useToast();

  return (
    <>
      {holder}
      <Flex vertical gap="small">
        {label ? <small className={CAPTION_CLASS}>{label}</small> : null}
        <Flex gap="small" wrap>
          {items.map(function (item) {
            return (
              <Button
                key={item.label}
                size="small"
                onClick={function () {
                  toast({ ...args, ...item.props });
                }}
              >
                {item.label}
              </Button>
            );
          })}
        </Flex>
      </Flex>
    </>
  );
}

export default {
  title: "Components/Toast",
  tags: ["autodocs"],
  args: {
    title: "Toast title",
    description: "Toast description",
    status: "primary",
    showInfoIcon: false,
    closable: true,
    duration: 4.5,
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    status: { control: "inline-radio", options: TOAST_STATUSES },
    showInfoIcon: { control: "boolean" },
    closable: { control: "boolean" },

    // AntD's own, in seconds. 0 keeps the toast up until it is dismissed.
    duration: { control: "number" },
  },
  render: function (args) {
    return <ToastPlayground args={args} />;
  },
};

export const Default = {};

export const States = {
  render: function (args) {
    return <ToastPlayground label="states" items={TOAST_STATES} args={args} />;
  },
};

export const Statuses = {
  render: function (args) {
    return <ToastPlayground label="status" items={TOAST_STATUS_ITEMS} args={args} />;
  },
};
