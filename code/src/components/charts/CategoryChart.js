import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";


export const CategoryChart = () => {
    const DATABASE_URL = "https://final-project-participants.herokuapp.com/participants"
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
  
      const sumERP_IT = data.reduce((acc, item) => acc + item.ERP_IT, 0);
      const sumHorizontal_principles = data.reduce((acc, item) => acc + item.horizontal_principles, 0);
      const sumManagement = data.reduce((acc, item) => acc + item.management, 0);
      const sumBusiness_intelligence = data.reduce((acc, item) => acc + item.business_intelligence, 0);
      const sumVocational_training = data.reduce((acc, item) => acc + item.vocational_training, 0);

const training = [
  ["Utbildning", "Utbildningstimmar", { role: "style" }],
  ["ERP och IT", sumERP_IT, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
  ["Horisontella principer", sumHorizontal_principles, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
  ["Ledarskap", sumManagement, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
  ["Omvärldskunskap och medarbetarskap", sumBusiness_intelligence, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
  ["Yrkesutbildning", sumVocational_training, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"]
];

    return (
      <div className="App">
        <Chart chartType="BarChart" width="100%" height="400px" data={training} />
      </div>
    );
  
}
