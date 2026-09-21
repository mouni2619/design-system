import { Flex } from "antd";

import { Radio } from "@components/Radio/Radio";
import { DEFAULT_RADIO_SIZE, RADIO_SIZES } from "@components/Radio/constants";

const CAPTION_CLASS = "caption text-secondary";

const SIZES = Object.keys(RADIO_SIZES);

// The design's rows. Hover and Onclick are the control's own states: hover one
// of these or click into it to see them.
const STATES = [
  { label: "default", props: {} },
  { label: "checked", props: { checked: true } },
  { label: "disabled", props: { disabled: true } },
  { label: "checked + disabled", props: { checked: true, disabled: true } },
];

export default {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  args: {
    size: DEFAULT_RADIO_SIZE,
    disabled: false,
  },
  argTypes: {
    size: { control: "inline-radio", options: SIZES },
    disabled: { control: "boolean" },
  },
};

export const Default = {};

export const WithLabel = {
  render: function (args) {
    return <Radio {...args}>Option a</Radio>;
  },
};

export const Sizes = {
  render: function (args) {
    return (
      <Flex gap="large" align="center">
        {SIZES.map(function (size) {
          return (
            <Flex key={size} vertical gap="small" align="center">
              <small className={CAPTION_CLASS}>{size}</small>
              <Radio {...args} size={size} checked />
            </Flex>
          );
        })}
      </Flex>
    );
  },
};

// The design sheet: every state at every size.
export const AllStates = {
  render: function (args) {
    return (
      <Flex vertical gap="large">
        {STATES.map(function (state) {
          return (
            <Flex key={state.label} vertical gap="small">
              <small className={CAPTION_CLASS}>{state.label}</small>
              <Flex gap="large" align="center">
                {SIZES.map(function (size) {
                  return <Radio key={size} {...args} {...state.props} size={size} />;
                })}
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    );
  },
};
