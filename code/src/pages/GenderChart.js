import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { render } from "react-dom";
import { Chart } from "react-google-charts";


export const GenderChart = () => {
    const [gender, setGender] = useState ([])

useEffect(() => {
    fetch(`https://elin-testdatabase.herokuapp.com/participants`)
        .then((res) => res.json())
        .then((json) => {
        setGender(json.results)
        })
    }, [])

const pieOptions = {
    title: "Gender",
    pieHole: 0,
    slices: [
      {
        color: "#2BB673"
      },
      {
        color: "#d91e48"
      },
      {
        color: "#007fad"
      },
      {
        color: "#e9a227"
      }
    ],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14
      }
    },
    tooltip: {
      showColorCode: true
    },
    chartArea: {
      left: 0,
      top: 0,
      width: "100%",
      height: "80%"
    },
    fontName: "Roboto"
  };

  class App extends React.Component {
    state = {
      chartImageURI: ""
    };
    render() {
      return (
        <div>
          <Chart
            chartType="PieChart"
            data={[["Age", "Weight"], ["a", 12], ["b", 5.5]]}
            options={pieOptions}
            graph_id="PieChart"
            width={"100%"}
            height={"400px"}
            legend_toggle
          />
        </div>
      );
    }
  }
}