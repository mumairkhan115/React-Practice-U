import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

export interface DataListProps<T extends object> {
  columns: TableColumnsType<T>;
  dataSource: T[];
  rowKey: TableProps<T>['rowKey'];
  loading?: boolean;
  pagination?: TableProps<T>['pagination'];
  scrollX?: number | string;
  scrollY?: number;
  bordered?: boolean;
  size?: TableProps<T>['size'];
  className?: string;
  onRow?: TableProps<T>['onRow'];
}

/** Reusable Ant Design table with horizontal scrolling enabled by default. */
export default function DataList<T extends object>({
  columns,
  dataSource,
  rowKey,
  loading = false,
  pagination = {
    pageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '50', '100'],
  },
  scrollX = 'max-content',
  scrollY = 600,
  bordered = true,
  size = 'middle',
  className,
  onRow,
}: DataListProps<T>) {
  return (
    <Table<T>
      className={className}
      columns={columns}
      dataSource={dataSource}
      rowKey={rowKey}
      loading={loading}
      pagination={pagination}
      bordered={bordered}
      size={size}
      scroll={{ x: scrollX, y: scrollY }}
      sticky
      onRow={onRow}
    />
  );
}
