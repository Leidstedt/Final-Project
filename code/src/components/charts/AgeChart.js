import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { render } from "react-dom";
import { Chart } from "react-google-charts";


export const AgeChart = () => {
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

    const filterByYoungPaticipants = data.filter((item) => { 
        return (item.birthyear >= 1992 )}).length
      
    const filterByNotSoYoungParticipants = data.filter((item) => { 
        return (item.birthyear <= 1991 && item.birthyear >= 1981)}).length
 
    const filterByMidleAgeParticipants = data.filter((item) => { 
        return (item.birthyear <= 1980 && item.birthyear >= 1970)}).length

    const filterByNotVeryOldParticipants = data.filter((item) => { 
        return (item.birthyear <= 1969 && item.birthyear >= 1959)}).length

    const filterByOldParticpants = data.filter((item) => { 
        return (item.birthyear <= 1958)}).length
 

const ageGroups = [
  ["Age", "Participants", { role: "style" }],
  ["18-28", filterByYoungPaticipants, "color: gray"],
  ["29-39", filterByNotSoYoungParticipants, "color: #76A7FA"],
  ["40-50", filterByMidleAgeParticipants, "color: blue"],
  ["51-61", filterByNotVeryOldParticipants, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
  ["62 +", filterByOldParticpants, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
];

    return (
      <div className="App">
        <Chart chartType="Bar" width="100%" height="400px" data={ageGroups} />
      </div>
    );
  
}