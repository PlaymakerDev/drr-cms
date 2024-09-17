import React, { useCallback, useState } from "react";
import { Radio, Table, ConfigProvider } from "antd";
import 'antd/dist/reset.css';

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
      username: "adithep_t",
      name: "นายอดิเทพ ตีระมาศวณิช",
    },
    {
      key: '3',
      username: "aekkarin_w",
      name: "นายเอกธริณท์ กระจ่างศิวาลัย",
    },
    {
      key: '4',
      username: "adithep_t",
      name: "นายอดิเทพ ตีระมาศวณิช",
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
      width: 100
    },
  ];

  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
        scroll={{ x: 500 }}
        rowSelection={{
          type: 'radio'
        }}
        onChange={(selectedRowKeys, selectedRows) => onTableChange(selectedRowKeys, selectedRows)}
      />
    </>
  );
};

export default React.memo(TableUser);
