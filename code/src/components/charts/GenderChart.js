import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { render } from "react-dom";
import { Chart } from "react-google-charts";


export const GenderChart = () => {
    const DATABASE_URL = "https://elin-testdatabase.herokuapp.com/participants"
    const [data, setData] = useState ([])
    

useEffect(() => {
    fetch(DATABASE_URL)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setData(data)
          console.log(data)
          //setNumMale(data.filter(item.male=> === male).length
          //setNumFemale(data.filter(item.female=> === female).length
        })
    }, [DATABASE_URL])

    const filterByMale = data.filter((item) => { 
      return (item.male_or_female === "male")}).length

    const filterByFemale = data.filter((item) => {
      return (item.male_or_female === "female")}).length

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

      return (
        <div>
          <Chart
            chartType="PieChart"
            data={[["Age", "Weight"], ["male", filterByMale], ["female", filterByFemale]]}
            options={pieOptions}
            graph_id="PieChart"
            width={"100%"}
            height={"400px"}
            legend_toggle
          />
        </div>
      );
}