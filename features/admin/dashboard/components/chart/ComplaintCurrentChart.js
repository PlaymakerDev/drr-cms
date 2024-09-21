import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ComplaintCurrentChart = (props) => {
  const { data } = props;
  console.log('data is in the chart', data)
  const options = {
    // series: [25, 45, 65],
    // series: data.series || [],
    chart: {
      type: 'radialBar',
      toolbar: {
        show: false
      },
    },
    noData: {
      text: 'No Data',
      align: 'center',
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
    // labels: data.graph.labels || ['#', '#', '#'],
    labels: data.graph.labels || [],
    colors: ["#6093FF", "#FCAA72", "#99DE63"]
  };

  return (
    <>
      <Chart
        options={options}
        series={data.graph.series || []}
        type="radialBar"
        height={240}
      />
    </>
  );
};

export default React.memo(ComplaintCurrentChart);
