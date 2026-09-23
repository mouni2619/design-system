import { Alert } from "@components/Alert/Alert";
import { ALERT_TYPES } from "@components/Alert/constants";

const COLUMN_CLASS = "d-flex flex-column gap-3";

export default {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    type: "info",
    message: "Info",
    description: "Hello ! I am Info message",
    showIcon: true,
    hasDescription: true,
  },
  argTypes: {
    type: {
      control: "select",
      options: ALERT_TYPES,
      description: "Alert variant style (info, success, warning, error, light, dark, primary, secondary)",
    },
    showIcon: {
      control: "boolean",
      description: "Toggle icon visibility",
    },
    hasDescription: {
      control: "boolean",
      description: "Toggle description body visibility",
    },
    message: { control: "text" },
    description: { control: "text" },
  },
};

export const Default = {};

export const Types = {
  render: function (args) {
    return (
      <div className={COLUMN_CLASS}>
        {ALERT_TYPES.map(function (type) {
          return <Alert key={type} {...args} type={type} message={type} />;
        })}
      </div>
    );
  },
};

// The four message/description/icon combinations from the reference design.
export const States = {
  render: function (args) {
    return (
      <div className={COLUMN_CLASS}>
        <Alert {...args} showIcon message="Info" description="Hello ! I am Info message" />
        <Alert {...args} showIcon message="Hello ! I am Info message" description={null} />
        <Alert {...args} showIcon={false} message="Info" description="Hello ! I am Info message" />
        <Alert {...args} showIcon={false} message="Hello ! I am Info message" description={null} />
      </div>
    );
  },
};
