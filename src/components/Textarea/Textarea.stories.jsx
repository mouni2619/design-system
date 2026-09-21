import { Flex } from "antd";

import { Textarea } from "@components/Textarea/Textarea";

const CAPTION_CLASS = "caption text-secondary";

// The design's rows. Hover and Onclick are the field's own states: hover one
// of these or click into it to see them.
const STATES = [
  { label: "default", props: { placeholder: "e.g. Street/locality/landmark" } },
  { label: "disabled", props: { disabled: true, placeholder: "Disabled text" } },
  { label: "entered", props: { defaultValue: "Entered text" } },
  { label: "error", props: { status: "error", placeholder: "Type here..." } },
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
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    label: "Label",
    placeholder: "Type here...",
    disabled: false,
  },
  argTypes: {
    label: { control: "text", description: "Drawn above the field; left off, there is no label." },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  decorators: [narrow],
};

// The sheet's own example.
export const WithLabel = {
  args: { label: "Address line 1", placeholder: "e.g. Street/locality/landmark" },
  decorators: [narrow],
};

// The design sheet: every state at the one size it is drawn in.
export const AllStates = {
  render: function (args) {
    return (
      <Flex vertical gap="large" className={FIELD_CLASS}>
        {STATES.map(function (state) {
          return (
            <Flex key={state.label} vertical gap="small">
              <small className={CAPTION_CLASS}>{state.label}</small>
              <Textarea {...args} {...state.props} />
            </Flex>
          );
        })}
      </Flex>
    );
  },
};
