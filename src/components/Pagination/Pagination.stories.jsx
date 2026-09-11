import { Flex } from "antd";
import { useState } from "react";

import { Pagination } from "@components/Pagination/Pagination";
import { DEFAULT_PAGE_SIZE_OPTIONS } from "@components/constants";

const CAPTION_CLASS = "caption text-secondary";

// Drive the controls and the grids below. The component reads each value as
// a literal, so these lists exist only for the story.
const PAGINATION_VARIANTS = ["icon", "text", "simple"];
const PAGINATION_SIZES = ["small", "medium", "large"];

// 20 pages at the default page size — enough for both ellipses to appear.
const DEMO_TOTAL = 200;

// Small enough to fit on one row, so the page list shows without ellipses.
const SHORT_TOTAL = 40;

function LabelledRow({ label = "", children = null }) {
  return (
    <Flex vertical gap="small">
      <small className={CAPTION_CLASS}>{label}</small>
      {children}
    </Flex>
  );
}

export default {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: {
    total: DEMO_TOTAL,
    variant: "icon",
    size: "medium",
    showSizeChanger: true,
    showQuickJumper: true,
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: PAGINATION_VARIANTS,
      description:
        "`icon` and `text` draw the full page list, differing only in chevrons vs words. `simple` drops the list for a range readout and two arrows.",
    },
    size: { control: "inline-radio", options: PAGINATION_SIZES },
    total: {
      control: { type: "number", min: 0 },
      description: "Total number of results — not pages.",
    },
    pageSizeOptions: { control: "object" },
    showSizeChanger: { description: "Ignored by the `simple` variant." },
    showQuickJumper: { description: "Ignored by the `simple` variant." },
    current: {
      control: false,
      description: "Pass with `onChange` to control the component. Omit to let it track its own page.",
    },
    pageSize: {
      control: false,
      description: "Pass with `onShowSizeChange` to control the page size.",
    },
    onChange: { control: false, table: { type: { summary: "(page, pageSize) => void" } } },
    onShowSizeChange: { control: false, table: { type: { summary: "(page, pageSize) => void" } } },
  },
};

export const Default = {};

export const Variants = {
  render: function (args) {
    return (
      <Flex vertical gap="large">
        {PAGINATION_VARIANTS.map(function (variant) {
          return (
            <LabelledRow key={variant} label={variant}>
              <Pagination {...args} variant={variant} />
            </LabelledRow>
          );
        })}
      </Flex>
    );
  },
};

export const Sizes = {
  render: function (args) {
    return (
      <Flex vertical gap="large">
        {PAGINATION_SIZES.map(function (size) {
          return (
            <LabelledRow key={size} label={size}>
              <Pagination {...args} size={size} />
            </LabelledRow>
          );
        })}
      </Flex>
    );
  },
};

/** Few enough pages that the whole list fits, so neither ellipsis appears. */
export const WithoutEllipsis = {
  args: { total: SHORT_TOTAL },
};

/** The page list on its own, with the size changer and jumper turned off. */
export const ListOnly = {
  args: { showSizeChanger: false, showQuickJumper: false },
};

export const Disabled = {
  args: { disabled: true },
};

function ControlledDemo() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE_OPTIONS[0]);

  function handleChange(nextPage, nextPageSize) {
    setPage(nextPage);
    setPageSize(nextPageSize);
  }

  return (
    <LabelledRow label={`page ${page} · ${pageSize} per page`}>
      <Pagination total={DEMO_TOTAL} current={page} pageSize={pageSize} onChange={handleChange} />
    </LabelledRow>
  );
}

/** `current` and `pageSize` given, so the parent owns the state. */
export const Controlled = {
  render: function () {
    return <ControlledDemo />;
  },
};
