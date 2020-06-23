import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";
import '../chart-style.css'



export const AgeChartOstergotland = () => {
    const DATABASE_URL = "https://final-project-participants.herokuapp.com/participants/subproject/Ostergotland"
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
  ["Ålder", "Nr", { role: "style" }],
  ["18-28", filterByYoungPaticipants, "color: #3366cc"],
  ["29-39", filterByNotSoYoungParticipants, "color: #3366cc"],
  ["40-50", filterByMidleAgeParticipants, "color: #3366cc"],
  ["51-61", filterByNotVeryOldParticipants, "color: #3366cc"],
  ["62 +", filterByOldParticpants, "color: #3366cc"],
];

    return (
      <div className="chart-wrapper">
        <h1>Åldersfördelning för delprojektets deltagare</h1>
        <Chart chartType="Bar" width="100%" height="100%" data={ageGroups}/> 
      </div>
    );
  
}