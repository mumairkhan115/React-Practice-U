import { Card } from 'antd';
import DataList from '../../components/DataList/DataList';
import { columns, dataSource } from './table/columns';

function PracticePage() {
  return (
    <Card title="Detailed Training Items">
      <DataList
        columns={columns}
        dataSource={dataSource}
        rowKey="key"
      />
    </Card>
  );
}

export default PracticePage;