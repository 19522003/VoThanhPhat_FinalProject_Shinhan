import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData, options }) {
  return (
    <Bar
      style={{ display: "inline-block", marginTop: "20px" }}
      data={chartData}
      options={options}
    />
  );
}

export default BarChart;
