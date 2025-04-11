import React, { useCallback } from 'react'
import { Table, Modal, message, Image } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { DeleteIcon, EditIcon } from '@/components/icon';
// import Image from 'next/image';
// ICON LIST
import Hotline from '@/public/images/Hotline.svg'
import Traffic from '@/public/images/Traffic.svg'
import Facebook from '@/public/images/Facebook.svg'
import GECC from '@/public/images/GECC.svg'
import WWW from '@/public/images/WWW.svg'
import WWW2 from '@/public/images/WWW2.svg'
import Book from '@/public/images/Book.svg'
import WWW3 from '@/public/images/WWW3.svg'
import useDeleteAPI from '@/utils/hooks/api/useDeleteAPI';
import usePostAPI from '@/utils/hooks/api/usePostAPI';

import config from '@/config'

const TableManageInformation = (props) => {
  const { setOpen, data, onReload, openModal, loading } = props
  const [apiPost, loadingPost] = usePostAPI()

  const handlerDelete = useCallback(async (mas_id) => {
    const response = await apiPost(`/api/v1/source_type/delete_sourcetype/${mas_id}`, {}, undefined, false, {
    })
    if (response?.success) {
      message.success('ลบข้อมูลสำเร็จ')
      onReload()
      Modal.destroyAll()
    } else {
      message.error('ไม่สามารถลบข้อมูลได้')
      Modal.destroyAll()
    }
  }, [apiPost, onReload])

  const openConfirmDelete = useCallback((data) => {
    Modal.confirm({
      title: 'ยืนยันการลบข้อมูล',
      icon: <ExclamationCircleOutlined />,
      content: 'ท่านต้องการลบข้อมูลแหล่งที่มาใช่หรือไม่',
      okText: 'ยืนยัน',
      cancelText: 'ยกเลิก',
      onOk: () => handlerDelete(data.mas_id),
      okButtonProps: {
        loading: loadingPost
      },
      // onOk: () => {
      //   message.success('ลบข้อมูลสำเร็จ')
      //   Modal.destroyAll()
      // },
      onCancel: () => {
        Modal.destroyAll()
      },
    })
  }, [handlerDelete, loadingPost])

  const ICON_LIST = {
    'Hotline': Hotline,
    'Traffic': Traffic,
    'Facebook': Facebook,
    'GECC': GECC,
    'WWW': WWW,
    'WWW2': WWW2,
    'Book': Book,
    'WWW3': WWW3,
    // Add other icons here...
  };

  const columns = [
    {
      key: "logo",
      dataIndex: "logo",
      width: 50,
      render: (item) => {
        return (
          <figure className='relative overflow-hidden w-20 h-20 block m-auto'>
            <Image
              src={config.source_type_image + '/' + item}
              alt='logo-img'
              width={'100%'}
              height={'100%'}
              className='!object-cover !object-center'
              fallback='data:image/png;base64,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'
            />
          </figure>
        )
      }
    },
    {
      title: "แหล่งที่มาข้อมูล",
      key: "mas_name",
      dataIndex: "mas_name",
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
              onClick={() => openModal(true, record)}

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
        dataSource={data.overview.data || []}
        setOpen={setOpen}
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

export default React.memo(TableManageInformation)
