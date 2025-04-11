import React, { useEffect, useMemo, useState } from "react";
import { Modal, Spin } from "antd";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(buddhistEra)
dayjs.extend(customParseFormat);  
dayjs.locale('th');
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { getProgress_Full_Year } from '@/store/features/dashboardSlice'
import _ from 'lodash';

const ProgressDetail = (props) => {
  const { open, setOpen } = props;

  const [apiGetFullyear, loadingFullyear, fullyear] = useGetAPI('overlay', {
    funcDispatch: getProgress_Full_Year, reducerName: 'dashboard', reducerKey: 'progress_full_year'
  })

  useEffect(() => {
    if (open) {
      apiGetFullyear('/api/v1/dashboard/progress_full_year', { dateSearch: dayjs().format('YYYY-MM-DD') }, false, {})
    }
  }, [open]);

  const RenderChart = useMemo(() => {
    if (!loadingFullyear && open) {
      const cloneseries = _.cloneDeep(fullyear?.data?.series);
      const clonelabels = _.cloneDeep(fullyear?.data?.labels);
      const options = {
        chart: {
          type: 'bar',
          height: 350,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded',
            borderRadius: 2,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent'],
        },
        xaxis: {
          categories: [],
        },
        
        fill: {
          opacity: 1,
        },
        tooltip: {
          enabled: true,
          y: {
            formatter: function (val) {
              return val; 
            }
          }
        },
        colors: ['#0075E9', '#43BE6D'],
      }        
      const formattedLabels = _.map(clonelabels, (label) => {
        const date = dayjs(label);
        const buddhistYear = date.format('BBBB'); 
        const twoDigitYear = buddhistYear.slice(-2);
        return `${date.format('MMMM')} ${twoDigitYear}`; 
      });
      return (
        <Chart options={{ ...options, xaxis: { ...options.xaxis, categories: formattedLabels } }} series={cloneseries} type="bar" height={350} />
      )
    } else {
      return (
        <section className="h-40 flex items-center justify-center">
          <Spin spinning={loadingFullyear} />
        </section>
      )
    }
  }, [fullyear.data, loadingFullyear])

  return (
    <Modal
      title="ผลการดำเนินงานร้องเรียนร้องทุกข์"
      open={open}
      centered
      onCancel={() => {
        setOpen(false)
      }}
      width={1300}
      footer={null}
    >
      <main className="my-5">
        {RenderChart}
      </main>
    </Modal>
  );
};

export default React.memo(ProgressDetail);
