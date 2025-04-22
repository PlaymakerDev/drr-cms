import React, { useMemo } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(buddhistEra)
dayjs.extend(customParseFormat);

const ComplaintProgressChart = (props) => {
  const { data } = props;

  console.log("data>>>", data)

  const renderLabels = useMemo(() => {
    const labels = [];
    data?.labels?.forEach((currentData) => {
      labels.push(dayjs(currentData, 'YYYY-MM').locale('th').format('MMMM BB'));
    })
    return {
      labels
    }
  }, [data]);

  const mutableData = JSON.parse(JSON.stringify(data));

  return (
    <div className="!h-full !w-full">
      <Chart
        series={mutableData?.series || []}
        options={{
          grid: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: -40
            }
          },
          chart: {
            type: "bar",
            toolbar: {
              show: false,
            },
            fontFamily: 'IBMPlexSansThai-Regular, Arial, sans-serif',
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "40%",
              endingShape: "rounded",
              dataLabels: {
                position: "top",
              },
              borderRadius: 5,
            },
          },
          dataLabels: {
            enabled: false,
            offsetX: -10,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
          },
          xaxis: {
            categories: renderLabels.labels || []
          },
          fill: {
            opacity: 1,
          },
          // colors: ["#0075E9", "#43BE6D"],
          colors: ["#F1E14A", "#0075E9", "#43BE6D"],
          legend: {
            position: 'bottom',
            offsetY: '25',
            markers: {
              size: 16,
              shape: 'line',
              strokeWidth: 6,
            }
          },
        }}
        height={200}
        type="bar"
      />
    </div>
  );
};

export default React.memo(ComplaintProgressChart);
