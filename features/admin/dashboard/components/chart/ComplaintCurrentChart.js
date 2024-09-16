import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ComplaintCurrentChart = () => {
  const options = {
    series: [15, 65, 34],
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '16px',
            offsetY: -5,
          },
          value: {
            fontSize: '24px',
            fontWeight: 'bold',
            offsetY: 5,
          },
          total: {
            show: true,
            label: 'ทั้งหมด',
            formatter: function (w) {
              return 312;
            }, 
          },
        },
        hollow: {
          margin: 0,
          size: '40%',
          background: 'transparent',
        },
        track: {
          background: '#e0e0e0',
          strokeWidth: '97%',
        },
        stroke: {
          lineCap: 'round',
        },
      },
    },
    labels: ['#', '#', '#'],
  };

  return (
    <>
      <Chart
        options={options}
        series={options.series}
        type="radialBar"
        height={240}
      />
    </>
  );
};

export default React.memo(ComplaintCurrentChart);
