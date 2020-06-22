import React from 'react';
import { Route, Link } from 'react-router-dom';
import 'components/dropdown.css'


export const DropDown = () => (

    
    <div class="dropdown">
    <button class="dropbtn">Visa resultat för</button>
    <div class="dropdown-content">
    <a hre f="#">Hela projektet</a>
    <Link to="results/sormland" exact>
        <p>Sörmland</p>
    </Link>
    <a href="#">Sörmland</a>
    <a href="#">Uppsala</a>
    <a href="#">Västmanland</a>
    <a href="#">Örebro</a>
    <a href="#">Östergötland</a>
   
    
    </div>
  </div>

  )



