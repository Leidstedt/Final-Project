import React from 'react'
import 'components/cards/card-style.css'
import { SummaryCard } from 'components/cards/SummaryCard'
import { DropDown } from 'components/dropdown/DropDown';
import { GenderChartSormland } from 'components/charts/ChartsSormland/GenderChartSormland';
import { AgeChartSormland } from 'components/charts/ChartsSormland/AgeChartSormland';
import { CategoryChartSormland } from 'components/charts/ChartsSormland/CategoryChartSormland';



export const ResultsSormland  = () => {
    return (
        <div>
            <article className="page-wrapper">
            <DropDown />
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Delprojket Sörmland</h1>
                        <p>I Region Sörmland är det Vuxenutbildningen i Eskilstuna kommun som har drivit projektet. Totalt deltog fem elektronikföretag som vill satsa på kompetensförsörjning och utveckling av sin personal.</p>                
                    </section>
                    <section className="image-card">
                    <SummaryCard
                        title="Resultat"
                        numParticipants="Deltagare: 216"
                        numCompanies="Företag: 5 st"
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
                        <GenderChartSormland />
                    </section>
                </section>
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Results</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                
                    </section>
                    <section className="image-card">
                        <AgeChartSormland />
                    </section>
                </section>
                <section className="card-wrapper">
                <section className="card">
                        <h1>Results</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                
                    </section>
                    <section className="image-card">
                        <CategoryChartSormland />
                    </section>
                </section>
                </article>
            </article>
        </div>
    )
}