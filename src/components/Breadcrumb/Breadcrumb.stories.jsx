import { Flex } from "antd";
import { House, Star } from "lucide-react";

import { Breadcrumb } from "@components/Breadcrumb/Breadcrumb";

const CAPTION_CLASS = "caption text-secondary";

// What sits between two crumbs: the design's "/" or a chevron.
const BREADCRUMB_SEPARATORS = ["slash", "arrow"];

// The design's sheet: five links deep down to the current page alone.
const MAX_DEPTH = 5;

// The icon each column of the sheet's icon rows carries.
const ICONS = [
  { label: "no icon", icon: null },
  { label: "star", icon: Star },
  { label: "house", icon: House },
];

/** `depth` links followed by the current page, each with the same icon. */
function buildItems(depth, icon = null) {
  const items = [];
  for (let step = 0; step < depth; step += 1) {
    items.push({ title: "Item", href: "#", icon });
  }
  items.push({ title: "Current page", icon });
  return items;
}

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  args: {
    items: buildItems(3),
    separator: "slash",
  },
  argTypes: {
    items: { control: "object" },
    separator: { control: "inline-radio", options: BREADCRUMB_SEPARATORS },
  },
};

export const Default = {};

export const Separators = {
  render: function (args) {
    return (
      <Flex vertical gap="large">
        {BREADCRUMB_SEPARATORS.map(function (separator) {
          return (
            <Flex key={separator} vertical gap="small">
              <small className={CAPTION_CLASS}>{separator}</small>
              <Breadcrumb {...args} separator={separator} />
            </Flex>
          );
        })}
      </Flex>
    );
  },
};

export const WithIcons = {
  args: {
    items: buildItems(3, House),
  },
};

export const AllVariants = {
  render: function (args) {
    const depths = [];
    for (let depth = MAX_DEPTH; depth >= 0; depth -= 1) {
      depths.push(depth);
    }

    return (
      <Flex vertical gap="large">
        {ICONS.map(function (entry) {
          return (
            <Flex key={entry.label} vertical gap="small">
              <small className={CAPTION_CLASS}>{entry.label}</small>
              <Flex gap="large" wrap>
                {BREADCRUMB_SEPARATORS.map(function (separator) {
                  return (
                    <Flex key={separator} vertical gap="middle">
                      {depths.map(function (depth) {
                        return (
                          <Breadcrumb
                            key={depth}
                            {...args}
                            separator={separator}
                            items={buildItems(depth, entry.icon)}
                          />
                        );
                      })}
                    </Flex>
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
