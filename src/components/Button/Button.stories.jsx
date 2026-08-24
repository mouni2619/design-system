import { MousePointer2 } from "lucide-react";
import { Button } from "./Button";

const types = ["primary", "secondary", "info", "success", "warning", "danger"];
const variants = ["filled-dark", "outlined", "filled-subtle", "ghost"];
const sizes = ["small", "medium", "large"];

const Icon = () => <MousePointer2 size="1em" style={{ display: "block" }} />;

const row = { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" };
const stack = { display: "grid", gap: 16 };
const label = {
  font: "500 10px/1.6 Inter, sans-serif",
  color: "#767676",
  minWidth: 92,
};

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    type: "primary",
    variant: "filled-dark",
    size: "medium",
    iconPosition: "none",
    disabled: false,
    loading: false,
  },
  argTypes: {
    type: { control: "select", options: types },
    variant: { control: "select", options: variants },
    size: { control: "inline-radio", options: sizes },
    iconPosition: { control: "inline-radio", options: ["none", "left", "right", "only"] },
    icon: { table: { disable: true } },
  },
  render: (args) => <Button {...args} icon={<Icon />} />,
};

export const Default = {};

/** Every type across every style. */
export const Types = {
  render: (args) => (
    <div style={stack}>
      {variants.map((variant) => (
        <div key={variant} style={row}>
          <span style={label}>{variant}</span>
          {types.map((type) => (
            <Button key={type} {...args} type={type} variant={variant} icon={<Icon />}>
              {type}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};

/** 24 / 34 / 44px tall, with 10 / 12 / 14px text and icons. */
export const Sizes = {
  render: (args) => (
    <div style={stack}>
      {sizes.map((size) => (
        <div key={size} style={row}>
          <span style={label}>{size}</span>
          <Button {...args} size={size} icon={<Icon />}>
            Button
          </Button>
          <Button {...args} size={size} iconPosition="left" icon={<Icon />}>
            Button
          </Button>
          <Button {...args} size={size} iconPosition="right" icon={<Icon />}>
            Button
          </Button>
          <Button {...args} size={size} iconPosition="only" icon={<Icon />} aria-label="Button" />
        </div>
      ))}
    </div>
  ),
};

/** Icon placement, matching the four columns of the spec sheet. */
export const Icons = {
  render: (args) => (
    <div style={row}>
      {["none", "left", "right", "only"].map((position) => (
        <Button
          key={position}
          {...args}
          iconPosition={position}
          icon={<Icon />}
          aria-label={position === "only" ? "Button" : undefined}
        >
          Button
        </Button>
      ))}
    </div>
  ),
};

/**
 * Disabled is a prop; hover, onclick and active are real interaction states —
 * hover and click the buttons above to see them.
 */
export const Disabled = {
  render: (args) => (
    <div style={stack}>
      {variants.map((variant) => (
        <div key={variant} style={row}>
          <span style={label}>{variant}</span>
          {types.map((type) => (
            <Button key={type} {...args} type={type} variant={variant} disabled icon={<Icon />}>
              {type}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};
