import { Flex } from "antd";
import { Star } from "lucide-react";

import { GroupedButtons } from "@components/GroupedButtons/GroupedButtons";

const CAPTION_CLASS = "caption text-secondary";

// A Lucide icon is a forwardRef object, and Storybook's serialiser prints its
// internals — `{ $$typeof: Symbol(react.forward_ref), render: () => {} }` —
// rather than the name you actually pass. Put the name back so the snippet
// reads like the code it is meant to be copied from.
const ICON_NAME = "Star";
const ICON_OBJECT = /\{\s*\$\$typeof:[\s\S]*?render:[\s\S]*?\}\s*\}/g;

// The stories that draw several groups pass the same icon to each, and a
// repeated reference serialises as '[Circular]' after its first appearance.
const ICON_CIRCULAR = /\bicon=\{'\[Circular\]'\}/g;

function transformSource(code) {
  return code.replace(ICON_OBJECT, ICON_NAME).replace(ICON_CIRCULAR, `icon={${ICON_NAME}}`);
}

// antd's own size names, listed here to drive the control and the grid.
const GROUPED_BUTTONS_SIZES = ["small", "medium", "large"];

const RANGE_OPTIONS = [
  { label: "Day", value: "day" },
  { label: "Week", value: "week" },
  { label: "Month", value: "month" },
  { label: "Year", value: "year" },
];

// The design draws the group at every length from two buttons up to ten, to
// show it is the content that sets each button's width.
const COUNTS = [2, 5, 10];

function countOptions(count) {
  const options = [];
  for (let index = 1; index <= count; index += 1) {
    options.push({ label: index === 1 ? "Active btn" : "Inactive btn", value: `btn-${index}` });
  }
  return options;
}

function LabelledRow({ label = "", children = null }) {
  return (
    <Flex vertical gap="small">
      <small className={CAPTION_CLASS}>{label}</small>
      {children}
    </Flex>
  );
}

export default {
  title: "Components/GroupedButtons",
  component: GroupedButtons,
  tags: ["autodocs"],
  args: {
    options: RANGE_OPTIONS,
    defaultValue: "day",
    size: "medium",
    disabled: false,
  },
  argTypes: {
    size: { control: "inline-radio", options: GROUPED_BUTTONS_SIZES },
    disabled: { control: "boolean", description: "Disables every button in the group." },
    block: { control: "boolean", description: "Stretches the group to fill its container." },
    options: { control: "object", description: "antd's own option objects." },
    icon: {
      control: false,
      description: "One Lucide component, drawn on every button in the group.",
      table: { type: { summary: "LucideIcon (e.g. Star, Info, CircleHelp)" } },
    },
    value: {
      control: false,
      description: "Pass with `onChange` to control the selection. Omit to let the group track its own.",
    },
    defaultValue: { control: false },
    onChange: { control: false, table: { type: { summary: "(event) => void" } } },
  },
  parameters: {
    docs: { source: { transform: transformSource } },
  },
};

export const Default = {};

export const WithIcon = {
  args: { icon: Star },
};

export const Sizes = {
  render: function (args) {
    return (
      <Flex vertical gap="large">
        {GROUPED_BUTTONS_SIZES.map(function (size) {
          return (
            <LabelledRow key={size} label={size}>
              <GroupedButtons {...args} size={size} />
            </LabelledRow>
          );
        })}
      </Flex>
    );
  },
};

export const Disabled = {
  args: { disabled: true },
};

/** Both states at the lengths the design draws, from two buttons up to ten. */
export const AllStates = {
  render: function (args) {
    return (
      <Flex vertical gap="large">
        {[false, true].map(function (withIcon) {
          return (
            <LabelledRow key={String(withIcon)} label={withIcon ? "with icon" : "without icon"}>
              {COUNTS.map(function (count) {
                return (
                  <GroupedButtons
                    key={count}
                    {...args}
                    icon={withIcon ? Star : null}
                    options={countOptions(count)}
                    defaultValue="btn-1"
                  />
                );
              })}
            </LabelledRow>
          );
        })}
      </Flex>
    );
  },
};
