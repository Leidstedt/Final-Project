import React from 'react'
import { GenderChart } from 'components/charts/GenderChart'
import { CategoryChart } from 'components/charts/CategoryChart';
import 'components/card-style.css'
import { AgeChart } from 'components/charts/AgeChart'
import { SummaryCard } from 'components/SummaryCard'


export const ResultsOstergotland  = () => {
    return (
    
    <div>
        <article className="card-wrapper">
            <section className="card">
            <h1>Delprojekt Östergötland</h1>
                <section className="summary-card-wrapper">
                    <p>Östergötlands delprojekt drivs av Skill, ett bolag som ägs av industriföretag, kommuner och Region Östergötland. I Östergötland medverkar åtta olika företag som tycker ser kompetensutveckling som en nyckel för att stärka både personalen och företaget i stort.</p>
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