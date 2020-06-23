import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StartPage } from './pages/StartPage'
import { AboutPage } from './pages/AboutPage'
import { Results } from './pages/Results'
import { ResultsSormland } from './pages/ResultsSormland'
import { ResultsUppsala } from './pages/ResultsUppsala'
import { ResultsVastmanland } from './pages/ResultsVastmanland'
import { ResultsOrebro } from './pages/ResultsOrebro'
import { ResultsOstergotland } from './pages/ResultsOstergotland'
import { Stories } from './pages/Stories'
import { Header } from './components/header/Header'
import { Footer } from 'components/footer/Footer'
//import './app.css'


export const App = () => {
  return (
    <BrowserRouter>
      <Header />
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
          <Route path="/results/sormland" exact>
              <ResultsSormland />
          </Route>
          <Route path="/results/uppsala" exact>
              <ResultsUppsala />
          </Route>
          <Route path="/results/vastmanland" exact>
              <ResultsVastmanland />
          </Route>
          <Route path="/results/orebro" exact>
              <ResultsOrebro />
          </Route>
          <Route path="/results/ostergotland" exact>
              <ResultsOstergotland />
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