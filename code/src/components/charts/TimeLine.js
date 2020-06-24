import React from "react";
import Chart from "react-google-charts";
import './chart-style.css'

export const TimeLine = () => {
const columns = [
  { type: "string", id: "president" },
  { type: "date", id: "Start" },
  { type: "date", id: "End" }
];

const rows = [
  ["Analysfas", new Date(2018, 8, 1), new Date(2019, 1, 28)],
  ["Genomförandefas", new Date(2019, 2, 1), new Date(2020, 4, 31)],
  ["Avslut", new Date(2020, 5, 1), new Date(2020, 7, 31)]
];

    return (
      <div className="chart-wrapper">
        <Chart
          chartType="Timeline"
          data={[columns, ...rows]}
          width="100%"
          height="100%"
        />
      </div>
    );
  
}