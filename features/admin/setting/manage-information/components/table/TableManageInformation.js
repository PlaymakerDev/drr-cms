import React, { useCallback } from 'react'
import { Table, Modal, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { DeleteIcon, EditIcon } from '@/components/icon';
import Image from 'next/image';
// ICON LIST
import Hotline from '@/public/images/Hotline.svg'
import Traffic from '@/public/images/Traffic.svg'
import Facebook from '@/public/images/Facebook.svg'
import GECC from '@/public/images/GECC.svg'
import WWW from '@/public/images/WWW.svg'
import WWW2 from '@/public/images/WWW2.svg'
import Book from '@/public/images/Book.svg'
import WWW3 from '@/public/images/WWW3.svg'

const TableManageInformation = (props) => {
  const { setOpen } = props

  const openConfirmDelete = useCallback(() => {
    Modal.confirm({
      title: 'ยืนยันการลบข้อมูล',
      icon: <ExclamationCircleOutlined />,
      content: 'ท่านต้องการลบรายการเรื่องร้องเรียน',
      okText: 'ยืนยัน',
      cancelText: 'ยกเลิก',
      onOk: () => {
        message.success('ลบข้อมูลสำเร็จ')
        Modal.destroyAll()
      },
      onCancel: () => {
        Modal.destroyAll()
      },
    })
  }, [])

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

  const data = [
    {
      key: '1',
      image_src: 'Hotline',
      image_alt: 'hotline-icon',
      name: "สายด่วน 1146",
    },
    {
      key: '2',
      image_src: 'Traffic',
      image_alt: 'traffic-icon',
      name: "Traffic Fondue",
    },
    {
      key: '3',
      image_src: 'Facebook',
      image_alt: 'facebook-icon',
      name: "Facebook",
    },
    {
      key: '4',
      image_src: 'GECC',
      image_alt: 'gecc-icon',
      name: "ศูนย์ราชการสะดวก",
    },
    {
      key: '5',
      image_src: 'WWW',
      image_alt: 'www-icon',
      name: "ศูนย์ราชการสะดวก",
    },
    {
      key: '6',
      image_src: 'WWW2',
      image_alt: 'www2-icon',
      name: "เว็ปไซต์สำนักงานปลัด สำนักนายกรัฐมนตรี",
    },
    {
      key: '7',
      image_src: 'Book',
      image_alt: 'book-icon',
      name: "หนังสือภายนอก",
    },
    {
      key: '8',
      image_src: 'WWW3',
      image_alt: 'WWW3-icon',
      name: "แหล่งที่มา xxxxx",
    }
  ];

  const columns = [
    {
      key: "image_src",
      dataIndex: "image_src",
      width: 50,
      render: (item, record) => {
        if (item) {
          return (
            <Image
              src={ICON_LIST[item]}
              alt={record.image_alt}
              width={50}
              height={50}
              className='!block !m-auto'
            />
          )
        }
        return '-'
      }
    },
    {
      title: "แหล่งที่มาข้อมูล",
      key: "name",
      dataIndex: "name",
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
              onClick={() => openConfirmDelete()}
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
        dataSource={data || []}
        // loading={loading}
        pagination={{
          defaultCurrent: 1,
          defaultPageSize: 100,
          // current: page,
          // pageSize: perPage,
          // total: Number(total) || 0,
          // onChange: onChange,
          showSizeChanger: false,
          // position: ['bottomCenter']
        }}
        scroll={{ x: 1600 }}
      />
    </div>
  )
}

export default React.memo(TableManageInformation)
