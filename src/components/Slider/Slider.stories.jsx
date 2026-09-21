import { Flex } from "antd";

import { Slider } from "@components/Slider/Slider";

const CAPTION_CLASS = "caption text-secondary";

// The design's six columns: from five parts down to none, on a 0–100 or 0–24 scale.
const PARTITION_COLUMNS = [
  { partitions: 5, max: 100 },
  { partitions: 4, max: 100 },
  { partitions: 3, max: 24 },
  { partitions: 2, max: 24 },
  { partitions: 1, max: 24 },
  { partitions: 0, max: 24 },
];

// The design's four rows.
const ROWS = [
  { label: "range", range: true, disabled: false },
  { label: "single", range: false, disabled: false },
  { label: "range, disabled", range: true, disabled: true },
  { label: "single, disabled", range: false, disabled: true },
];

/** Where the design parks the handle: a touch past halfway. */
function sampleValue(max, range) {
  const value = Math.round(max * 0.55);
  return range ? [0, value] : value;
}

export default {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  args: {
    min: 0,
    max: 100,
    partitions: 5,
    showLabels: false,
    disabled: false,
    defaultValue: 50,
  },
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    partitions: { control: { type: "number", min: 0 } },
    showLabels: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export const Default = {};

export const Range = {
  args: {
    range: true,
    defaultValue: [0, 50],
  },
};

export const WithLabels = {
  args: {
    showLabels: true,
  },
};

export const Disabled = {
  args: {
    showLabels: true,
    disabled: true,
  },
};

// The design sheet: without and with labels, each row across every partition count.
export const AllVariants = {
  render: function () {
    return (
      <Flex vertical gap="large">
        {[false, true].map(function (showLabels) {
          return (
            <Flex key={String(showLabels)} vertical gap="middle">
              <small className={CAPTION_CLASS}>{showLabels ? "with labels" : "without labels"}</small>
              {ROWS.map(function (row) {
                return (
                  <Flex key={row.label} vertical gap="small">
                    <small className={CAPTION_CLASS}>{row.label}</small>
                    <Flex gap="large">
                      {PARTITION_COLUMNS.map(function (column) {
                        return (
                          <div key={column.partitions} className="flex-grow-1">
                            <Slider
                              range={row.range}
                              disabled={row.disabled}
                              showLabels={showLabels}
                              partitions={column.partitions}
                              max={column.max}
                              defaultValue={sampleValue(column.max, row.range)}
                            />
                          </div>
                        );
                      })}
                    </Flex>
                  </Flex>
                );
              })}
            </Flex>
          );
        })}
      </Flex>
    );
  },
};
