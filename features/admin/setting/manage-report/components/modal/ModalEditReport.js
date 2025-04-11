import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Col, Modal, Row, Typography, message } from 'antd';
import { useForm, Form, Field } from '@/components/form';
import usePostAPI from '@/utils/hooks/api/usePostAPI';

const Content = (props) => {
  const { info, refSubmit, onReload, setOpen, tableData, test } = props;
  const [apiPost, loadingPost] = usePostAPI('overlay');

  const form = useForm({
    initialValues: {
      reportCertificate: info?.reportCertificate || '',
      reportCertificateRole: info?.reportCertificateRole || ''
    },
    rules: {
    }
  });

  const updateReportModal = useCallback(async (values) => {
    const response = await apiPost(`/api/v1/report-certifier/${info?.reportid}/update`, values, undefined, false)
    if (response?.success) {
      message.success('บันทึกข้อมูลสำเร็จ')
      onReload()
      setOpen({ open: false, info: {} })
    } else {
      message.error('ไม่สามารถบันทึกข้อมูลได้')
    }
  }, [apiPost])

  const buildValue = useCallback((values, next) => {
    const newValues = {
      certificate_name: values?.reportCertificate,
      certificate_role: values?.reportCertificateRole
    };
    next(newValues);
  }, []);


  const handlerSubmit = useCallback(async (values, next) => {
    if (values?.certificate_name == '' || values?.certificate_role == '') {
      message.error("กรุณากรอกข้อมูลให้ครบถ้วน")
    } else {
      if (values?.certificate_name.length > 120 || values?.certificate_role.length > 125) {
        message.error("กรุณาเช็คความยาวของตัวอักษร")
      } else {
        // console.log("Submit Values ", values)
        // message.success("บันทึกสำเร็จ")
        updateReportModal(values)
        // test(values)
      }
    }

    // try {
    //   if (info?.PID) {
    //     const response = await apiPost(`/api/v1/tblposition/edit_tblposition/${info?.PID}`, values, {}, false);
    //     if (response?.success) {
    //       message.success('แก้ไขข้อมูลสำเร็จ');
    //       setOpen({ open: false, info: {} });
    //       onReload();
    //     } else {
    //       message.error('ไม่สามารถแก้ไขข้อมูลได้');
    //     }
    //   } else {
    //     const response = await apiPost('/api/v1/tblposition', values, {}, false);
    //     if (response?.success) {
    //       message.success('เพิ่มข้อมูลสำเร็จ');
    //       setOpen({ open: false, info: {} });
    //       onReload();
    //     } else {
    //       message.error('ไม่สามารถบันทึกข้อมูลได้');
    //     }
    //   }
    // } catch (error) {
    //   message.error('เกิดข้อผิดพลาดในการเชื่อมต่อ');
    // }
  }, [info?.PID, apiPost, onReload, setOpen]);

  return (
    <Form form={form} handlerSubmit={[buildValue, handlerSubmit]}>
      <Row gutter={[16, 6]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Field.Input
            // label='ผู้รับรองรายงาน'
            label={
              <div>
                <Typography.Text>ผู้รับรองรายงาน</Typography.Text>
                <Typography.Text className='text-red-500'>*</Typography.Text>
              </div>
            }
            name='reportCertificate'
            // placeholder=''
            maxLength={120}
            placeholder='กรุณากรอกไม่เกิน 120 ตัวอักษร'
            // maxLength={255}
          // required
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Field.Input
            // label='ตำแหน่งผู้รับรองรายงาน'
            label={
              <div>
                <Typography.Text>ตำแหน่งผู้รับรองรายงาน</Typography.Text>
                <Typography.Text className='text-red-500'>*</Typography.Text>
              </div>
            }
            name='reportCertificateRole'
            placeholder='กรุณากรอกไม่เกิน 125 ตัวอักษร'
            maxLength={125}
          // required
          />
        </Col>
      </Row>
      <button type='submit' ref={refSubmit} hidden />
    </Form>
  );
};

const ModalEditReport = (props) => {
  const { open, info, setOpen, onReload } = props;

  const refSubmit = useRef(null);

  return (
    <Modal
      title={"แก้ไขข้อมูล"}
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

export default React.memo(ModalEditReport);
