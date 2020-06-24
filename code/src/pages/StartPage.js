import React from 'react'
import 'components/cards/card-style.css'

export const StartPage  = () => {
    return (
        <article className="page-wrapper">
            <section className="card-wrapper">
                <section className="card">
                        <h1>Smart Kompetens för Industin i Östra Mellansverige</h1>
                        <p>	Den tekniska utvecklingen går snabbare än någonsin. För att svensk industri ska kunna möta nya krav och stå konkurrenskraftig även i framtiden är kompetensutveckling avgörande.</p> 

                        <p>Projekt Smart kompetens är ett projekt som erbjuder kompetensutvecklingsinsatser för cirka 70 olika industriföretag i regionerna i Östra Mellansverige: Sörmland, Uppsala, Västmanland, Örebro och Östergötland. Region Östergötland är projektägare och driver projektet tillsammans med regioner, kommuner och näringsliv i Östra Mellansverige. Smart kompetens medfinansieras av Europeiska socialfonden.</p>              
                    </section>
                    <section className="image-card">
                        <img className="image-container" src="../../assets/shutterstock_1095187235.jpg" alt="robotarm"></img>
                    </section>
                </section>
                <section className="card-wrapper">
                    <section className="image-card">
                        <img className="image-container" src="../../assets/shutterstock_269021891.jpg" alt="svarvning"></img>
                    </section>
                    <section className="card">
                        <h1>Resultat</h1>
                         <p>Smart kompetens har tagit fram utbildningsinsatser för personer som är anställda inom industrin – både personal och ledningsgrupper. Utbildningarna är anpassade utifrån det enskilda företagets specifika behov, samtidigt som de är baserade på den kompetens som efterfrågas för att kunna stärka industrin som helhet.</p>

                         <p>Samtliga utbildningar är nu avslutade och här presenteras projektets kvantitativa resultat, dvs en sammanställning av de utbildningssatser som genomförts. </p>

                    </section>
                </section>
        </article>  
    )
}
