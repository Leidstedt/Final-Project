import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { render } from "react-dom";
import { Chart } from "react-google-charts";


export const CategoryChart = () => {
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
        })
    }, [DATABASE_URL])

    const filterByVocationalTraining = data.filter((item) => { 
        return (item.category === "vocational training")}).length
      
    const filterByManagementTraining = data.filter((item) => { 
        return (item.category === "management training")}).length
 
    const filterByHorizontalPrinciples = data.filter((item) => { 
        return (item.category === "horizontal principles")}).length

    const filterByVocationalInspiration = data.filter((item) => { 
        return (item.category === "inspiration")}).length
 

const training = [
  ["Training", "Participants", { role: "style" }],
  ["Vocational Training", filterByVocationalTraining, "color: gray"],
  ["Management Training", filterByManagementTraining, "color: #76A7FA"],
  ["Horizontal Principles", filterByHorizontalPrinciples, "color: blue"],
  ["Inspiration", filterByVocationalInspiration, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
];

    return (
      <div className="App">
        <Chart chartType="BarChart" width="100%" height="400px" data={training} />
      </div>
    );
  
}
