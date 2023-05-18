import React from "react";
import {
  Chart as ChartJs,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(BarElement, LinearScale, CategoryScale, Tooltip, Legend);
const ResultsChart = () => {
  const data = {
    labels: ["Math", "Phy", "Chem", "Bio", "ICT/SM", "GP"],
    datasets: [
      {
        label: "Beginning of Term",
        data: [9, 8.4, 7.3, 9.4, 7.5, 8.6],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: "1px",
      },
      {
        label: "Beginning of Time",
        data: [7, 6.4, 7.3, 4.4, 6.5, 6.6],
        backgroundColor: "red",
        borderColor: "black",
        borderWidth: "1px",
      },
    ],
  };
  const options = {};
  return (
    <div>
      <div className="header">Results Chart</div>
      <div className="chart">
        <Bar
          style={{ padding: "20px", width: "60%" }}
          data={data}
          options={options}
        ></Bar>
      </div>
    </div>
  );
};

export default ResultsChart;
