import React from 'react';
import dynamic from 'next/dynamic';
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(buddhistEra)
dayjs.extend(customParseFormat);
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });  

const ComplaintComparisonChart = (props) => {
  const { data } = props;

  // Make sure data has the necessary structure
  const mutableData = JSON.parse(JSON.stringify(data || {}));

  // Provide default values in case series or labels are missing
  const series = mutableData?.data?.series || [];
  const categories = mutableData?.data?.labels || [];

  const formattedCategories = categories.map(label => {
    const date = dayjs(label);
        const buddhistYear = date.format('BBBB'); 
        return buddhistYear;
        });
  return (
    <div className='!h-full'>
      <Chart
        series={series}
        options={{
          grid: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: -55,
            },
          },
          chart: {
            type: 'bar',
            toolbar: {
              show: false,
            },
            fontFamily: 'IBMPlexSansThai-Regular, Arial, sans-serif',
          },
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '70%',
              endingShape: 'rounded',
              dataLabels: {
                position: 'top',
              },
              borderRadius: 2,
            },
          },
          dataLabels: {
            enabled: true,
            offsetX: -10,
            offsetY: -2,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
          },
          xaxis: {
            categories: formattedCategories, 
          },
          fill: {
            opacity: 1,
          },
          colors: ['#0075E9', '#43BE6D'],
          legend: {
            position: 'bottom',
            offsetY: '25',
            markers: {
              size: 16,
              shape: 'line',
              strokeWidth: 7,
            },
          },
        }}
        height={150}
        type='bar'
      />
    </div>
  );
};

export default React.memo(ComplaintComparisonChart);
