import { Flex } from "antd";

import { Range } from "@components/Range/Range";
import { DEFAULT_RANGE_SIZE } from "@components/Range/constants";

const CAPTION_CLASS = "caption text-secondary";

const SIZES = ["small", "medium", "large"];

const PLACEHOLDERS = {
  start: { placeholder: "Min value" },
  end: { placeholder: "Max value" },
};

// The pair is one value, so a filled range is one array.
const ENTERED = { value: ["90", "90"] };

// The design's rows. Hover and Onclick are the box's own states: hover one of
// these or click into it to see them.
const STATES = [
  { label: "default", props: PLACEHOLDERS },
  { label: "disabled", props: { ...ENTERED, disabled: true } },
  { label: "entered", props: ENTERED },
  { label: "error", props: { ...PLACEHOLDERS, status: "error" } },
];

// The sheet's two blocks: the box on its own, and the box under a label.
const BLOCKS = [
  { label: "Range/Grouped Input : No label", props: { label: "" } },
  { label: "Range/Grouped Input : With label", props: { label: "Label" } },
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
  title: "Components/Range",
  component: Range,
  tags: ["autodocs"],
  args: {
    size: DEFAULT_RANGE_SIZE,
    label: "",
    separator: "-",
    disabled: false,
    ...PLACEHOLDERS,
  },
  argTypes: {
    size: { control: "inline-radio", options: SIZES },
    label: { control: "text", description: "Drawn above the box; left off, there is no label." },
    separator: { control: "text", description: "What sits in the cell between the two fields." },
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
              <Range {...args} size={size} />
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
                            <Range {...args} {...block.props} {...state.props} size={size} />
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
