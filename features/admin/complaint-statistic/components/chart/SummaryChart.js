import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SummaryChart = (props) => {
  const { seriesData, labelsData } = props;

  const [series, setSeries] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    if (!!seriesData) {
      const filterSeries = seriesData.filter(item => item.name !== 'รวม');
      setSeries(JSON.parse(JSON.stringify(filterSeries)));
      setLabels(labelsData);
    } else {
      setSeries([]);
      setLabels([]);
    }
  }, [seriesData, labelsData]);

  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
      fontFamily: 'IBMPlexSansThai-Regular, Arial, sans-serif',
      offsetY: 20,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "16px",
        endingShape: "rounded",
        dataLabels: {
          position: "top",
        },
        borderRadius: 5,
        columnWidth: '60%',
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -10,
      offsetY: -2,
      style: {
        fontSize: '12px',
        colors: ['#fff'],
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: labels,
      labels: {
        show: true,
        rotate: -45, // หมุนป้ายข้อมูลหากจำเป็น
        hideOverlappingLabels: true,
      },
    },
    fill: {
      opacity: 1,
    },
    colors: ["#0075E9", "#43BE6D"],
    legend: {
      show: false,
      markers: {
        size: 14,
        shape: 'line',
        strokeWidth: 6,
      },
    },
  };

  return (
    <div style={{ overflowX: 'auto', maxHeight: '450px' }}>
      <Chart
        series={series}
        options={options}
        height={460}
        type="bar"
      />
    </div>
  );
};

export default React.memo(SummaryChart);