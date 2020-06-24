import React from 'react';
import { Route, Link } from 'react-router-dom';
import 'components/navbar/navbar.css'

export const NavBar = () => (

  <header className="navbar">

    {/* HOMEPAGE */}
    <Route path="/" exact>
      <p className="current-page">Start</p>
      <Link to="/about" exact>
        <p className="nav-hover">Om projektet</p>
      </Link>
      <Link to="/results" exact>
        <p>Resultat</p>
      </Link>
      <Link to="/stories" exact>
        <p>Stories</p>
      </Link>
    </Route>


    {/* ABOUT */}
    <Route path="/about">
      <Link to="/" exact>
        <p>Start</p>
      </Link>
      <p className="current-page">About</p>
      <Link to="/results" exact>
        <p>Results</p>
      </Link>
      <Link to="/stories" exact>
        <p>Stories</p>
      </Link>
    </Route>

    {/* RESULTS */}
    <Route path="/results">
    <Link to="/" exact>
        <p>Start</p>
      </Link>
      <Link to="/about" exact>
        <p>About</p>
      </Link>
      <p className="current-page">Results</p>
      <Link to="/stories" exact>
        <p>Stories</p>
      </Link>
    </Route>

    {/* STORIES */}
    <Route path="/stories">
      <Link to="/" exact>
        <p>Start</p>
      </Link>
      <Link to="/about" exact>
        <p>About</p>
      </Link>
      <Link to="/results" exact>
        <p>Results</p>
      </Link>
      <p className="current-page">Stories</p>
    </Route>
  </header>
)