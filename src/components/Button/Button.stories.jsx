import { Trash2 } from "lucide-react";

import { Button } from "@components/Button/Button";
import { BUTTON_ICON_POSITIONS, BUTTON_SIZES, BUTTON_TYPES, BUTTON_VARIANTS } from "@components/constants";

const CAPTION_CLASS = "caption text-secondary";
const ROW_CLASS = "d-flex align-items-center gap-3 flex-wrap";

const TYPES = Object.keys(BUTTON_TYPES);
const VARIANTS = Object.keys(BUTTON_VARIANTS);

// Icons inside a button sit at the label's size.
const DEMO_ICON_SIZE = 12;

function LabelledRow({ label = "", children = null }) {
  return (
    <div className="row align-items-center">
      <div className="col-2">
        <small className={CAPTION_CLASS}>{label}</small>
      </div>
      <div className="col ps-4">
        <div className={ROW_CLASS}>{children}</div>
      </div>
    </div>
  );
}

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    type: "primary",
    variant: "filled-dark",
    size: "medium",
    iconPosition: "none",
    disabled: false,
    loading: false,
  },
  argTypes: {
    type: { control: "select", options: TYPES },
    variant: { control: "select", options: VARIANTS },
    size: { control: "inline-radio", options: BUTTON_SIZES },
    iconPosition: { control: "inline-radio", options: BUTTON_ICON_POSITIONS },
    icon: {
      control: false,
      table: { type: { summary: "ReactNode, e.g. <Trash2 size={12} />" } },
    },
  },
};

export const Default = {};

export const Types = {
  render: function (args) {
    return (
      <div className="d-grid gap-4">
        {VARIANTS.map(function (variant) {
          return (
            <LabelledRow key={variant} label={variant}>
              {TYPES.map(function (type) {
                return (
                  <Button key={type} {...args} type={type} variant={variant}>
                    {type}
                  </Button>
                );
              })}
            </LabelledRow>
          );
        })}
      </div>
    );
  },
};

export const Sizes = {
  render: function (args) {
    return (
      <div className={ROW_CLASS}>
        {BUTTON_SIZES.map(function (size) {
          return (
            <Button key={size} {...args} size={size}>
              {size}
            </Button>
          );
        })}
      </div>
    );
  },
};

export const WithIcon = {
  render: function (args) {
    return (
      <div className={ROW_CLASS}>
        <Button {...args} icon={<Trash2 size={DEMO_ICON_SIZE} />} iconPosition="start">
          Delete
        </Button>
        <Button {...args} icon={<Trash2 size={DEMO_ICON_SIZE} />} iconPosition="end">
          Delete
        </Button>
        <Button {...args} icon={<Trash2 size={DEMO_ICON_SIZE} />} iconPosition="only" aria-label="Delete" />
      </div>
    );
  },
};

export const States = {
  render: function (args) {
    return (
      <div className={ROW_CLASS}>
        <Button {...args}>Default</Button>
        <Button {...args} loading>
          Loading
        </Button>
        <Button {...args} disabled>
          Disabled
        </Button>
      </div>
    );
  },
};
