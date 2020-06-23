import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";
import '../chart-style.css'


export const GenderChartVastmanland = () => {
    const DATABASE_URL = "https://final-project-participants.herokuapp.com/participants/subproject/Vastmanland"
    const [data, setData] = useState ([])
    

useEffect(() => {
    fetch(DATABASE_URL)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setData(data)
          console.log(data)
        })
    }, [DATABASE_URL])

    const filterByMale = data.filter((item) => { 
      return (item.gender === "Man")}).length

    const filterByFemale = data.filter((item) => {
      return (item.gender === "Kvinna")}).length

const pieOptions = {
    title: "Gender",
    pieHole: 0,
    slices: [
      { color: "F26419"},
      { color: "#3366cc"},
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
      right: 0,
      top: 0,
      width: "100%",
      height: "80%"
    },
    fontName: "Roboto"
  };

      return (
        <div>
          <h1>Andel kvinnor respektive män som deltagit i delprojektet</h1>
          <Chart
            chartType="PieChart"
            data={[["Gender", "Weight"], ["Män", filterByMale], ["Kvinnor", filterByFemale]]}
            options={pieOptions}
            graph_id="PieChart"
            width={"100%"}
            height={"400px"}
            legend_toggle
          />
        </div>
      );
}