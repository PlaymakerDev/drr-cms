import { Card, Row, Col } from "antd";
import React from "react";
import { ContentComplain, ContentService } from "./content";
import _ from 'lodash';

const LeftCard = (props) => {
  const { complaindata, servicedata } = props;

  const detailsLeft = [
    "ถนนชำรุด",
    "ไฟฟ้าส่องสว่าง ดับ/ชำรุด/ติดตั้ง",
    "ป้ายจราจร ชำรุด/สูญหาย/ติดตั้ง",
    "สัญญาณไฟจราจร ชำรุด/เสียหาย/ติดตั้ง",
    "วัชพืช/ต้นไม้/ขยะ",
    "สะพานลอย ชำรุด/เสียหาย/ติดตั้ง",
    "ทางเท้า ชำรุด/เสียหาย/ติดตั้ง",
    "ขอเชื่อมทาง เปิด/ปิด ทางเข้าออก",
    "รถบรรทุกน้ำหนักเกิน/ด่านชั่งน้ำหนัก",
    "รุกล้ำเขตทาง/ขายของริมทาง/ป้านโฆษณา",
    "เหตุเดือดร้อน เสียง/กลิ่น/ฝุ่น/น้ำท่วม",
    "อื่นๆ"
  ];

  const colorChartLeft = [
    "#25507F",
    "#264B72",
    "#093563",
    "#0050A0",
    "#006AD2",
    "#007DF8",
    "#0F87FE",
    "#3098FE",
    "#3FC8E4",
    "#6DB6FE",
    "#9BCDFE",
    "#C3E0FD"
  ]

  const detailsRight = [
    "สอบถามสภาพการจราจร",
    "สอบถามเส้นทาง",
    "แจ้งอุบัติเหตุ",
    "ขอความช่วยเหลือรถเสีย",
    "ภัยพิบัติ",
    "สอบถามเส้นทาง",
    "แจ้งอุบัติเหตุ",
    "ขอความช่วยเหลือรถเสีย"
  ]

  const colorChartRight = [
    "#1C4C2C",
    "#287241",
    "#369857",
    "#43BE6D",
    "#6BD690",
    "#69CB8A",
    "#B4E5C5",
    "#D8F1E1"
  ]



  const complainCombinedData = _.zipWith(complaindata?.complaint_type?.series,complaindata?.complaint_type?.lebels, (series,labels) => ({
    series,
    labels
  }));

  const serviceCombinedData = _.zipWith(servicedata?.complaint_type?.series,servicedata?.complaint_type?.lebels, (series,labels) => ({
    series,
    labels
  }));

  const complainsortData = _.orderBy(complainCombinedData, ['series'], ['desc']);
  const servicesortData = _.orderBy(serviceCombinedData, ['series'], ['desc']);

  const complainSeriesData = _.map(complainsortData, 'series');
  const complainLabelData = _.map(complainsortData, 'labels');

  const serviceSeriesData = _.map(servicesortData, 'series');
  const serviceLabelData = _.map(servicesortData, 'labels');

  const complainComebackData = {
    series: complainSeriesData,
    labels: complainLabelData
  };

  const serviceComebackData = {
    series: serviceSeriesData,
    labels: serviceLabelData
  };

  const complainmissingValues = _.difference(detailsLeft, complainComebackData.labels);
  const sortComplainLabel = [ ...complainComebackData.labels, ...complainmissingValues ]

  const servicemissingValues = _.difference(detailsRight, serviceComebackData.labels);
  const sortServiceLabel = [ ...serviceComebackData.labels, ...servicemissingValues ]


  return (
    <Card className="!p-0">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className="!pr-4">
          <ContentComplain
            complainstatus={complaindata.status}
            complaindata={complainComebackData}
            sortComplainLabel={sortComplainLabel}
            colorChartLeft={colorChartLeft}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className="!pl-4">
          <ContentService
            servicestatus={servicedata.status}
            servicedata={serviceComebackData}
            colorChartRight={colorChartRight}
            sortServiceLabel={sortServiceLabel}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default React.memo(LeftCard);
