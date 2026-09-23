import { Tag } from "@components/Tag/Tag";
import { TAG_SIZES, TAG_TYPES, TAG_VARIANTS } from "@components/Tag/constants";

const CAPTION_CLASS = "caption text-secondary";
const ROW_CLASS = "d-flex align-items-center gap-3 flex-wrap";

const TYPES = Object.keys(TAG_TYPES);
const VARIANTS = Object.keys(TAG_VARIANTS);

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

// Storybook Indexing కి ఈ export default అత్యవసరం
export default {
  title: "Components/Chip",
  component: Tag,
  tags: ["autodocs"],
  args: {
    children: "Chip",
    type: "primary",
    variant: "filled-dark",
    size: "medium",
    shape: "pill",
    closable: false,
    disabled: false,
  },
  argTypes: {
    type: { control: "select", options: TYPES },
    variant: { control: "select", options: VARIANTS },
    size: { control: "inline-radio", options: TAG_SIZES },
  },
};

export const Default = {};

export const Disabled = {
  args: { disabled: true },
};

export const Types = {
  render: function (args) {
    return (
      <div className="d-grid gap-3">
        {VARIANTS.map((variant) => (
          <LabelledRow key={variant} label={variant}>
            {TYPES.map((type) => (
              <Tag key={type} {...args} type={type} variant={variant} shape="pill">
                {type}
              </Tag>
            ))}
          </LabelledRow>
        ))}
      </div>
    );
  },
};

export const Sizes = {
  render: function (args) {
    return (
      <div className={ROW_CLASS}>
        {TAG_SIZES.map((size) => (
          <Tag key={size} {...args} size={size} shape="pill">
            {size}
          </Tag>
        ))}
      </div>
    );
  },
};
