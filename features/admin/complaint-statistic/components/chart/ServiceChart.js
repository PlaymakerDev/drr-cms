import React, { useMemo } from 'react'
import dynamic from "next/dynamic";
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(buddhistEra)
dayjs.extend(customParseFormat);  

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ServiceChart = (props) => {
  const { data } = props

  const renderLabels = useMemo(() => {
    const labels = [];
    data.data?.labels?.forEach((currentData) => {
      labels.push(dayjs(currentData, 'YYYY-MM').locale('th').format('MMMM BB'));
    })
    return {
      labels
    }
  }, [data]);

  const mutableData = JSON.parse(JSON.stringify(data));
  const series = mutableData?.data?.series

  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false
      },
      fontFamily: 'IBMPlexSansThai-Regular, Arial, sans-serif',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        endingShape: 'rounded',
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: renderLabels.labels,
    },
    fill: {
      opacity: 1
    },
    colors: ["#0075E9", "#43BE6D"],
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      markers: {
          size: 17,
          shape: 'line',
           strokeWidth: 6,
        }
      },
  }

  return (
    <div>
      <Chart
        series={series}
        options={options}
        height={490}
        type='bar'
      />
    </div>
  )
}

export default React.memo(ServiceChart)
