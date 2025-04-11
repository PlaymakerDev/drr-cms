import React, { useCallback } from 'react'
import { Table, Modal, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { DeleteIcon, EditIcon } from '@/components/icon';
import usePatchAPI from "@/utils/hooks/api/usePatchAPI";
import useDeleteAPI from '@/utils/hooks/api/useDeleteAPI';
import usePostAPI from '@/utils/hooks/api/usePostAPI';

const TableManagePosition = (props) => {
  const { setOpen, data, loading, onReload } = props
  const [apiPost, loadingPost] = usePostAPI()

  const handlerDelete = useCallback(async (PID) => {
    const response = await apiPost(`/api/v1/tblposition/delete_tblposition/${PID}`, {}, undefined, false) 
    if (response?.success) {
      message.success('ลบข้อมูลสำเร็จ')
      onReload()
      Modal.destroyAll()
    } else {
      message.error('ไม่สามารถลบข้อมูลได้')
      Modal.destroyAll()
    }
  }, [onReload])

  const openConfirmDelete = useCallback((data) => {
    Modal.confirm({
      title: 'ยืนยันการลบข้อมูล',
      icon: <ExclamationCircleOutlined />,
      content: 'ท่านต้องการลบข้อมูลตำแหน่งงานใช่หรือไม่',
      okText: 'ยืนยัน',
      cancelText: 'ยกเลิก',
      onOk: () => handlerDelete(data.PID),
      okButtonProps: {
        loading: loadingPost
      },
      onCancel: () => {
        Modal.destroyAll()
      },
    })
  }, [handlerDelete, loadingPost])



  const data_position = data.position

  const columns = [

    {
      title: "ตำแหน่งงาน",
      key: "PName",
      dataIndex: "PName",
      width: 500,
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
      width: 50,
      render: (item, record) => {
        return (
          <div className='inline-flex flex-wrap items-center gap-5'>
            <EditIcon
              className='!cursor-pointer'
              onClick={() => setOpen({ open: true, info: record })}
            />
            <DeleteIcon
              className='!cursor-pointer !text-[#FF4a4a]'
              onClick={() => openConfirmDelete(record)}
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
        pagination={{
          defaultCurrent: 1,
          defaultPageSize: 10,
          // current: page,
          // pageSize: perPage,
          // total: Number(total) || 0,
          // onChange: onChange,
          showSizeChanger: false,
          // position: ['bottomCenter']
          showSizeChanger: true,
        }}
        scroll={{ x: 1600 }}
      />
    </div>
  )
}

export default React.memo(TableManagePosition)
