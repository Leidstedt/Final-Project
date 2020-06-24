import React from 'react'
import 'components/cards/card-style.css'
import { SummaryCard } from 'components/cards/SummaryCard'
import { DropDown } from 'components/dropdown/DropDown';
import { GenderChartOstergotland } from 'components/charts/ChartsOstergotland/GenderChartOstergotland';
import { AgeChartOstergotland } from 'components/charts/ChartsOstergotland/AgeChartOstergotland';
import { CategoryChartOstergotland } from 'components/charts/ChartsOstergotland/CategoryChartOstergotland';



export const ResultsOstergotland  = () => {
    return (
        <div>
            <article className="page-wrapper">
            <DropDown />
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Delprojekt Östergötland</h1>
                        <p>Östergötlands delprojekt drivs av Skill, ett bolag som ägs av industriföretag, kommuner och Region Östergötland. I Östergötland medverkar åtta olika företag som tycker ser kompetensutveckling som en nyckel för att stärka både personalen och företaget i stort.</p>                
                    </section>
                    <section className="image-card">
                    <SummaryCard
                        title="Resultat"
                        numParticipants="Deltagare: 1081"
                        numCompanies="Företag: 8st"
                        >
                        </SummaryCard>
                    </section>
                </section>
                <article>
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Könsfördelning</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                
                    </section>
                    <section className="image-card">
                        <GenderChartOstergotland />
                    </section>
                </section>
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Results</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                
                    </section>
                    <section className="image-card">
                        <AgeChartOstergotland />
                    </section>
                </section>
                <section className="card-wrapper">
                <section className="card">
                        <h1>Results</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                
                    </section>
                    <section className="image-card">
                        <CategoryChartOstergotland />
                    </section>
                </section>
                </article>
            </article>
        </div>
    )
}