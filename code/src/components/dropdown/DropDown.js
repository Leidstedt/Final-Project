import React from 'react';
import { Link } from 'react-router-dom';
import 'components/dropdown/drop-down.css'

export const DropDown = () => (
    <section className="result-navbar-container"> 
        <div className="result-navbar"> 
        <div class="dropdown">
                <button className="dropbtn">Välj delprojekt ↓ </button>
                <div className="dropdown-content">
                        <Link to="/results" exact>
                            <p>Hela projektet</p>
                        </Link>
                        <Link to="/results/sormland" exact>
                            <p>Sörmland</p>
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
                </div>
            </div>
        </div>            
    </section>  
)





 
  