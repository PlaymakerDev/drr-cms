import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { Table, Modal, message } from "antd";
import { EditIcon, DeleteIcon } from "@/components/icon";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import useDeleteAPI from '@/utils/hooks/api/useDeleteAPI';
import useGetAPI from "@/utils/hooks/api/useGetAPI";
import usePostAPI from "@/utils/hooks/api/usePostAPI";
import { getPosition, getPrefix, getRole } from "@/store/features/masterSlice";

const TableUser = (props) => {
  const { setOpen, data, refreshContent, loading, page, perPage, total, onChange } = props;

  const [apiGetPrefix, loadingPrefix, prefix_name] = useGetAPI("overlay", {
    funcDispatch: getPrefix,
    reducerName: "master",
    reducerKey: "prefix_name",
  });

  const [apiGetRole, loadingRole, Role] = useGetAPI("overlay", {
    funcDispatch: getRole,
    reducerName: "master",
    reducerKey: "role",
  });

  const [apiGetPosition, loadingPosition, position] = useGetAPI("overlay", {
    funcDispatch: getPosition,
    reducerName: "master",
    reducerKey: "position",
  });

  useEffect(() => {
    apiGetPosition("/api/v1/tblposition", {}, false, {});
    apiGetPrefix("/api/v1/prefix", {}, false, {});
    apiGetRole("/api/v1/role", {}, false, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = useRouter()
  const [apiPost, loadingPost] = usePostAPI()

  const handlerDelete = useCallback(async (username) => {
    const response = await apiPost(`api/v1/user/delete_user/${username}`, { username: username }, undefined, false, {})
    if (response?.success) {
      message.success('ลบข้อมูลสำเร็จ')
      refreshContent()
      Modal.destroyAll()
    } else {
      message.error('ไม่สามารถลบข้อมูลได้')
      Modal.destroyAll()
    }
  }, [apiPost, refreshContent])

  const openConfirmDelete = useCallback((record) => {
    Modal.confirm({
      title: 'ยืนยันการลบข้อมูล',
      icon: <ExclamationCircleOutlined />,
      okText: 'ยืนยัน',
      cancelText: 'ยกเลิก',
      content: 'ท่านต้องการลบข้อมูลผู้ใช้งานใช่หรือไม่',
      onOk: () => handlerDelete(record.username),
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
      title: "Username",
      key: "username",
      dataIndex: "username",
      width: 200,
      align: "center",
      render: (item, record) => {
        if (record?.username) {
          return record?.username
        }
        return '-'
      }
    },
    {
      title: "ชื่อ-นามสกุล",
      key: "name",
      dataIndex: "first_name",
      width: 300,
      render: (item, record) => {
        const fullname = `${record?.prefix || ''} ${record?.first_name || ''} ${record?.last_name || ''}`.trim(); {
          return fullname;
        }
        // return '-'
      }
    },
    {
      title: "สิทธิการใช้งาน",
      key: "role",
      dataIndex: "role",
      width: 300,
      render: (item, record) => {
        if (record?.role) {
          const role = Role?.data?.data?.data.find(item => item.id === record?.role)?.role || 'No Role'
          return role
        }
        return '-'
      }
    },
    ,
    {
      title: "ตำแหน่ง",
      key: "position",
      dataIndex: "position",
      width: 300,
      render: (item, record) => {
        if (record?.position) {
          const p = position?.data.find(item => item.PID === record?.position)?.PName || 'No Position'
          return p
        }
        return '-'
      }
    },
    {
      title: '',
      key: 'action',
      dataIndex: 'action',
      align: 'center',
      width: 100,
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
    <Table
      dataSource={data.data}
      columns={columns}
      scroll={{ x: 1600 }}
      pagination={{
        defaultCurrent: 1,
        defaultPageSize: 10,
        current: page,
        pageSize: perPage,
        total: Number(total) || 0,
        onChange: onChange,
        showSizeChanger: false,
        position: ['bottomCenter']
      }}
    />
  );
};

export default TableUser
