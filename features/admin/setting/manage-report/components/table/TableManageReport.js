import React, { useCallback } from 'react'
import { Table, Modal, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { DeleteIcon, EditIcon } from '@/components/icon';
import usePatchAPI from "@/utils/hooks/api/usePatchAPI";
import useDeleteAPI from '@/utils/hooks/api/useDeleteAPI';
import usePostAPI from '@/utils/hooks/api/usePostAPI';

const TableManageReport = (props) => {
  const { setOpen, data, loading, onReload } = props
  const [apiPost, loadingPost] = usePostAPI()

  const data_position = data

  const columns = [
    {
      title: "",
      key: "",
      dataIndex: "",
      width: 20,
    },
    {
      title: "รายงาน",
      key: "reportName",
      dataIndex: "reportName",
      width: 470,
      render: (item) => {
        if (item) {
          return item
        }
        return '-'
      }
    },
    {
      title: "ผู้รับรองรายงาน",
      key: "reportCertificate",
      dataIndex: "reportCertificate",
      width: 300,
      render: (item) => {
        if (item) {
          return item
        }
        return '-'
      }
    },
    {
      title: "ตำแหน่งผู้รับรองรายงาน",
      key: "reportCertificateRole",
      dataIndex: "reportCertificateRole",
      // width: 500,
      render: (item) => {
        if (item) {
          return item
        }
        return '-'
      }
    },
    {
      title: '',
      key: 'action',
      dataIndex: 'action',
      align: 'center',
      width: 200,
      render: (item, record) => {
        return (
          <div className='w-full flex justify-center'>
            <EditIcon
              className='!cursor-pointer'
              onClick={() => setOpen({ open: true, info: record})}
            />
          </div>
        )
      }
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data_position || []}
        loading={loading}
        pagination={false}
        scroll={{ x: 1600 }}
      />
    </div>
  )
}

export default React.memo(TableManageReport)
