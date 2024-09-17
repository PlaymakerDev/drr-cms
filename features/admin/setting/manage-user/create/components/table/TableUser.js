import React, { useCallback } from "react";
import { Table } from "antd";

const TableUser = (props) => {
  const { } = props;
  const onTableChange = useCallback((key, row) => {
    console.log(key, row)
  }, [])

  const data = [
    {
      key: '1',
      username: "adisai_t",
      name: "นายอดิศัย ทองไทย",
    },
    {
      key: '2',
      username: "adisai_t",
      name: "นายอดิศัย ทองไทย",
    },
    {
      key: '3',
      username: "adisai_t",
      name: "นายอดิศัย ทองไทย",
    },
    {
      key: '4',
      username: "adisai_t",
      name: "นายอดิศัย ทองไทย",
    },
  ];

  const columns = [
    {
      title: "Username",
      key: "username",
      dataIndex: "username",
      width: 100
    },
    {
      title: "ชื่อ-นามสกุล",
      key: "name",
      dataIndex: "name",
      width: 200
    },
  ];

  return (
      <Table
        dataSource={data}
        columns={columns}
        scroll={{ x: 500 }}
        pagination={{
          // position: ['bottomCenter']
        }}
        rowSelection={{
          type: 'radio'
        }}
        onChange={(selectedRowKeys, selectedRows) => onTableChange(selectedRowKeys, selectedRows)}
      />
  );
};

export default React.memo(TableUser);
