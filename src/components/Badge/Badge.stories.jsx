import { Badge } from "@components/Badge/Badge";
import {
  BADGE_SIZES,
  BADGE_TYPES,
  BADGE_VARIANTS,
} from "@components/Badge/constants";

const ROW_CLASS = "d-flex align-items-center gap-4 flex-wrap";

function VariantMatrix({ args, variant, children = null }) {
  return (
    <div className="d-grid gap-4">
      {BADGE_TYPES.map(function (type) {
        return (
          <div key={type} className={ROW_CLASS}>
            {BADGE_SIZES.map(function (size) {
              return (
                <Badge
                  {...args}
                  key={size}
                  type={type}
                  size={size}
                  variant={variant}
                >
                  {children}
                </Badge>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    type: "primary",
    size: "medium",
    variant: "count",
    count: 1,
  },
  argTypes: {
    type: { control: "select", options: BADGE_TYPES },
    size: { control: "inline-radio", options: BADGE_SIZES },
    variant: { control: "select", options: BADGE_VARIANTS },
    count: { control: "number" },
  },
};

export const Default = {};

export const Dot = {
  render: (args) => <VariantMatrix args={args} variant="dot" />,
};

export const Count = {
  render: (args) => <VariantMatrix args={args} variant="count" />,
};

export const Filled = {
  render: (args) => (
    <VariantMatrix args={args} variant="filled">
      Button
    </VariantMatrix>
  ),
};

export const Outlined = {
  render: (args) => (
    <VariantMatrix args={args} variant="outlined">
      Button
    </VariantMatrix>
  ),
};

export const Subtle = {
  render: (args) => (
    <VariantMatrix args={args} variant="subtle">
      Button
    </VariantMatrix>
  ),
};

export const Sizes = {
  render: function (args) {
    return (
      <div className={ROW_CLASS}>
        {BADGE_SIZES.map(function (size) {
          return <Badge {...args} key={size} size={size} />;
        })}
      </div>
    );
  },
};
