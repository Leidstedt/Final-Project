import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GenderChart } from 'components/charts/GenderChart'
import { StartPage } from './pages/StartPage'
import { AboutPage } from './pages/AboutPage'
import { Results } from './pages/Results'
import { Stories } from './pages/Stories'
import { NavBar } from './components/NavBar'
import { Footer } from 'components/Footer'
//import './app.css'


export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" exact>
            <StartPage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/results" exact>
            <Results />
          </Route>
          <Route path="/stories" exact>
            <Stories />
          </Route>
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  )
}