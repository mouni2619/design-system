import { Popover } from "@components/Popover/Popover";
import { POPOVER_PLACEMENTS } from "@components/Popover/constants";

export default {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  args: {
    title: "Title",
    content: "Body",
    placement: "top",
    icon: false,
    size: "small",
    defaultOpen: true,
  },
  argTypes: {
    placement: { control: "select", options: POPOVER_PLACEMENTS },
    size: { control: "inline-radio", options: ["small", "large"] },
    icon: { control: "boolean" },
    open: { control: false },
  },
};

export const Default = {
  render: function (args) {
    return (
      <div className="popover-demo-stage">
        <Popover key={args.placement} {...args}>
          <button type="button" className="popover-anchor" aria-label="Show popover" />
        </Popover>
      </div>
    );
  },
};

export const Placements = {
  render: function (args) {
    return (
      <div className="popover-demo-stage">
        <Popover key={args.placement} {...args}>
          <button type="button" className="popover-anchor" aria-label="Show popover" />
        </Popover>
      </div>
    );
  },
};

export const WithIcon = {
  args: { icon: true },
  render: function (args) {
    return (
      <div className="popover-demo-stage">
        <Popover {...args}>
          <button type="button" className="popover-anchor" aria-label="Show popover" />
        </Popover>
      </div>
    );
  },
};

export const TitleOnly = {
  args: { content: null, size: "large" },
  render: function (args) {
    return (
      <div className="popover-demo-stage">
        <Popover {...args}>
          <button type="button" className="popover-anchor" aria-label="Show popover" />
        </Popover>
      </div>
    );
  },
};
