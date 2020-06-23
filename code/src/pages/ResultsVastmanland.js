import React from 'react'
import { GenderChart } from 'components/charts/GenderChart'
import { CategoryChart } from 'components/charts/CategoryChart';
import 'components/card-style.css'
import { AgeChart } from 'components/charts/AgeChart'
import { SummaryCard } from 'components/SummaryCard'


export const ResultsVastmanland  = () => {
    return (
    
    <div>
        <article className="card-wrapper">
            <section className="card">
            <h1>Delprojekt Västmanland</h1>
                <section className="summary-card-wrapper">
                    <p>Region Örebro läns delprojekt drivs i huvudsak av Karlskoga kommun tillsammans med Yrkeshögskolan. Kommunen samverkar med ett 20-tal industriföretag från olika branscher i Örebro län som ser kompetensförsörjning som en viktig fråga inför framtiden.</p>
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