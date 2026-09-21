import { Flex } from "antd";

import { Search } from "@components/Search/Search";

const CAPTION_CLASS = "caption text-secondary";

const SIZES = ["small", "medium", "large"];

// The design's rows. Hover and Onclick are not here: they are the field's own
// states, so hover one of these or click into it to see them.
const STATES = [
  { label: "default", props: {} },
  { label: "disabled", props: { disabled: true } },
  { label: "entered", props: { defaultValue: "Mumbai" } },
];

// The width the design draws the field at; in an app it fills its container.
const FIELD_CLASS = "w-25";

export default {
  title: "Components/Search",
  component: Search,
  tags: ["autodocs"],
  args: {
    size: "medium",
    placeholder: "Search here...",
    disabled: false,
  },
  argTypes: {
    size: { control: "inline-radio", options: SIZES },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
};

// One field on its own, at the width the design draws it.
function narrow(Story) {
  return (
    <div className={FIELD_CLASS}>
      <Story />
    </div>
  );
}

export const Default = {
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
              <Search {...args} size={size} />
            </Flex>
          );
        })}
      </Flex>
    );
  },
};

// The design sheet: every state at every size. Hover or click a field for the
// two states the browser owns.
export const AllStates = {
  render: function (args) {
    return (
      <Flex vertical gap="large">
        {STATES.map(function (state) {
          return (
            <Flex key={state.label} vertical gap="small">
              <small className={CAPTION_CLASS}>{state.label}</small>
              <Flex gap="large">
                {SIZES.map(function (size) {
                  return (
                    <div key={size} className="flex-grow-1">
                      <Search {...args} {...state.props} size={size} />
                    </div>
                  );
                })}
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    );
  },
};
