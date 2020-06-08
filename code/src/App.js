import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GenderChart } from 'pages/GenderChart'



export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <GenderChart />
        </Route>
      </Switch>
    </BrowserRouter>

    
  )
}
