import React from 'react';
import { Table } from "antd";
import { EditIcon } from "@/components/icon";
import DeleteConfirm from './modal/DeleteConfirm';
import Image from 'next/image';

import Hotline from '@/public/images/Hotline.svg'
import Traffic from '@/public/images/Traffic.svg'
import Facebook from '@/public/images/Facebook.svg'
import GECC from '@/public/images/GECC.svg'
import WWW from '@/public/images/WWW.svg'
import WWW2 from '@/public/images/WWW2.svg'
import Book from '@/public/images/Book.svg'
import WWW3 from '@/public/images/WWW3.svg'
import EditComplaint from './modal/EditComplaint';

const TableResources = (props) => {
  const { } = props;


  const iconMap = {
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
      icon: 'Hotline',
      Locate: "สายด่วน 1146",
    },
    {
      key: '2',
      icon: 'Traffic',
      Locate: "Traffic Fondue",
    },
    {
      key: '3',
      icon: 'Facebook',
      Locate: "Facebook",
    },
    {
      key: '4',
      icon: 'GECC',
      Locate: "ศูนย์ราชการสะดวก",
    },
    {
      key: '5',
      icon: 'WWW',
      Locate: "ศูนย์ราชการสะดวก",
    },
    {
      key: '6',
      icon: 'WWW2',
      Locate: "เว็ปไซต์สำนักงานปลัด สำนักนายกรัฐมนตรี",
    },
    {
      key: '7',
      icon: 'Book',
      Locate: "หนังสือภายนอก",
    },
    {
      key: '8',
      icon: 'WWW3',
      Locate: "แหล่งที่มา xxxxx",
    }
  ];

  const columns = [
    {
      title: "",
      key: "icon",
      dataIndex: "icon",
      width: 70,
      render: (icon) => (
        // Check if the icon exists in the map and render the image
        iconMap[icon] ? (
          <div className='flex item-center justify-center'>
            <Image
            src={iconMap[icon]}
            alt={icon}
            width={50}
            height={50}
          />
          </div>
          
        ) : (
          <p>No image</p>
        )
      )
    },
    {
      title: "แหล่งที่มาข้อมูล",
      key: "Locate",
      dataIndex: "Locate",
      width: 500,
    },
    {
      title: '',
      key: 'action',
      dataIndex: 'action',
      align: 'center',
      width: 100,
      render: (text, record) => (
        <div className='inline-flex flex-wrap items-center gap-5'>
          <EditComplaint icon={record.icon} locate={record.Locate} />
          <DeleteConfirm />
        </div>
      )
    },
  ];

  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
        scroll={{ x: 1600 }}
      />
    </>
  );
};

export default React.memo(TableResources);
