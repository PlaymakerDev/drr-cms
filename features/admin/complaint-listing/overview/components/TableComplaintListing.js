import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Table, Typography, Badge, Modal, message } from "antd";
import { ExclamationCircleOutlined, FilePdfOutlined, YoutubeOutlined } from '@ant-design/icons';
import { useRouter } from "next/router";
import { DeleteIcon, EditIcon } from "@/components/icon";
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import config from "@/config";

dayjs.extend(buddhistEra)
dayjs.extend(customParseFormat);
import { BADGE_CONFIG } from "@/utils/constant";
import usePostAPI from "@/utils/hooks/api/usePostAPI";
import axios from "axios";
import { useSelector } from "react-redux";

dayjs.extend(customParseFormat);

const TableComplaintListing = (props) => {
  const { data, loading, page, perPage, total, onChange, refreshContent } = props;
  const router = useRouter()
  const [apiPost, loadingPost] = usePostAPI()

  const user = {
    token: useSelector(state => state.userAuthen.token)
  }

  const handlerDelete = useCallback(async (id) => {
    const response = await apiPost(`/api/v1/complaints/soft-delete/${id}`, {}, undefined, false)
    if (response?.message === "Complaint soft deleted successfully") {
      message.success('ลบข้อมูลสำเร็จ')
      refreshContent()
      Modal.destroyAll()
    } else {
      message.error('ไม่สามารถลบข้อมูลได้')
      Modal.destroyAll()
    }
  }, [apiPost, refreshContent])

  const handleDownload = useCallback(async (id) => {
    try {
      const response = await axios.get(`${config.hostBackend}/api/v1/report/export?cid=${id}`, {
        headers: {
          "Authorization": `Bearer ${user.token}`
        },
        responseType: 'blob'
      }
      )
      const fileDownload = document.createElement('a')
      const blobURL = window.URL.createObjectURL(new Blob([response?.data]))
      fileDownload.setAttribute('href', blobURL)
      fileDownload.setAttribute('download', 'รายงานแบบรับเรียนร้องเรียน.pdf')
      fileDownload.click()
    } catch {
      message.error('Download Failed')
    }

  }, [])


  const openConfirmDelete = useCallback((record) => {
    Modal.confirm({
      title: 'ยืนยันการลบข้อมูล',
      icon: <ExclamationCircleOutlined />,
      content: 'ท่านต้องการลบรายการเรื่องร้องเรียนใช่หรือไม่',
      okText: 'ยืนยัน',
      cancelText: 'ยกเลิก',
      onOk: () => handlerDelete(record.cid),
      okButtonProps: {
        loading: loadingPost
      },
      onCancel: () => {
        Modal.destroyAll()
      },
    })
  }, [handlerDelete, loadingPost])


  const columns = [
    {
      title: "เลขที่เอกสาร",
      key: "document",
      dataIndex: "document",
      width: 150,
      render: (item) => {
        if (item) {
          return item
        }
        return '-'
      }
    },
    {
      title: "วันที่แจ้ง",
      key: "receive_at",
      dataIndex: "receive_at",
      width: 200,
      render: (item) => {
        if (item) {
          return dayjs(item, 'YYYY-MM-DD HH:mm:ss').locale('th').format('DD MMMM BBBB')
        }
        return '-'
      }
    },
    {
      title: "แหล่งที่มาข้อมูล",
      key: "source_type",
      dataIndex: "source_type",
      width: 200,
      render: (item, record) => {
        if (record?.source?.mas_name) {
          return record?.source?.mas_name
        }
        return '-'
      }
    },
    {
      title: "หมวดหมู่",
      key: "category_type",
      dataIndex: "category_type",
      width: 200,
      render: (item, record) => {
        if (record?.category?.mas_name) {
          return record?.category?.mas_name
        }
        return '-'
      }
    },
    {
      title: "ประเภท",
      key: "complaint_type",
      dataIndex: "complaint_type",
      width: 200,
      render: (item, record) => {
        if (record?.complaint?.mas_name) {
          return record?.complaint?.mas_name
        }
        return '-'
      }
    },
    {
      title: "หน่วยงานผู้รับผิดชอบ",
      key: "sub_notified_office",
      dataIndex: "sub_notified_office",
      width: 200,
      render: (item, record) => {
        if (record?.notified?.deptshort) {
          return record?.notified?.deptshort
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
        if (item) {
          return <Badge color={BADGE_CONFIG[item].color} text={BADGE_CONFIG[item].text} />
        }
        return '-'
      },
    },

    {
      title: '',
      key: 'action',
      dataIndex: 'action',
      align: 'center',
      width: 103,
      render: (item, record, index) => {
        console.log('table ', index, ' ', record);
        return (

          <div className='inline-flex items-center w-full justify-end gap-5'>
            {/* <FilePdfOutlined /> */}
            {record?.status == 2 &&
              <FilePdfOutlined
              className="text-xl"
                onClick={() => {
                  console.log('the record', record)
                  handleDownload(record?.cid)
                }}
              />

            }
            <EditIcon
              className='!cursor-pointer'
              onClick={() => router.push({
                pathname: `/admin/complaint-listing/update/${record?.cid}`,
                query: {
                  type: record?.notified?.depttype || '',
                  office: record?.notified_office || '',
                  sub_office: record?.sub_notified_office || ''
                }
              })}
            />
            <DeleteIcon
              className='!cursor-pointer'
              onClick={() => openConfirmDelete(record)}
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
        loading={loading}
        pagination={{
          defaultCurrent: 1,
          defaultPageSize: 10,
          current: page,
          pageSize: perPage,
          total: Number(total) || 0,
          onChange: onChange,
          showSizeChanger: true,

        }}
        scroll={{ x: 1600 }}
      />
    </div >
  );
};

export default React.memo(TableComplaintListing);
