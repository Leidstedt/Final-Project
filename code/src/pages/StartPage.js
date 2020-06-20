import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { render } from "react-dom";
import { Chart } from "react-google-charts";
import 'components/card-style.css'

export const StartPage  = () => {
    return (
        <article className="card-wrapper">
            <section className="first-card">
                <h1>Good morning sunshine!</h1>
                <p>	Den tekniska utvecklingen går snabbare än någonsin. För att svensk industri ska kunna möta nya krav och stå konkurrenskraftig även i framtiden är kompetensutveckling avgörande. 

Projekt Smart kompetens är ett projekt som erbjuder kompetensutvecklingsinsatser för cirka 70 olika industriföretag i regionerna i Östra Mellansverige: Sörmland, Uppsala, Västmanland, Örebro och Östergötland. Region Östergötland är projektägare och driver projektet tillsammans med regioner, kommuner och näringsliv i Östra Mellansverige. Smart kompetens medfinansieras av Europeiska socialfonden.</p>
            </section>
        </article>

        
    )
}
