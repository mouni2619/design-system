import { Button } from "@components/Button/Button";

// TODO: EXAMPLE

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "default", "dashed", "text", "link"],
    },
    size: { control: "select", options: ["small", "middle", "large"] },
    danger: { control: "boolean" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "middle",
  },
};

export const Primary = {};

export const Secondary = {
  args: { variant: "default" },
};

export const Danger = {
  args: { danger: true },
};

export const Sizes = {
  render: (args) => (
    <div className="d-flex align-items-center gap-2">
      <Button {...args} size="small">
        Small
      </Button>
      <Button {...args} size="middle">
        Middle
      </Button>
      <Button {...args} size="large">
        Large
      </Button>
    </div>
  ),
};

export const Variants = {
  render: (args) => (
    <div className="d-flex align-items-center gap-2">
      {["primary", "default", "dashed", "text", "link"].map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
};
