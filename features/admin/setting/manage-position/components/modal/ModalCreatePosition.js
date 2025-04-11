import React, { useCallback, useRef } from 'react';
import { Col, Modal, Row, message } from 'antd';
import { useForm, Form, Field } from '@/components/form';
import usePostAPI from '@/utils/hooks/api/usePostAPI';

const Content = (props) => {
  const { info, refSubmit, onReload, setOpen } = props;
  const [apiPost, loadingPost] = usePostAPI('overlay');

  const form = useForm({
    initialValues: {
      complaint_type: info?.PName || ''
    },
    rules: {}
  });

  const buildValue = useCallback((values, next) => {
    const newValues = {
      PName: values.complaint_type || ''
    };
    next(newValues);
  }, []);

  const handlerSubmit = useCallback(async (values, next) => {
    try {
      if (info?.PID) {
        const response = await apiPost(`/api/v1/tblposition/edit_tblposition/${info?.PID}`, values, {}, false);
        if (response?.success) {
          message.success('แก้ไขข้อมูลสำเร็จ');
          setOpen({ open: false, info: {} });
          onReload();
        } else {
          message.error('ไม่สามารถแก้ไขข้อมูลได้');
        }
      } else {
        const response = await apiPost('/api/v1/tblposition', values, {}, false);
        if (response?.success) {
          message.success('เพิ่มข้อมูลสำเร็จ');
          setOpen({ open: false, info: {} });
          onReload();
        } else {
          message.error('ไม่สามารถบันทึกข้อมูลได้');
        }
      }
    } catch (error) {
      message.error('เกิดข้อผิดพลาดในการเชื่อมต่อ');
    }
  }, [info?.PID, apiPost, onReload, setOpen]);

  return (
    <Form form={form} handlerSubmit={[buildValue, handlerSubmit]}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Field.Input
            label='ตำแหน่งงาน'
            name='complaint_type'
            placeholder=''
          />
        </Col>
      </Row>
      <button type='submit' ref={refSubmit} hidden />
    </Form>
  );
};

const ModalCreateInformation = (props) => {
  const { open, info, setOpen, onReload } = props;
  
  const refSubmit = useRef(null);
 
  return (
    <Modal
      title={info?.PID ? "แก้ไขข้อมูล" : "เพิ่มข้อมูล"}
      open={open}
      destroyOnClose
      onCancel={() => setOpen({ open: false, info: {} })}
      width={700}
      okText='บันทึก'
      cancelText='ยกเลิก'
      okButtonProps={{
        htmlType: 'submit',
        type: 'primary',
        size: 'large',
        onClick: () => refSubmit.current.click()
      }}
      cancelButtonProps={{
        htmlType: 'button',
        type: 'text',
        size: 'large'
      }}
    >
      <main className='my-5'>
        <Content
          info={info}
          setOpen={setOpen}
          refSubmit={refSubmit}
          onReload={onReload}
        />
      </main>
    </Modal>
  );
};

export default React.memo(ModalCreateInformation);
