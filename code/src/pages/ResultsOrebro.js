import React from 'react'
import 'components/cards/card-style.css'
import { SummaryCard } from 'components/cards/SummaryCard'
import { DropDown } from 'components/dropdown/DropDown';
import { GenderChartOrebro } from 'components/charts/ChartsOrebro/GenderChartOrebro';
import { AgeChartOrebro } from 'components/charts/ChartsOrebro/AgeChartOrebro';
import { CategoryChartOrebro } from 'components/charts/ChartsOrebro/CategoryChartOrebro';



export const ResultsOrebro  = () => {
    return (
        <div>
            <article className="page-wrapper">
            <DropDown />
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Delprojekt Örebro</h1>
                        <p>Region Örebro läns delprojekt drivs i huvudsak av Karlskoga kommun tillsammans med Yrkeshögskolan. Kommunen samverkar med ett 20-tal industriföretag från olika branscher i Örebro län som ser kompetensförsörjning som en viktig fråga inför framtiden.</p>                
                    </section>
                    <section className="image-card">
                    <SummaryCard
                        title="Resultat"
                        numParticipants="Deltagare: 2157"
                        numCompanies="Företag: 21 st"
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
                        <GenderChartOrebro />
                    </section>
                </section>
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Results</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                
                    </section>
                    <section className="image-card">
                        <AgeChartOrebro />
                    </section>
                </section>
                <section className="card-wrapper">
                <section className="card">
                        <h1>Results</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                
                    </section>
                    <section className="image-card">
                        <CategoryChartOrebro />
                    </section>
                </section>
                </article>
            </article>
        </div>
    )
}