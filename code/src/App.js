import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from 'pages/GenderChart'
import { MovieDetails } from 'pages/MovieDetails'


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
