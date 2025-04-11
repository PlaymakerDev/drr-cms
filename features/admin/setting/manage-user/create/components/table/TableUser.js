import React, { useCallback, useMemo, useState } from "react";
import { Table } from "antd";
import { useRouter } from "next/router";

const TableUser = (props) => {
  const { data , setPrefill} = props;

  const renderData = useMemo(() => {
    if (data?.message) {
      return []
    }
    const mapData = data?.map((item, index) => {
      return {
        key: index + 1,
        ...item
      }
    })
    return mapData
  }, [data])

  const columns = [
    {
      title: "Username",
      key: "Username",
      dataIndex: "Username",
      width: 100
    },
    {
      title: "ชื่อ-นามสกุล",
      key: "Description",
      dataIndex: "Description",
      width: 200
    },
  ];

  return (
    <Table
      dataSource={data?.message ? [] : renderData}
      columns={columns}
      scroll={{ x: 500 }}
      pagination={{
        // position: ['bottomCenter']
        defaultPageSize: 10,
        showSizeChanger: true,
      }}
      rowSelection={{
        type: 'radio',
        onChange: (key, row) => setPrefill({
          username: row[0]?.Username || '',
          prefix: row[0]?.Prefix || '',
          name: row[0]?.Description || '',
          first_name: row[0]?.FirstName || '',
          last_name: row[0]?.LastName || ''
        })
      }}
    />
  );
};

export default React.memo(TableUser);
