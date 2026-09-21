import { Flex } from "antd";

import { DatePicker } from "@components/DatePicker/DatePicker";
import { DEFAULT_DATE_PICKER_SIZE } from "@components/DatePicker/constants";

const CAPTION_CLASS = "caption text-secondary";

const SIZES = ["small", "medium", "large"];

// The design's rows. Hover and Onclick are the field's own states: hover one
// of these or click into it to see them.
const STATES = [
  { label: "default", props: {} },
  { label: "disabled", props: { disabled: true } },
  { label: "error", props: { status: "error" } },
  { label: "success", props: { status: "success" } },
];

// The sheet's two blocks: the field on its own, and the field under a label.
const BLOCKS = [
  { label: "Date picker : No label", props: { label: "" } },
  { label: "Date picker : With label", props: { label: "Label" } },
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
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  args: {
    size: DEFAULT_DATE_PICKER_SIZE,
    label: "",
    placeholder: "Placeholder",
    disabled: false,
  },
  argTypes: {
    size: { control: "inline-radio", options: SIZES },
    label: { control: "text", description: "Drawn above the field; left off, there is no label." },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  decorators: [narrow],
};

export const WithLabel = {
  args: { label: "Label" },
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
              <DatePicker {...args} size={size} />
            </Flex>
          );
        })}
      </Flex>
    );
  },
};

// The design sheet's two blocks, at every state and every size.
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
                            <DatePicker {...args} {...block.props} {...state.props} size={size} />
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
