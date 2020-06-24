import React from 'react'
import 'components/cards/card-style.css'
import { SummaryCard } from 'components/cards/SummaryCard'
import { DropDown } from 'components/dropdown/DropDown';
import { GenderChartVastmanland } from 'components/charts/ChartsVastmanland/GenderChartVastmanland';
import { AgeChartVastmanland } from 'components/charts/ChartsVastmanland/AgeChartVastmanland';
import { CategoryChartVastmanland } from 'components/charts/ChartsVastmanland/CategoryChartVastmanland';



export const ResultsVastmanland  = () => {
    return (
        <div>
            <article className="page-wrapper">
            <DropDown />
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Delprojekt Västmanland</h1>
                        <p>Delprojektet drivs av Region Västmanland i samarbete med Competence, en organisation som arbetar med arbetsmarknads- och kompetensförsörjningsfrågor på både lokal och nationell nivå. I projektet deltar 28 industriföretag som ser värdet i att satsa på kompetensutveckling.</p>                
                    </section>
                    <section className="image-card">
                    <SummaryCard
                        title="Resultat"
                        numParticipants="Deltagare: 1521"
                        numCompanies="Företag: 28st"
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
                        <GenderChartVastmanland />
                    </section>
                </section>
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Results</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                
                    </section>
                    <section className="image-card">
                        <AgeChartVastmanland />
                    </section>
                </section>
                <section className="card-wrapper">
                <section className="card">
                        <h1>Results</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                
                    </section>
                    <section className="image-card">
                        <CategoryChartVastmanland />
                    </section>
                </section>
                </article>
            </article>
        </div>
    )
}