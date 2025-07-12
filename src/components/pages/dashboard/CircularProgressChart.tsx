// components/CircularProgress.tsx
import ReactECharts from "echarts-for-react";

interface CircularProgressProps {
  percent: number;
  color?: string;
}

export default function CircularProgressChart({
  percent,
  color = "#52c41a", // màu xanh lá
}: CircularProgressProps) {
  const option = {
    series: [
      {
        type: "pie",
        radius: ["75%", "90%"],
        avoidLabelOverlap: false,
        silent: true,
        label: {
          show: false,
        },
        data: [
          {
            value: percent,
            itemStyle: {
              color,
            },
          },
          {
            value: 100 - percent,
            itemStyle: {
              color: "#e5e7eb", // xám nhạt
            },
          },
        ],
      },
    ],
    graphic: [
      {
        type: "text",
        left: "center",
        top: "middle",
        style: {
          text: `${percent.toFixed(2)}%`,
          fill: color,
          fontSize: 22,
          fontWeight: "bold",
        },
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ width: 140, height: 140 }}
      opts={{ renderer: "svg" }}
    />
  );
}
