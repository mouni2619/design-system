import { useState } from "react";
import { Star } from "lucide-react";

import { Card } from "@components/Card/Card";

// Icon sits at the title's size, matching OffCanvas's demo icon-sizing note.
const DEMO_ICON_SIZE = 14;

function CardDemo(args) {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return <Card {...args} onClose={() => setVisible(false)} />;
}

export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    title: "Title",
    closable: true,
    footer: "Footer",
    children: "Body",
  },
  argTypes: {
    icon: {
      control: false,
      table: { type: { summary: "ReactNode, e.g. <Star size={14} />" } },
    },
    onClose: { control: false, table: { disable: true } },
  },
  render: function (args) {
    return <CardDemo {...args} />;
  },
};

export const Default = {};

export const SplitFooter = {
  args: { footerExtra: "Footer" },
};

export const WithoutFooter = {
  args: { footer: null },
};

export const WithIcon = {
  args: { icon: <Star size={DEMO_ICON_SIZE} /> },
};

export const Gallery = {
  render: function () {
    const footers = [{ footer: "Footer" }, { footer: "Footer", footerExtra: "Footer" }, {}];
    const icons = [null, <Star key="icon" size={DEMO_ICON_SIZE} />];

    return (
      <div className="d-grid gap-4">
        {icons.map(function (icon, iconIndex) {
          return footers.map(function (variant, footerIndex) {
            return (
              <Card
                key={`${iconIndex}-${footerIndex}`}
                title="Title"
                icon={icon}
                closable
                footer={variant.footer}
                footerExtra={variant.footerExtra}
              >
                Body
              </Card>
            );
          });
        })}
      </div>
    );
  },
};
