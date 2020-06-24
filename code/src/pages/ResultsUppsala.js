import React from 'react'
import 'components/cards/card-style.css'
import { SummaryCard } from 'components/cards/SummaryCard'
import { DropDown } from 'components/dropdown/DropDown';
import { GenderChartUppsala } from 'components/charts/ChartsUppsala/GenderChartUppsala';
import { AgeChartUppsala } from 'components/charts/ChartsUppsala/AgeChartUppsala';
import { CategoryChartUppsala } from 'components/charts/ChartsUppsala/CategoryChartUppsala';



export const ResultsUppsala  = () => {
    return (
        <div>
            <article className="page-wrapper">
            <DropDown />
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Delprojekt Uppsala</h1>
                        <p>I Region Uppsala deltar industriföretag med tillverkning inom gjuteri, snabbstål, lastbilspåbyggnader, mikromotorer samt mekanik och finmekanik. Totalt medverkar fem företag som alla ser kompetensförsörjning som en strategisk fråga inför framtiden.</p>                
                    </section>
                    <section className="image-card">
                    <SummaryCard
                        title="Resultat"
                        numParticipants="Deltagare: 408"
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
                        <GenderChartUppsala />
                    </section>
                </section>
                <section className="card-wrapper">
                    <section className="card">
                        <h1>Results</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                
                    </section>
                    <section className="image-card">
                        <AgeChartUppsala />
                    </section>
                </section>
                <section className="card-wrapper">
                <section className="card">
                        <h1>Results</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                
                    </section>
                    <section className="image-card">
                        <CategoryChartUppsala />
                    </section>
                </section>
                </article>
            </article>
        </div>
    )
}