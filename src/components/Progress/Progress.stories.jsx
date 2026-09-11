import { Flex } from "antd";

import { Progress } from "@components/Progress/Progress";
import { DEFAULT_PROGRESS_HEIGHT, PROGRESS_STATUSES } from "@components/constants";

const CAPTION_CLASS = "caption text-secondary";

// The bar fills its container, so every story needs one to fill.
const TRACK_CLASS = "w-75";

// The percentage the design export is drawn at.
const DEMO_PERCENT = 65;

// The four states from the design, written as the two props that produce them.
const PROGRESS_STATES = [
  { label: "percent on the bar", props: { showInfo: true } },
  { label: "no percent", props: { showInfo: false } },
  { label: "striped", props: { showInfo: false, striped: true } },
  { label: "striped, percent on the bar", props: { showInfo: true, striped: true } },
];

const STATUS_NAMES = Object.keys(PROGRESS_STATUSES);

// Low percentages have nowhere to put the label, high ones round the cap off
// against the end of the rail.
const PERCENT_STEPS = [0, 25, 65, 100];

function LabelledRow({ label = "", children = null }) {
  return (
    <Flex vertical gap="small">
      <small className={CAPTION_CLASS}>{label}</small>
      {children}
    </Flex>
  );
}

export default {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  args: {
    percent: DEMO_PERCENT,
    status: "primary",
    height: DEFAULT_PROGRESS_HEIGHT,
    showInfo: true,
    striped: false,
  },
  argTypes: {
    percent: { control: { type: "range", min: 0, max: 100, step: 1 } },
    status: { control: "inline-radio", options: STATUS_NAMES },
    height: {
      control: { type: "number", min: 4, step: 2 },
      description: "Bar height in px. The percent sits inside the fill, so going much below the default leaves it no room.",
    },
    showInfo: {
      control: "boolean",
      description: "Shows the percent inside the filled track.",
    },
    striped: {
      control: "boolean",
      description: "Lays bands of the status' lighter ramp step over the fill.",
    },
    format: {
      control: false,
      description: "Defaults to `65 %`, the spacing the design uses.",
      table: { type: { summary: "(percent, successPercent) => ReactNode" } },
    },
  },
  render: function (args) {
    return (
      <Flex className={TRACK_CLASS}>
        <Progress {...args} />
      </Flex>
    );
  },
};

export const Default = {};

export const States = {
  render: function (args) {
    return (
      <Flex vertical gap="large" className={TRACK_CLASS}>
        {PROGRESS_STATES.map(function (state) {
          return (
            <LabelledRow key={state.label} label={state.label}>
              <Progress {...args} {...state.props} />
            </LabelledRow>
          );
        })}
      </Flex>
    );
  },
};

export const Statuses = {
  render: function (args) {
    return (
      <Flex vertical gap="large" className={TRACK_CLASS}>
        {STATUS_NAMES.map(function (status) {
          return (
            <LabelledRow key={status} label={status}>
              <Progress {...args} status={status} />
            </LabelledRow>
          );
        })}
      </Flex>
    );
  },
};

/** Every status in every state — the grid the design export is drawn as. */
export const AllStates = {
  render: function (args) {
    return (
      <Flex gap="large" wrap>
        {PROGRESS_STATES.map(function (state) {
          return (
            <Flex key={state.label} vertical gap="large" className="flex-grow-1">
              <small className={CAPTION_CLASS}>{state.label}</small>
              {STATUS_NAMES.map(function (status) {
                return <Progress key={status} {...args} {...state.props} status={status} />;
              })}
            </Flex>
          );
        })}
      </Flex>
    );
  },
};

export const Percentages = {
  render: function (args) {
    return (
      <Flex vertical gap="large" className={TRACK_CLASS}>
        {PERCENT_STEPS.map(function (percent) {
          return (
            <LabelledRow key={percent} label={`${percent}%`}>
              <Progress {...args} percent={percent} />
            </LabelledRow>
          );
        })}
      </Flex>
    );
  },
};
