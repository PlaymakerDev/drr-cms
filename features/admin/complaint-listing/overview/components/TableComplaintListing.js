import React, { useState, useMemo, useCallback } from "react";
import { Table, Typography, Badge, Modal, message } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useRouter } from "next/router";
import { DeleteIcon, EditIcon } from "@/components/icon";

const TableComplaintListing = (props) => {
  const { } = props;
  const router = useRouter();

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

  const data = [
    {
      document_number: "",
      notification_date: "12 สิงหาคม 2567",
      data_source: "สายด่วน 1146",
      category: "ร้องเรียน",
      type: "ถนนชำรุด",
      responsible_agency: "ขทช.xxx",
      // status: "รับเรื่อง"
      status: "START"
    },
    {
      document_number: "คค.1246/2567",
      notification_date: "11 สิงหาคม 2567",
      data_source: "Traffic Fondue",
      category: "ร้องเรียน",
      type: "ไฟฟ้าส่องสว่างดับ/ชำรุด/ติดตั้ง",
      responsible_agency: "ขทช.xxx",
      // status: "กำลังดำเนินเรื่อง"
      status: "PROGRESS"

    },
    {
      document_number: "คค.1245/2567",
      notification_date: "10 สิงหาคม 2567",
      data_source: "กรมทางหลวงชนบท",
      category: "ร้องเรียน",
      type: "ถนนชำรุด",
      responsible_agency: "ขทช.xxx",
      // status: "ยุติ"
      status: "END"
    },
    {
      document_number: "",
      notification_date: "12 สิงหาคม 2567",
      data_source: "Facebook",
      category: "ร้องเรียน",
      type: "วัชพืช/ต้นไม้/ขยะ",
      responsible_agency: "ขทช.xxx",
      // status: "รับเรื่อง"
      status: "START"
    },
    {
      document_number: "คค.1243/2567",
      notification_date: "11 สิงหาคม 2567",
      data_source: "Facebook",
      category: "ร้องเรียน",
      type: "ไฟฟ้าส่องสว่าง",
      responsible_agency: "ขทช.xxx",
      // status: "กำลังดำเนินเรื่อง"
      status: "PROGRESS"
    },
    {
      document_number: "คค.1242/2567",
      notification_date: "10 สิงหาคม 2567",
      data_source: "กรมทางหลวงชนบท",
      category: "ขอรับบริการ",
      type: "ไฟฟ้าส่องสว่าง",
      responsible_agency: "ขทช.xxx",
      // status: "ยุติ"
      status: "END"
    },
  ];

  const columns = [
    {
      title: "เลขที่เอกสาร",
      key: "document_number",
      dataIndex: "document_number",
      width: 150,
      render: (item) => {
        if (item) {
          return <Typography.Text className="!text-primary-color !cursor-pointer" underline onClick={() => router.push('')}>{item}</Typography.Text>
        }
        return
      }
    },
    {
      title: "วันที่แจ้ง",
      key: "notification_date",
      dataIndex: "notification_date",
      width: 200,
      render: (item) => {
        if (item) {
          return item
        }
        return '-'
      }
    },
    {
      title: "แหล่งที่มาข้อมูล",
      key: "data_source",
      dataIndex: "data_source",
      width: 200,
      render: (item) => {
        if (item) {
          return item
        }
        return '-'
      }
    },
    {
      title: "หมวดหมู่",
      key: "category",
      dataIndex: "category",
      width: 200,
      render: (item) => {
        if (item) {
          return item
        }
        return '-'
      }
    },
    {
      title: "ประเภท",
      key: "type",
      dataIndex: "type",
      width: 130,
      render: (item) => {
        if (item) {
          return item
        }
        return '-'
      }
    },
    {
      title: "หน่วยงานผู้รับผิดชอบ",
      key: "responsible_agency",
      dataIndex: "responsible_agency",
      width: 200,
      render: (item) => {
        if (item) {
          return item
        }
        return '-'
      }
    },
    {
      title: "สถานะ",
      key: "status",
      dataIndex: "status",
      width: 200,
      render: (item) => {
        const BADGE_CONFIG = {
          "START": {
            text: "รับเรื่อง",
            color: "#ffc90a"
          },
          "PROGRESS": {
            text: "กำลังดำเนินเรื่อง",
            color: "#0075E9"
          },
          "END": {
            text: "ยุติ",
            color: "#43BE6D"
          },
        }
        if (item) {
          return <Badge color={BADGE_CONFIG[item].color} text={BADGE_CONFIG[item].text} />;
        }
      },
    },
    {
      title: '',
      key: 'action',
      dataIndex: 'action',
      align: 'center',
      width: 100,
      render: () => {
        return (
          <div className='inline-flex flex-wrap items-center gap-5'>
            <EditIcon
              className='!cursor-pointer'
              onClick={() => router.push('/admin/complaint-listing/create')}
            />
            <DeleteIcon
              className='!cursor-pointer'
              onClick={() => openConfirmDelete()}
            />
          </div>
        );
      },
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
    </div >
  );
};

export default React.memo(TableComplaintListing);
