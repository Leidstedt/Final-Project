import React from 'react'
import 'components/cards/card-style.css'
import { TimeLine } from 'components/charts/TimeLine';

export const AboutPage  = () => {
    return (
        <article className="page-wrapper">
            <section className="card-wrapper">
                <section className="card">
                        <h1>Att driva ett ESF-projekt</h1>
                            <p>	Smart kompetens finansieras av Europeiska socialfonden som är en av EU:s strukturfonder. Syftet med strukturfonderna är att stärka medlemsländernas ekonomi och sociala sammanhållning samt minska skillnader i välstånd och levnadsstandard. Europeiska socialfonden är EU:s främsta verktyg för att främja sysselsättningen i Europa.</p>         
                </section>
                <section className="image-card">
                        <img className="image-container" src="../../assets/shutterstock_604448168.jpg" alt="EU-flaggor"></img>
                </section>
            </section>
            <section className="card-wrapper">
                    <section className="card">
                        <h1>Tidsramar</h1>
                            <p>Projektet Smart kompetens startade i september 2018. Projektet är, liksom alla ESF-projekt, uppdelat i tre olika faser.</p> 
                            <p>Under projektets 6 första månader, den så kallade analysfasen, gnomfördes kompetensanalyser för samtliag deltagare i projektet för att möjliggöra så träffsäkra utbildningar som möjligt.</p>
                            <p>Från mars 2019 till maj 2020 har samtliga utbildningar genmförts.</p>
                            <p>Under juni, juli augusti 2020 samlas resultaten in och projketet utvärderas.</p>
                    </section>
                    <section className="image-card">
                            <TimeLine />
                    </section>
                </section>
        </article>  
    )
}
