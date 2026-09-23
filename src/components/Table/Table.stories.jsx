import { MoreVertical } from "lucide-react";

import { Table } from "@components/Table/Table";

const COLUMN_COUNT = 8;
const ROW_COUNT = 8;
const DEMO_ICON_SIZE = 14;

const COLUMN_INDEXES = Array.from({ length: COLUMN_COUNT }, (_, index) => index);

function headerWithAction(label) {
  return (
    <span className="d-flex align-items-center justify-content-between gap-2">
      {label}
      <MoreVertical size={DEMO_ICON_SIZE} />
    </span>
  );
}

function createColumns(withActions = false) {
  return COLUMN_INDEXES.map(function (index) {
    return {
      title: withActions ? headerWithAction("Header") : "Header",
      dataIndex: `col${index}`,
      key: `col${index}`,
    };
  });
}

const ACTION_COLUMNS = createColumns(true);
const PLAIN_COLUMNS = createColumns();
const SELECTION_COLUMNS = PLAIN_COLUMNS.slice(0, 7);

const DATA_SOURCE = Array.from({ length: ROW_COUNT }, function (_, rowIndex) {
  return COLUMN_INDEXES.reduce(
    (record, colIndex) => ({
      ...record,
      [`col${colIndex}`]: "Header",
    }),
    { key: rowIndex },
  );
});

const ROW_SELECTION = {
  type: "checkbox",
  align: "center",
  columnWidth: "12.5%",
};

export default {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  args: {
    columns: ACTION_COLUMNS,
    dataSource: DATA_SOURCE,
  },
  argTypes: {
    selectionPosition: {
      control: "inline-radio",
      options: ["start", "end"],
    },
    columns: { control: false },
    dataSource: { control: false },
    rowSelection: { control: false },
  },
};

export const Default = {};

export const LeadingSelection = {
  args: {
    columns: SELECTION_COLUMNS,
    rowSelection: ROW_SELECTION,
    selectionPosition: "start",
  },
};

export const Plain = {
  args: {
    columns: PLAIN_COLUMNS,
  },
};

export const TrailingSelection = {
  args: {
    columns: SELECTION_COLUMNS,
    rowSelection: ROW_SELECTION,
    selectionPosition: "end",
  },
};
