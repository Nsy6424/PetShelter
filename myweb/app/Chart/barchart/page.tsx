"use client";

import dynamic from "next/dynamic";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

// Dynamically import the Bar component
// This will ensure that the chart is rendered only on the client-side
// const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
//   ssr: false,
// });

const data = {
  labels: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ],
  datasets: [
    {
      label: "Thống kê số lượng cứu trợ trong năm 2024",
      data: [12, 19, 32, 5, 22, 3, 10, 15, 20, 25, 30, 35],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const ChartDemoPage = () => {
  return (
    <div className="flex h-72 w-full justify-center">
      <Bar data={data} />
    </div>
  );
};

export default ChartDemoPage;
