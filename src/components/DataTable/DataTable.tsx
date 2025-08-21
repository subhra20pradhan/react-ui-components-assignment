import { useState } from "react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect,
}: DataTableProps<T>) {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (col: Column<T>) => {
    if (!col.sortable) return;
    let direction: "asc" | "desc" = "asc";
    if (sortConfig?.key === col.dataIndex && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key: col.dataIndex, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;
    const valA = a[key];
    const valB = b[key];
    if (valA < valB) return direction === "asc" ? -1 : 1;
    if (valA > valB) return direction === "asc" ? 1 : -1;
    return 0;
  });

  const toggleRow = (index: number) => {
    const updated = new Set(selected);
    if (updated.has(index)) updated.delete(index);
    else updated.add(index);
    setSelected(updated);
    onRowSelect?.(Array.from(updated).map((i) => sortedData[i]));
  };

  if (loading) return <p className="p-4">Loading...</p>;
  if (!data.length) return <p className="p-4">No data available</p>;

  return (
    <table className="w-full border border-gray-200 rounded-lg">
      <thead>
        <tr>
          {selectable && <th className="p-2">Select</th>}
          {columns.map((col) => (
            <th
              key={col.key}
              className="p-2 cursor-pointer"
              onClick={() => handleSort(col)}
            >
              {col.title} {col.sortable && "⇅"}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, i) => (
          <tr key={i} className="border-t">
            {selectable && (
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={selected.has(i)}
                  onChange={() => toggleRow(i)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={col.key} className="p-2">
                {String(row[col.dataIndex])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
