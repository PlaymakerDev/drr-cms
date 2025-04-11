import React, { useCallback, useRef, useEffect, useState } from "react";
import { Modal, Row, Col, message } from "antd";
import { Form, Field, useForm } from "@/components/form";
import usePostAPI from "@/utils/hooks/api/usePostAPI";
import useGetAPI from "@/utils/hooks/api/useGetAPI";
import { getPrefix, getRole, getPosition } from "@/store/features/masterSlice";

const Content = (props) => {

  const { initialValues, refBtn, onReload, setOpen, username,position,Role,prefix_name } = props;
  const [apiPost, loadingPost] = usePostAPI("overlay");




  const buildValue = useCallback((values, next) => {
    const body = {
      prefix: values.prefix,
      first_name: values.first_name,
      last_name: values.last_name,
      position: values.position,
      role: values.role
    }
    next(body); // pass FormData instead of the raw values
  }, []);

  const handlerSubmit = useCallback(async (values) => {

    const response = await apiPost(`/api/v1/user/${username}`, values, {}, false, {});
    // CHECK SUCCESS

    if (response?.success) {
      message.success("แก้ไขข้อมูลสำเร็จ");
      setOpen({ open: false, info: {} });
      onReload();
    } else {
      message.error("ไม่สามารถแก้ไขข้อมูลได้");
    }
  },
    []
  );

  const form = useForm({
    initialValues: {
      username: initialValues?.username || "",
      prefix: initialValues?.prefix || "",
      first_name: initialValues?.first_name || "",
      last_name: initialValues?.last_name || "",
      role: initialValues?.role || "",
      position: initialValues?.position || "",
      // role: selectRole,
      // position: selectPosition,
    },
    rules: {},
  });

    return (
      <Form form={form} handlerSubmit={[buildValue, handlerSubmit]}>
        <section>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
              <Field.Input
                label="Username"
                name="username"
                placeholder="Username"
                disabled
              />
            </Col>
          </Row>
        </section>
        <section className="mt-3">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
              <Field.Select
                label="คำนำหน้า"
                name="prefix"
                placeholder="คำนำหน้า"
                optKeys={['prefix', 'prefix']}
                options={prefix_name?.data?.data || []}
                allowClear
                showSearch
              />
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
              <Field.Input label="ชื่อ" name="first_name" placeholder="ชื่อ" />
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
              <Field.Input
                label="นามสกุล"
                name="last_name"
                placeholder="นามสกุล"
              />
            </Col>
            <Col xs={24} sm={24} md={8} lg={12} xl={12} xxl={12}>
              <Field.Select
                label="สิทธิ์การเข้าใช้งาน"
                name="role"
                placeholder="สิทธิ์การเข้าใช้งาน"
                optKeys={['id', 'role']}
                options={Role?.data?.data?.data || []}
                allowClear
                showSearch
              />
            </Col>
            <Col xs={24} sm={24} md={8} lg={12} xl={12} xxl={12}>
              <Field.Select
                label="ตำแหน่งงาน"
                name="position"
                placeholder="ตำแหน่งงาน"
                optKeys={['PID', 'PName']}
                options={position.data || []}
                allowClear
                showSearch
              />
            </Col>
          </Row>
        </section>
        <button hidden type="submit" ref={refBtn}></button>
      </Form>
    );

};

const ModalUser = (props) => {
  const { open, setOpen, data, onReload } = props;
  const refBtn = useRef(null);


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
  }, []);

  return (
    <Modal
      title="แก้ไขข้อมูลผู้ใช้งาน"
      open={open}
      destroyOnClose
      onCancel={() => setOpen({ open: false })}
      width={700}
      okText="บันทึก"
      cancelText="ยกเลิก"
      okButtonProps={{
        htmlType: "submit",
        type: "primary",
        size: "large",
      }}
      cancelButtonProps={{
        htmlType: "button",
        type: "text",
        size: "large",
      }}
      onOk={() => {
        refBtn.current.click();
      }}
    >
      <main className="my-5">
        <Content
          initialValues={data || {}}
          refBtn={refBtn}
          username={data?.username}
          prefix_name={prefix_name}
          Role={Role}
          position={position}
          setOpen={setOpen}
          onReload={onReload}
        />
      </main>
    </Modal>
  );
};

export default React.memo(ModalUser);
