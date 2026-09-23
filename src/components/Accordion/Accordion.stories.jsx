import { Star } from "lucide-react";
import { Accordion } from "./Accordion";
import { ACCORDION_VARIANTS } from "@components/Accordion/constants";

const SUBTEXT = "This is accordion explanation of subtext comes here.";

const BASE_ITEMS = [
  { key: "1", title: "Title", content: SUBTEXT },
  { key: "2", title: "Title", content: SUBTEXT },
  { key: "3", title: "Title", content: SUBTEXT },
];

export default {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    variant: "bordered",
    showIcon: false,
    defaultActiveKey: [],
  },
  argTypes: {
    variant: { control: "select", options: ACCORDION_VARIANTS },
    showIcon: { control: "boolean", name: "Show Star Icon" },
    items: { control: false },
  },
  // Dynamically inject/remove icons based on the `showIcon` control toggle
  render: ({ showIcon, ...args }) => {
    const formattedItems = BASE_ITEMS.map((item) => ({
      ...item,
      icon: showIcon ? <Star size={14} /> : null,
    }));

    return <Accordion {...args} items={formattedItems} />;
  },
};

// 1. Interactive Default Story
export const Playground = {};

// 2. Preset: With Icon Active
export const WithIcon = {
  args: {
    showIcon: true,
  },
};

// 3. Preset: Grouped Expanded
export const GroupedExpanded = {
  args: {
    showIcon: true,
    defaultActiveKey: ["2"],
  },
};

// 4. Preset: Separated Expanded
export const SeparatedExpanded = {
  args: {
    variant: "separated",
    showIcon: true,
    defaultActiveKey: ["2"],
  },
};