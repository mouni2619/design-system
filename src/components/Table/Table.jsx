import { Table as AntTable } from "antd";

export function Table({
  columns = [],
  dataSource = [],
  rowSelection = null,
  selectionPosition = "start",
  pagination = false,
  className = "",
  ...rest
}) {
  const activeColumns =
    rowSelection && selectionPosition === "end"
      ? [...columns, AntTable.SELECTION_COLUMN]
      : columns;

  return (
    <AntTable
      columns={activeColumns}
      dataSource={dataSource}
      rowSelection={rowSelection || undefined}
      pagination={pagination}
      className={[
        "border",
        "border-secondary-emp-5",
        "rounded-2",
        "overflow-hidden",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    />
  );
}

export default Table;
