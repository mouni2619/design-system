import { Flex } from "antd";

import { Link } from "@components/Link/Link";

const CAPTION_CLASS = "caption text-secondary";

const SIZES = ["small", "medium", "large"];

// The design's rows. Hover, pressed and focused are not listed: they are the
// browser's own states, so hover, click or tab to any link here to see them.
const LINK_STATES = [
  { label: "default", props: {} },
  { label: "disabled", props: { disabled: true } },
];

export default {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  args: {
    children: "Link",
    href: "#",
    size: "medium",
    disabled: false,
  },
  argTypes: {
    children: { control: "text" },
    href: { control: "text" },
    size: { control: "inline-radio", options: SIZES },
    disabled: { control: "boolean" },
    className: { control: false },
  },
};

export const Default = {};

export const Sizes = {
  render: function (args) {
    return (
      <Flex align="center" gap="large">
        {SIZES.map(function (size) {
          return (
            <Link key={size} {...args} size={size}>
              {size}
            </Link>
          );
        })}
      </Flex>
    );
  },
};

export const States = {
  render: function (args) {
    return (
      <Flex align="center" gap="large">
        {LINK_STATES.map(function (state) {
          return (
            <Link key={state.label} {...args} {...state.props}>
              {state.label}
            </Link>
          );
        })}
      </Flex>
    );
  },
};

export const AllStates = {
  render: function (args) {
    return (
      <Flex vertical gap="large">
        {LINK_STATES.map(function (state) {
          return (
            <Flex key={state.label} vertical gap="small">
              <small className={CAPTION_CLASS}>{state.label}</small>
              <Flex align="center" gap="large">
                {SIZES.map(function (size) {
                  return (
                    <Link key={size} {...args} {...state.props} size={size}>
                      {args.children}
                    </Link>
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
