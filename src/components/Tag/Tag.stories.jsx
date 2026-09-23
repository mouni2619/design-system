import { useState } from "react";
import { Tag as TagIcon, XCircle } from "lucide-react";

import { TAG_SIZES, TAG_TYPES, TAG_VARIANTS } from "@components/Tag/constants";
import { Tag } from "@components/Tag/Tag";

const CAPTION_CLASS = "caption text-secondary";
const ROW_CLASS = "d-flex align-items-center gap-3 flex-wrap";

const TYPES = Object.keys(TAG_TYPES);
const VARIANTS = Object.keys(TAG_VARIANTS);

const DEMO_ICON_SIZE = 12;

function LabelledRow({ label = "", children = null }) {
  return (
    <div className="row align-items-center my-2">
      <div className="col-2">
        <small className={CAPTION_CLASS}>{label}</small>
      </div>
      <div className="col ps-4">
        <div className={ROW_CLASS}>{children}</div>
      </div>
    </div>
  );
}

export default {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: {
    children: "Tag",
    type: "primary",
    variant: "filled-dark",
    size: "medium",
    closable: false,
  },
  argTypes: {
    type: { control: "select", options: TYPES },
    variant: { control: "select", options: VARIANTS },
    size: { control: "inline-radio", options: TAG_SIZES },
    icon: {
      control: false,
      table: { type: { summary: "ReactNode, e.g. <TagIcon size={12} />" } },
    },
  },
};

export const Default = {};

// Variant vs Type Matrix (Image 1 layout)
export const Types = {
  render: function (args) {
    return (
      <div className="d-grid gap-3">
        {VARIANTS.map((variant) => (
          <LabelledRow key={variant} label={variant}>
            {TYPES.map((type) => (
              <Tag key={type} {...args} type={type} variant={variant}>
                {type}
              </Tag>
            ))}
          </LabelledRow>
        ))}
      </div>
    );
  },
};

// Sizes Row (Image 2 layout)
export const Sizes = {
  render: function (args) {
    return (
      <div className={ROW_CLASS}>
        {TAG_SIZES.map((size) => (
          <Tag key={size} {...args} size={size}>
            {size}
          </Tag>
        ))}
      </div>
    );
  },
};

// Single Tag with Icon (Controls తో Type/Variant/Size మార్చుకోవచ్చు)
// Single Tag with both Prefix Icon & Close Icon
export const WithIcon = {
  render: function (args) {
    const [visible, setVisible] = useState(true);

    if (!visible) {
      return (
        <button 
          className="btn btn-sm btn-link p-0 text-decoration-none" 
          onClick={() => setVisible(true)}
        >
          Reset Tag
        </button>
      );
    }

    return (
      <div className={ROW_CLASS}>
        <Tag
          {...args}
          icon={<TagIcon size={12} />}
          closable
          onClose={() => setVisible(false)}
        >
          {args.children || "Tag"}
        </Tag>
      </div>
    );
  },
};

// Single Closable Tag (Controls తో Type/Variant/Size మార్చుకోవచ్చు)
export const Closable = {
  render: function (args) {
    const [visible, setVisible] = useState(true);

    if (!visible) {
      return (
        <button 
          className="btn btn-sm btn-link p-0 text-decoration-none" 
          onClick={() => setVisible(true)}
        >
          Reset Tag
        </button>
      );
    }

    return (
      <div className={ROW_CLASS}>
        <Tag 
          {...args} 
          closable 
          onClose={() => setVisible(false)}
        >
          {args.children || "Tag"}
        </Tag>
      </div>
    );
  },
};