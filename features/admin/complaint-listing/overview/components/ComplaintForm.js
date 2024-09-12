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
    // Implement cancel logic here
    console.log("Cancel clicked");
  };

  const handleSave = () => {
    form.submit(); // Trigger form submission
  };

  return (
    <Card className="bg-transparent border-0">
      <Form form={form} handlerSubmit={[buildValue, handlerSubmit]}>
        <Row align="middle" justify="space-between" gutter={16} className="mb-4">
          <Col>
            <Typography.Title level={4} className="!text-[#FFFFFF] mb-0">
              รายการรับเรื่องร้องเรียน
            </Typography.Title>
          </Col>
          <Col>
            <Typography className="!text-[#FFFFFF] mb-0">
              พนักงานทั่วไป 67001
            </Typography>
          </Col>
        </Row>

        <Typography className="!text-[#FFFFFF] mb-0">
          รายละเอียดผู้ร้องเรียน
        </Typography>

        <Row gutter={[16, 16]} align={"middle"}>
          <Col xs={24} sm={12} xxl={6}>
            <Field.Select
              label="แหล่งที่มาข้อมูล :"
              name="datasource"
              placeholder="แหล่งที่มาข้อมูล"
              hideRequired
            />
          </Col>
          <Col xs={24} sm={12} xxl={6}>
            <Field.DatePicker
              label="รับเรื่องวันที่ :"
              name="receive"
              placeholder="รับเรื่องวันที่"
              hideRequired
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]} align={"middle"}>
          <Col xs={24} sm={24} md={8}>
            <Checkbox className="!text-[#FFFFFF]">
              ไม่ระบุตัวตน
            </Checkbox>
          </Col>
        </Row>

        <Row gutter={[16, 16]} align={"middle"}>
          <Col xs={24} sm={6}>
            <Field.Input
              label="ชื่อ"
              name="name"
              placeholder="ชื่อ"
              hideRequired
            />
          </Col>
          <Col xs={24} sm={6}>
            <Field.Input
              label="นามสกุล"
              name="surname"
              placeholder="นามสกุล"
              hideRequired
            />
          </Col>
          <Col xs={24} sm={6}>
            <Field.Input
              label="เบอร์โทรศัพท์(ผู้ร้องเรียน)"
              name="phone"
              placeholder="เบอร์โทรศัพท์"
              hideRequired
            />
          </Col>
          <Col xs={24} sm={6}>
            <Field.Input
              label="ข้อมูลผู้ติดต่อเพิ่มเติม"
              name="additionalContact"
              placeholder="ข้อมูลผู้ติดต่อเพิ่มเติม"
              hideRequired
            />
          </Col>
        </Row>

        <Typography className="!text-[#FFFFFF] mb-0">เนื้อหาเรื่องร้องเรียน</Typography>

        <Row gutter={[16, 16]} align={"middle"}>
          <Col xs={24} sm={12} xxl={6}>
            <Field.Select
              label="หมวดหมู่"
              name="complaintType"
              placeholder="หมวดหมู่"
              hideRequired
            />
          </Col>
          <Col xs={24} sm={12}>
            <Field.Select
              label="ประเภทเรื่องร้องทุกข์"
              name="complaintTypeDetails"
              placeholder="ประเภทเรื่องร้องทุกข์"
              hideRequired
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]} align={"middle"}>
          <Col xs={24} sm={6}>
            <Field.Input
              label="จังหวัด"
              name="name"
              placeholder="จังหวัด"
              hideRequired
            />
          </Col>
          <Col xs={24} sm={6}>
            <Field.Input
              label="อำเภอ"
              name="surname"
              placeholder="อำเภอ"
              hideRequired
            />
          </Col>
          <Col xs={24} sm={6}>
            <Field.Input
              label="ตำบล"
              name="phone"
              placeholder="ตำบล"
              hideRequired
            />
          </Col>
          <Col xs={24} sm={6}>
            <Field.Input
              label="สายทาง"
              name="additionalContact"
              placeholder="สายทาง"
              hideRequired
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]} align={"middle"}>
          <Col xs={24} sm={12}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7925591393205!2d100.77853867586487!3d13.731005397773034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d66308ce98ffd%3A0xcb43a76f038c38ca!2z4LiE4LiT4Liw4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Liq4Liy4Lij4Liq4LiZ4LmA4LiX4LioIOC4quC4luC4suC4muC4seC4meC5gOC4l-C4hOC5guC4meC5guC4peC4ouC4teC4nuC4o-C4sOC4iOC4reC4oeC5gOC4geC4peC5ieC4suC5gOC4iOC5ieC4suC4hOC4uOC4k-C4l-C4q-C4suC4o-C4peC4suC4lOC4geC4o-C4sOC4muC4seC4hyAoSVRLTUlUTCk!5e0!3m2!1sth!2sth!4v1723785863387!5m2!1sth!2sth"
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
            <Row gutter={[16, 16]} align={"middle"}>
              <Col xs={24} sm={12}>
                <Field.Input
                  label="ละติจูด"
                  name="latitude"
                  placeholder="ละติจูด"
                  hideRequired
                />
              </Col>
              <Col xs={24} sm={12}>
                <Field.Select
                  label="ลองติจูด"
                  name="longitude"
                  placeholder="ลองติจูด"
                  hideRequired
                />
              </Col>
              <Col xs={24} sm={12} xxl={24}>
                <Field.TextArea
                  label="บริเวณ"
                  name="locationDetails"
                  placeholder="บริเวณ"
                  hideRequired
                />
              </Col>
            </Row>
          </Col>
        </Row>



        <Row gutter={[16, 16]} align={"middle"}>
          <Col xs={24} sm={12}>
            <Field.Select
              label="แจ้ง สำนัก/กอง"
              name="department"
              placeholder="แจ้ง สำนัก/กอง"
              hideRequired
            />
          </Col>
          <Col xs={24} sm={12} md={24} lg={24} xl={18} xxl={3}>
            <Field.Upload
              name='file'
              maxCount={1}
              accept="image/png, image/jpeg"
              listType='picture-card'
              maxSizeLimit={10000000}
              beforeUpload={(file) => {
                // DEFAULT VALUES
                const allowList = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'];
                const maxFileSize = 10000000;
                // CHECK
                const isListAvailable = allowList.some(item => item === file.type);
                const isLt10 = file.size < maxFileSize;
                if (!isListAvailable) {
                  message.error('ประเภทไฟล์ไม่ถูกต้อง');
                }
                if (!isLt10) {
                  message.error('ไม่สามารถอัปโหลดไฟล์ได้ ไฟล์ที่อัปโหลดมีขนาดเกิน 10 MB');
                }
                // RETURN UPLOAD.LIST_IGNORE
                return ((isListAvailable && isLt10) || Upload.LIST_IGNORE) || false;
              }}
              label='เลือกรูปภาพ'
              description={
                <div className='flex flex-col flex-wrap justify-center mt-3'>
                  <Typography.Text className='!text-sm'>รองรับรูปแบบไฟล์ .png .jpeg .jpg ขนาดไม่เกิน 10MB</Typography.Text>
                </div>
              }
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]} align={"middle"}>
          <Col xs={24} sm={12}>
            <Field.Input
              label="เลขที่เอกสาร"
              name="longitude"
              placeholder="เลขที่เอกสาร"
              hideRequired
            />
          </Col>
        </Row>

        <Typography className="!text-[#FFFFFF] mb-0">ผลการดำเนินการ</Typography>

        <Row>
          <Col xs={24} sm={12} xxl={4}>
            <Field.Input
              label="วันที่ยุติ"
              name="longitude"
              placeholder="วันที่ยุติ"
              hideRequired
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]} align={"middle"}>
          <Col xs={24} sm={12}>
            <Field.TextArea
              label="คำชี้แจง/ผลปฏิบัติ"
              name="details"
              placeholder="คำชี้แจง/ผลปฏิบัติ"
              hideRequired
            />
          </Col>
          <Col xs={24} sm={12} md={24} lg={24} xl={18} xxl={3}>
            <Field.Upload
              name='file'
              maxCount={1}
              accept="image/png, image/jpeg"
              listType='picture-card'
              maxSizeLimit={10000000}
              beforeUpload={(file) => {
                // DEFAULT VALUES
                const allowList = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'];
                const maxFileSize = 10000000;
                // CHECK
                const isListAvailable = allowList.some(item => item === file.type);
                const isLt10 = file.size < maxFileSize;
                if (!isListAvailable) {
                  message.error('ประเภทไฟล์ไม่ถูกต้อง');
                }
                if (!isLt10) {
                  message.error('ไม่สามารถอัปโหลดไฟล์ได้ ไฟล์ที่อัปโหลดมีขนาดเกิน 10 MB');
                }
                // RETURN UPLOAD.LIST_IGNORE
                return ((isListAvailable && isLt10) || Upload.LIST_IGNORE) || false;
              }}
              label='เลือกรูปภาพ'
              description={
                <div className='flex flex-col flex-wrap justify-center mt-3'>
                  <Typography.Text className='!text-sm'>รองรับรูปแบบไฟล์ .png .jpeg .jpg ขนาดไม่เกิน 10MB</Typography.Text>
                </div>
              }
            />
          </Col>
        </Row>

        {/* Button Row */}
        <Row justify="end" className="mt-4">
          <Col>
            <Button onClick={handleCancel} className="mr-2">ยกเลิก</Button>
            <Button type="primary" onClick={handleSave} className="!bg-custom-blue">บันทึก</Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default React.memo(ComplaintForm);
