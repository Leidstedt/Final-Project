import React from 'react'
import { GenderChart } from 'components/charts/GenderChart'
import { CategoryChart } from 'components/charts/CategoryChart';
import 'components/card-style.css'
import { AgeChart } from 'components/charts/AgeChart'
import { SummaryCard } from 'components/SummaryCard'


export const ResultsUppsala  = () => {
    return (
    
    <div>
        <article className="card-wrapper">
            <section className="card">
            <h1>Delprojekt Uppsala</h1>
                <section className="summary-card-wrapper">
                    <p>I Region Uppsala deltar industriföretag med tillverkning inom gjuteri, snabbstål, lastbilspåbyggnader, mikromotorer samt mekanik och finmekanik. Totalt medverkar fem företag som alla ser kompetensförsörjning som en strategisk fråga inför framtiden.</p>
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