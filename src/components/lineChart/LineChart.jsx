import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData, options }) {
  return (
    <Line
      style={{ display: "inline-block", marginTop: "20px" }}
      data={chartData}
      options={options}
    />
  );
}

export default LineChart;
