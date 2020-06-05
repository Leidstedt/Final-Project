import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Genderchart } from 'pages/GenderChart'



export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Genderchart />
        </Route>
      </Switch>
    </BrowserRouter>

    
  )
}
