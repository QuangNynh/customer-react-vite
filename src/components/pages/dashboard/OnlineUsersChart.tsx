// components/OnlineUsersChart.tsx
import ReactECharts from "echarts-for-react";

const OnlineUsersChart = () => {
  const option = {
    title: {
      text: "Người dùng trực tuyến",
      left: "center",
      textStyle: {
        fontSize: 14,
        fontWeight: 600,
      },
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: Array.from({ length: 24 }, (_, i) => `${i}h`),
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      minInterval: 1,
    },
    series: [
      {
        name: "Số người",
        type: "line",
        data: [
          0, 0, 1, 2, 1, 3, 4, 6, 4, 3, 5, 6, 5, 4, 3, 2, 1, 0, 0, 1, 1, 2, 1,
          0,
        ],
        smooth: true,
        areaStyle: {
          color: "rgba(66, 153, 225, 0.2)",
        },
        lineStyle: {
          color: "#4299e1",
        },
        symbol: "circle",
        symbolSize: 6,
        itemStyle: {
          color: "#3182ce",
        },
      },
    ],
    grid: {
      left: "3%",
      right: "4%",
      bottom: "5%",
      containLabel: true,
    },
  };

  return (
    <div className="mt-6 bg-white rounded-lg shadow p-4">
      <ReactECharts option={option} style={{ height: 300 }} />
    </div>
  );
};

export default OnlineUsersChart;
