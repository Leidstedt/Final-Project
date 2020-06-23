import React from 'react'
import 'components/card-style.css'
import { SummaryCard } from 'components/SummaryCard'
import { DropDown } from 'components/DropDown';
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
                        <p>I Region Sörmland är det Vuxenutbildningen i Eskilstuna kommun som har drivit projektet. Totalt deltog fem elektronikföretag som vill satsa på kompetensförsörjning och utveckling av sin personal.</p>                
                    </section>
                    <section className="image-card">
                    <SummaryCard
                        title="Resultat"
                        numParticipants="Deltagare: xxxxx"
                        numCompanies="Företag: xxxxx"
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