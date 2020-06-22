import React from 'react';
import { Route, Link } from 'react-router-dom';
import 'components/result-navbar.css'

export const ResultNavBar = () => (

    <div className="navbar">

    {/* RESULTS */}
    <Route path="/results" exact>
      <p className="current-page">Hela projektet</p>
      <Link to="/results/sormland" exact>
        <p className="nav-hover">Sörmland</p>
      </Link>
      <Link to="/results/uppsala" exact>
        <p>Uppsala</p>
      </Link>
      <Link to="/results/vastmanland" exact>
        <p>Västmanland</p>
      </Link>
      <Link to="/results/orebro" exact>
        <p>Örebro</p>
      </Link>
      <Link to="/results/ostergotland" exact>
        <p>Östergötland</p>
      </Link>
    </Route> 

  </div>
)
