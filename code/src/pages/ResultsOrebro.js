import React from 'react'
import { GenderChart } from 'components/charts/GenderChart'
import { CategoryChart } from 'components/charts/CategoryChart';
import 'components/card-style.css'
import { AgeChart } from 'components/charts/AgeChart'
import { SummaryCard } from 'components/SummaryCard'


export const ResultsOrebro  = () => {
    return (
    
    <div>
        <article className="card-wrapper">
            <section className="card">
            <h1>Delprojekt Örebro</h1>
                <section className="summary-card-wrapper">
                    <p>I Region Sörmland är det Vuxenutbildningen i Eskilstuna kommun som har drivit projektet. Totalt deltog fem elektronikföretag som vill satsa på kompetensförsörjning och utveckling av sin personal.</p>
                    <SummaryCard
                    title="Resultat"
                    numParticipants="- xxxxxxx deltagare"
                    numCompanies="- 5 företag"
                    >
                    </SummaryCard>
                </section>
            </section>
            <section className="card">
                <GenderChart/>
            </section>
            <section className="card">
                <AgeChart />
            </section>
            <section className="card">
                <CategoryChart />
            </section>
        </article>
    </div>
    )
}