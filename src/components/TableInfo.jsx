import { Table } from "antd";
const columns = [
  {
    dataIndex: "name",
    key: "name",
  },
  {
    dataIndex: "description",
    key: "description",
  },
];
const TableInfo = ({ data }) => (
  <Table
    showHeader={false} //убрала шапку
    pagination={false} //убрала внизу вывод по страницам
    columns={columns}
    dataSource={data}
  />
);
export default TableInfo;
