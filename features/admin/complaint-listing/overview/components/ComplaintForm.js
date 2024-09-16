import React, { useCallback } from "react";
import { Form, useForm, Field } from "@/components/form";
import { Row, Col, Button, Card, Typography, Checkbox, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const ComplaintForm = (props) => {
  const {} = props;

  const form = useForm({
    initialValue: {},
    rules: {},
  });

  const buildValue = useCallback((values, next) => {
    next(values);
  }, []);

  const handlerSubmit = useCallback((values) => {
    console.log(values);
  }, []);

  const handleCancel = () => {
    console.log("Cancel clicked");
  };

  const handleSave = () => {
    form.submit(); // Trigger form submission
  };

  return (
    <Card className="bg-transparent border-0">
      <Form form={form} handlerSubmit={[buildValue, handlerSubmit]} >
        <Row align="middle" justify="space-between" gutter={16} className="mb-4 ">
          <Col>
            <Typography.Title level={4} className="!text-[#FFFFFF] mb-0">
              แบบรับเรื่องร้องเรียน
            </Typography.Title>
          </Col>
          <Col className="flex flex-col items-end">
            <Typography.Text className="!text-[gray]">ผู้บันทึกข้อมูล</Typography.Text>
            <Typography className="!text-[#FFFFFF] mb-0">
              พนักงานทั่วไป 67001 แสนดี มั่นคง
            </Typography>
          </Col>
        </Row>

        <Typography.Title level={5} className=" !text-[#FFFFFF] mb-0 mb-3">               
          รายละเอียดผู้ร้องเรียน
        </Typography.Title>

        <Row gutter={[16, 16]} align={"middle"}>
          <Col xs={24} sm={12} xxl={6}>
            <Field.Select
              label={<span className="text-white-label">แหล่งที่มาข้อมูล :</span>}
              name="datasource"
              placeholder="แหล่งที่มาข้อมูล"
              hideRequired
            />
          </Col>
          <Col xs={24} sm={12} xxl={6}>
            <Field.DatePicker
              label={<span className="text-white-label">รับเรื่องวันที่ :</span>}
              name="receive"
              placeholder="รับเรื่องวันที่"
              hideRequired
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]} align={"middle"} className="mt-4 mb-5">
          <Col xs={24} sm={24} md={8}>
            <Checkbox className="!text-[#FFFFFF]">
              ไม่ระบุตัวตน
            </Checkbox>
          </Col>
        </Row>

        <Row gutter={[16, 16]} align={"middle"}>
          <Col xs={24} sm={6}>
            <Field.Input
              label={<span className="text-white-label">ชื่อ</span>}
              name="name"
              placeholder="ชื่อ"
              hideRequired
            />
          </Col>
          <Col xs={24} sm={6}>
            <Field.Input
              label={<span className="text-white-label">นามสกุล</span>}
              name="surname"
              placeholder="นามสกุล"
              hideRequired
            />
          </Col>
          <Col xs={24} sm={6}>
            <Field.Input
              label={<span className="text-white-label">เบอร์โทรศัพท์(ผู้ร้องเรียน)</span>}
              name="phone"
              placeholder="เบอร์โทรศัพท์"
              hideRequired
            />
          </Col>
          <Col xs={24} sm={6}>
            <Field.Input
              label={<span className="text-white-label">ข้อมูลผู้ติดต่อเพิ่มเติม</span>}
              name="additionalContact"
              placeholder="ข้อมูลผู้ติดต่อเพิ่มเติม"
              hideRequired
            />
          </Col>
        </Row>

        <Typography.Title level={5} className="!text-[#FFFFFF] mt-8 mb-4">เนื้อหาเรื่องร้องเรียน</Typography.Title>

        <Row gutter={[16, 16]} align={"middle"} className="mb-3">
          <Col xs={24} sm={12} xxl={6}>
            <Field.Select
              label={<span className="text-white-label">หมวดหมู่</span>}
              name="complaintType"
              placeholder="หมวดหมู่"
              hideRequired
            />
          </Col>
          <Col xs={24} sm={12}>
            <Field.Select
              label={<span className="text-white-label">ประเภทเรื่องร้องทุกข์</span>}
              name="complaintTypeDetails"
              placeholder="ประเภทเรื่องร้องทุกข์"
              hideRequired
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]} align={"middle"} className="mb-7">
          <Col xs={24} sm={6}>
            <Field.Input
              label={<span className="text-white-label">จังหวัด</span>}
              name="name"
              placeholder="จังหวัด"
              hideRequired
            />
          </Col>
          <Col xs={24} sm={6}>
            <Field.Input
              label={<span className="text-white-label">อำเภอ</span>}
              name="surname"
              placeholder="อำเภอ"
              hideRequired
            />
          </Col>
          <Col xs={24} sm={6}>
            <Field.Input
              label={<span className="text-white-label">ตำบล</span>}
              name="phone"
              placeholder="ตำบล"
              hideRequired
            />
          </Col>
          <Col xs={24} sm={6}>
            <Field.Input
              label={<span className="text-white-label">สายทาง</span>}
              name="additionalContact"
              placeholder="สายทาง"
              hideRequired
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]} align={"middle"}>
          <Col xs={24} sm={12}>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=100.7657%2C13.7162%2C100.7913%2C13.7458&amp;layer=mapnik"
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              loading="lazy"
              className="rounded-3xl"
            />
          </Col>
          <Col xs={24} sm={12}>
            <Row gutter={[16, 16]} align={"middle"} className="mb-4">
              <Col xs={24} sm={12}>
                <Field.Input
                  label={<span className="text-white-label">ละติจูด</span>}
                  name="latitude"
                  placeholder="ละติจูด"
                  hideRequired
                />
              </Col>
              <Col xs={24} sm={12}>
                <Field.Select
                  label={<span className="text-white-label">ลองติจูด</span>}
                  name="longitude"
                  placeholder="ลองติจูด"
                  hideRequired
                />
              </Col>
              <Col xs={24} sm={12} xxl={24}>
                <Field.TextArea
                  label={<span className="text-white-label">บริเวณ</span>}
                  name="area"
                  placeholder="บริเวณ"
                  hideRequired
                />
              </Col>
            </Row>
          </Col>
        </Row>

      <Row gutter={[16, 16]} className="items-start mt-3">
        <Col xs={24} sm={12}>
      <Field.Select
        label={<span className="text-white-label">แจ้ง สำนัก/กอง</span>}
        name="notify"
        placeholder="แจ้ง สำนัก/กอง"
        hideRequired
      />
      <Field.Input
        label={<span className="text-white-label">เลขที่เอกสาร</span>}
        name="documentNumber"
        placeholder="เลขที่เอกสาร"
        width
        hideRequired
        style={{ width: '51%' }}
      />
    </Col>
    
    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
      <div className="container">
        <Typography.Title level={5} className="!m-0 !text-[#FFFFFF] mb-2">ไฟล์ประกอบการร้องเรียน</Typography.Title>
        <Typography.Text className="!text-[gray]">เลือกไฟล์เพื่ออัปโหลดรายการเอกสารที่เกี่ยวข้อง (รองรับไฟล์ .pdf, .jpg, .png เท่านั้น ไฟล์ขนาดไม่เกิน 10 MB)</Typography.Text>
      </div>
      <Field.Upload
        name='file1'
        maxCount={5}
        accept="image/png, image/jpeg, application/pdf"
        listType='picture-card'
        maxSizeLimit={10000000}
        label={<span className="text-white-label">เลือกไฟล์</span>}
        className="mt-3"
      />
    </Col>
  </Row>


        <Typography.Title level={5}className="!text-[#FFFFFF] mb-3 mt-7">ผลการดำเนินการ</Typography.Title>

        <Row>
          <Col xs={24} sm={6}>
            <Field.Input
              label={<span className="text-white-label">วันยุติ</span>}
              name="ending_day"
              placeholder="วันยุติ"
              disabled
              hideRequired
              className="disabled:bg-gray-200 disabled:text-gray-500"
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]} className="items-start mt-4">
          <Col xs={24} sm={12}>
            <Field.TextArea
              label={<span className="text-white-label">คำชี้แจง/ผลปฏิบัติ</span>}
              name="statement"
              placeholder="คำชี้แจง/ผลปฏิบัติ"
              disabled
              hideRequired
              className="disabled:bg-gray-200 disabled:text-gray-500"
            />
          </Col>
          <Col xs={24} sm={12} md={24} lg={12} xl={12} xxl={12}>
            <div className="container">
              <Typography.Title level={5} className="!m-0 !text-[#FFFFFF]">ไฟล์ประกอบการร้องเรียน</Typography.Title>
              <Typography.Text className="!text-[gray]">เลือกไฟล์เพื่ออัปโหลดรายการเอกสารที่เกี่ยวข้อง (รองรับไฟล์ .pdf, .jpg, .png เท่านั้น ไฟล์ขนาดไม่เกิน 10 MB)</Typography.Text>
            </div>
            <Field.Upload
              name='file2'
              maxCount={5}
              className="mt-3"
              accept="image/png, image/jpeg, application/pdf"
              listType='picture-card'
              maxSizeLimit={10000000}
              disabled
              beforeUpload={(file) => {
                const allowList = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'];
                const maxFileSize = 10000000;
                const isListAvailable = allowList.some(item => item === file.type);
                const isLt10 = file.size < maxFileSize;
                if (!isListAvailable) {
                  message.error('ประเภทไฟล์ไม่ถูกต้อง');
                }
                if (!isLt10) {
                  message.error('ไม่สามารถอัปโหลดไฟล์ได้ ไฟล์ที่อัปโหลดมีขนาดเกิน 10 MB');
                }
                return ((isListAvailable && isLt10) || Upload.LIST_IGNORE) || false;
              }}
              label={<span className="text-white-label">เลือกไฟล์</span>}
            />
          </Col>
        </Row>

        <Row justify="end" className="mt-4">
          <Col>
            <Button type="link"onClick={handleCancel} className="mr-2 !text-[#FFFFFF]">ยกเลิก</Button>
            <Button type="primary" onClick={handleSave} className="!bg-custom-blue">บันทึก</Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default React.memo(ComplaintForm);
