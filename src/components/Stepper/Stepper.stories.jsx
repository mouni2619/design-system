import { Flex } from "antd";
import { CreditCard, PartyPopper, Truck, User } from "lucide-react";
import { useState } from "react";

import { Stepper } from "@components/Stepper/Stepper";

const CAPTION_CLASS = "caption text-secondary";

const STEPPER_ORIENTATIONS = ["horizontal", "vertical"];

// antd's Steps has only the first two; large is Stepper.css.
const STEPPER_SIZES = ["small", "medium", "large"];

const TITLES = ["Account", "Payment", "Delivery", "Done"];
const SUBTITLES = ["Your details", "Card or bank", "Where to send", "All set"];
const ICONS = [User, CreditCard, Truck, PartyPopper];
const LETTERS = ["A", "B", "C", "D"];

/** `count` steps, optionally with the design's subtitle line and an icon each. */
function buildItems(count, withSubtitle = false, withIcon = false) {
  const items = [];
  for (let step = 0; step < count; step += 1) {
    items.push({
      title: TITLES[step % TITLES.length],
      subtitle: withSubtitle ? SUBTITLES[step % SUBTITLES.length] : undefined,
      icon: withIcon ? ICONS[step % ICONS.length] : undefined,
    });
  }
  return items;
}

export default {
  title: "Components/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  args: {
    items: buildItems(4, true),
    current: 1,
    orientation: "horizontal",
    size: "medium",
  },
  argTypes: {
    items: { control: "object" },
    current: { control: { type: "number", min: 0 } },
    orientation: { control: "inline-radio", options: STEPPER_ORIENTATIONS },
    size: { control: "inline-radio", options: STEPPER_SIZES },
  },
};

export const Default = {};

// The design's four sheets: each orientation, without and with a subtitle.
export const Orientations = {
  render: function (args) {
    return (
      <Flex vertical gap="large">
        {STEPPER_ORIENTATIONS.map(function (orientation) {
          return [false, true].map(function (withSubtitle) {
            const label = `${orientation}${withSubtitle ? " with subtitle" : ""}`;
            return (
              <Flex key={label} vertical gap="small">
                <small className={CAPTION_CLASS}>{label}</small>
                <Stepper {...args} orientation={orientation} items={buildItems(4, withSubtitle)} />
              </Flex>
            );
          });
        })}
      </Flex>
    );
  },
};

export const WithIcons = {
  args: {
    items: buildItems(4, true, true),
  },
};

// A letter in the circle instead of the number.
export const WithLetters = {
  args: {
    items: buildItems(4, true).map(function (item, index) {
      return { ...item, icon: LETTERS[index] };
    }),
  },
};

export const Sizes = {
  render: function (args) {
    return (
      <Flex vertical gap="large">
        {STEPPER_SIZES.map(function (size) {
          return (
            <Flex key={size} vertical gap="small">
              <small className={CAPTION_CLASS}>{size}</small>
              <Stepper {...args} size={size} />
              <Stepper {...args} size={size} items={buildItems(4, true, true)} />
            </Flex>
          );
        })}
      </Flex>
    );
  },
};

// Click a step to make it the current one: antd's own `onChange`.
export const Clickable = {
  render: function (args) {
    const [current, setCurrent] = useState(args.current);
    return <Stepper {...args} current={current} onChange={setCurrent} />;
  },
};
