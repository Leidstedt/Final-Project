import React from 'react';
import { Route, Link } from 'react-router-dom';
import 'components/buttons.css'

export const Buttons = () => (

    <div className="button-container">
       <Route path="/results" exact>
                <button className="button">Hela projektet</button>
            <Link to="/results/sormland" exact>
                <button className="button">Sörmland</button>
            </Link>
            <Link to="/results/uppsala" exact>
                <button className="button">Uppsala</button>
            </Link>
            <Link to="/results/vastmanland" exact>
                <button className="button">Västmanland</button>
            </Link>
          <Link to="/results/orebro" exact>
                <button className="button">Örebro</button>
            </Link>
          <Link to="/results/ostergotland" exact>
                <button className="button">Östergötland</button>
          </Link>
      </Route> 

  </div>
)
