import { Avatar } from "@components/Avatar/Avatar";
import {
  AVATAR_SIZES,
  AVATAR_STATUSES,
  AVATAR_VARIANTS,
} from "@components/Avatar/constants";

const DISPLAY_SIZES = [...AVATAR_SIZES].reverse();
const ROW_CLASS = "d-flex align-items-center gap-4 flex-wrap";

export default {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    children: "SE",
    variant: "primary-filled",
    size: "md",
    status: null,
  },
  argTypes: {
    variant: { control: "select", options: AVATAR_VARIANTS },
    size: { control: "inline-radio", options: AVATAR_SIZES },
    status: { control: "select", options: [null, ...AVATAR_STATUSES] },
  },
};

export const Default = {};

export const Types = {
  render: function (args) {
    return (
      <div className="d-grid gap-4">
        {AVATAR_VARIANTS.map(function (variant) {
          return (
            <div key={variant} className={ROW_CLASS}>
              <Avatar {...args} variant={variant} />
              <span>{variant}</span>
            </div>
          );
        })}
      </div>
    );
  },
};

export const Status = {
  render: function (args) {
    return (
      <div className="d-grid gap-4">
        {AVATAR_STATUSES.map(function (status) {
          return (
            <div key={status} className={ROW_CLASS}>
              {DISPLAY_SIZES.map(function (size) {
                return <Avatar key={size} {...args} size={size} status={status} />;
              })}
            </div>
          );
        })}
      </div>
    );
  },
};

export const Sizes = {
  render: function (args) {
    return (
      <div className={ROW_CLASS}>
        {DISPLAY_SIZES.map(function (size) {
          return <Avatar key={size} {...args} size={size} />;
        })}
      </div>
    );
  },
};
