import { LINK_SIZES } from "../constants";
import { Link } from "./Link";

const ROW_CLASS = "d-flex align-items-center gap-5";

export default {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  args: {
    children: "Button",
    size: "medium",
    disabled: false,
    href: "#",
  },
  argTypes: {
    size: { control: "inline-radio", options: LINK_SIZES },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};

export const Default = {};

// States vs Sizes Matrix (Figma Layout Reference)
export const Matrix = {
  render: function (args) {
    const states = [
      { label: "Default", props: { underline: true } },
      { label: "Hover", props: { underline: false } },
      { label: "Onclick", props: { underline: false } },
      { label: "Active", props: { underline: false } },
      { label: "Disable", props: { disabled: true, underline: false } },
    ];

    return (
      <div className="d-flex flex-column gap-3">
        {states.map(({ label, props }) => (
          <div key={label} className="row align-items-center my-1">
            <div className="col-2">
              <span className="caption text-secondary">{label}</span>
            </div>
            <div className="col ps-4">
              <div className={ROW_CLASS}>
                {LINK_SIZES.map((size) => (
                  <Link key={size} {...args} {...props} size={size}>
                    {args.children || "Button"}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  },
};