import { Flex } from "antd";
import { CalendarDays } from "lucide-react";

import { Select } from "@components/Select/Select";
import { SELECT_ICON_SIZE } from "@components/Select/constants";

const CAPTION_CLASS = "caption text-secondary";

const SIZES = ["small", "medium", "large"];

// Stand-in data until the real lists arrive.
const OPTIONS = [
  { value: "a", label: "Option a" },
  { value: "b", label: "Option b" },
  { value: "c", label: "Option c" },
  { value: "d", label: "Option d" },
  { value: "e", label: "Option e" },
];

// The sheet's second list draws a glyph before each label.
const ICON_OPTIONS = OPTIONS.map(function (option) {
  return {
    value: option.value,
    label: (
      <span className="d-inline-flex align-items-center gap-1">
        <CalendarDays size={SELECT_ICON_SIZE} />
        {option.label}
      </span>
    ),
  };
});

// The design's rows. Hover and Onclick are the field's own states: hover one
// of these or click into it to see them.
const STATES = [
  { label: "default", props: {} },
  { label: "disabled", props: { disabled: true } },
  { label: "entered", props: { defaultValue: "a" } },
];

const FIELD_CLASS = "w-25";

function narrow(Story) {
  return (
    <div className={FIELD_CLASS}>
      <Story />
    </div>
  );
}

export default {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    size: "medium",
    label: "",
    placeholder: "Placeholder",
    options: OPTIONS,
    showSearch: false,
    disabled: false,
  },
  argTypes: {
    size: { control: "inline-radio", options: SIZES },
    label: { control: "text", description: "Drawn above the field; left off, there is no label." },
    showSearch: { control: "boolean", description: "Type in the field to filter; swaps the chevron for a magnifier." },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    options: { control: "object" },
  },
};

export const Default = {
  decorators: [narrow],
};

export const WithSearch = {
  args: { showSearch: true },
  decorators: [narrow],
};

// The sheet's "With label" rows: a line of the field's own text above it.
export const WithLabel = {
  args: { label: "Label" },
  decorators: [narrow],
};

// Each option carries a glyph before its label.
export const WithOptionIcons = {
  args: { options: ICON_OPTIONS },
  decorators: [narrow],
};

export const Sizes = {
  decorators: [narrow],
  render: function (args) {
    return (
      <Flex vertical gap="large">
        {SIZES.map(function (size) {
          return (
            <Flex key={size} vertical gap="small">
              <small className={CAPTION_CLASS}>{size}</small>
              <Select {...args} size={size} />
            </Flex>
          );
        })}
      </Flex>
    );
  },
};

// The design sheet's four blocks — plain and with search, each without a
// label and with one — at every state and every size.
const BLOCKS = [
  { label: "Select : No label", props: { showSearch: false, label: "" } },
  { label: "Select : With label", props: { showSearch: false, label: "Label" } },
  { label: "Select with search : No label", props: { showSearch: true, label: "" } },
  { label: "Select with search : With label", props: { showSearch: true, label: "Label" } },
];

export const AllStates = {
  render: function (args) {
    return (
      <Flex vertical gap="large">
        {BLOCKS.map(function (block) {
          return (
            <Flex key={block.label} vertical gap="middle">
              <small className={CAPTION_CLASS}>{block.label}</small>
              {STATES.map(function (state) {
                return (
                  <Flex key={state.label} vertical gap="small">
                    <small className={CAPTION_CLASS}>{state.label}</small>
                    <Flex gap="large">
                      {SIZES.map(function (size) {
                        return (
                          <div key={size} className="flex-grow-1">
                            <Select {...args} {...block.props} {...state.props} size={size} />
                          </div>
                        );
                      })}
                    </Flex>
                  </Flex>
                );
              })}
            </Flex>
          );
        })}
      </Flex>
    );
  },
};
