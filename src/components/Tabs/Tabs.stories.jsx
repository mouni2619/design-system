import { Star } from "lucide-react";

import { Tabs } from "@components/Tabs/Tabs";
import { TABS_SIZES, TABS_VARIANTS } from "@components/Tabs/constants";

const CAPTION_CLASS = "caption text-secondary";

const VARIANTS = Object.keys(TABS_VARIANTS);

const BASE_ITEMS = [
  { key: "1", label: "Active tab" },
  { key: "2", label: "Inactive tab" },
  { key: "3", label: "Inactive tab" },
  { key: "4", label: "Inactive tab" },
  { key: "5", label: "Inactive tab" },
  { key: "6", label: "Inactive tab" },
  { key: "7", label: "Inactive tab" },
  { key: "8", label: "Inactive tab" },
];

// Icons inside a tab sit at the label's size.
const DEMO_ICON_SIZE = 12;

function withIcons(items) {
  return items.map(function (item) {
    return { ...item, icon: <Star size={DEMO_ICON_SIZE} /> };
  });
}

function LabelledRow({ label = "", children = null }) {
  return (
    <div className="row align-items-center mb-4">
      <div className="col-2">
        <small className={CAPTION_CLASS}>{label}</small>
      </div>
      <div className="col ps-4">{children}</div>
    </div>
  );
}

export default {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    items: BASE_ITEMS,
    variant: "line",
    size: "medium",
  },
  argTypes: {
    variant: { control: "select", options: VARIANTS },
    size: { control: "inline-radio", options: TABS_SIZES },
    items: {
      control: false,
      table: { type: { summary: "{ key, label, icon?, disabled?, children? }[]" } },
    },
  },
};

export const Default = {};

export const Reference = {
  render: function (args) {
    return (
      <div className="d-grid gap-4">
        <Tabs {...args} variant="boxed" />
        <Tabs {...args} variant="boxed" items={withIcons(args.items)} />
        <Tabs {...args} variant="line" />
        <Tabs {...args} variant="line" items={withIcons(args.items)} />
      </div>
    );
  },
};

export const Variants = {
  render: function (args) {
    return (
      <div className="d-grid gap-4">
        {VARIANTS.map(function (variant) {
          return (
            <LabelledRow key={variant} label={variant}>
              <Tabs {...args} variant={variant} />
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
      <div className="d-grid gap-4">
        {TABS_SIZES.map(function (size) {
          return (
            <LabelledRow key={size} label={size}>
              <Tabs {...args} size={size} />
            </LabelledRow>
          );
        })}
      </div>
    );
  },
};

export const WithIcons = {
  render: function (args) {
    return (
      <div className="d-grid gap-4">
        {VARIANTS.map(function (variant) {
          return (
            <LabelledRow key={variant} label={variant}>
              <Tabs {...args} variant={variant} items={withIcons(args.items)} />
            </LabelledRow>
          );
        })}
      </div>
    );
  },
};

export const States = {
  render: function (args) {
    const items = [
      ...BASE_ITEMS,
      { key: "9", label: "Disabled tab", disabled: true },
    ];
    return <Tabs {...args} items={items} />;
  },
};
