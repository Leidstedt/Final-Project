import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";
import '../chart-style.css'



export const CategoryChartVastmanland = () => {
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
  
      const sumERP_IT = data.reduce((acc, item) => acc + item.ERP_IT, 0);
      const sumHorizontal_principles = data.reduce((acc, item) => acc + item.horizontal_principles, 0);
      const sumManagement = data.reduce((acc, item) => acc + item.management, 0);
      const sumBusiness_intelligence = data.reduce((acc, item) => acc + item.business_intelligence, 0);
      const sumVocational_training = data.reduce((acc, item) => acc + item.vocational_training, 0);

const training = [
  ["Utbildning", "Timmar", { role: "style" }],
      ["ERP och IT ", sumERP_IT, "color: #3366cc"],
      ["Horisontella principer ", sumHorizontal_principles, "color: #3366cc"],
      ["Ledarskap ", sumManagement, "color: #3366cc"],
      ["Business intelligence", sumBusiness_intelligence, "color: #3366cc"],
      ["Yrkesutbildning ", sumVocational_training, "color: #3366cc"]
];

    return (
      <div className="chart-wrapper">
        <h1>Antal utbildningstimmar uppdelat i olika utbildningskategorier</h1>
        <Chart chartType="Bar" width="100%" height="100%" data={training}/>
      </div>
    );
  
}
