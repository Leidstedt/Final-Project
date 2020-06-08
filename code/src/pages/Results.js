import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { render } from "react-dom";
import { Chart } from "react-google-charts";
import { GenderChart } from 'components/charts/GenderChart'

export const Results  = () => {
    return (
    
    <div>
        <h1>Results!</h1>
          <GenderChart/>
    </div>
    )
}