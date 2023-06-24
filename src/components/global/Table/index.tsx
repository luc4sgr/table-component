/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

type Column = {
  title: string;
  render: (record: any) => React.ReactNode;
};

export type TableProps = {
  dataSource: any[];
  columns: Column[];
};
export function Table({ dataSource, columns }: TableProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column, idx) => (
              <th key={idx}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((record, idx) => (
            <tr key={idx}>
              {columns.map((column, idx) => (
                <td key={idx}>{column.render(record)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
