import React from 'react'
import 'components/card-style.css'
import { TimeLine } from 'components/charts/TimeLine';

export const AboutPage  = () => {
    return (
    <article className="card-wrapper">
        <section className="card">
            <h1>About...</h1>
            <p>	Smart kompetens är ett EU-finansierat projekt för att stärka industrin genom kompetensutveckling. Totalt deltar cirka 70 industriföretag i regionerna som tillhör Östra Mellansverige: Sörmland, Västmanland, Uppsala, Örebro och Östergötland. Region Östergötland driver projektet tillsammans med regioner, kommuner och näringsliv i Östra Mellansverige. Den svenska tillverkningsindustrin upplever stora förändringar. Tekniker som automatisering och artificiell intelligens innebär många nya möjligheter. Men den snabba utvecklingen ställer också nya krav på kompetens om företagen ska kunna vara konkurrenskraftiga även i framtiden. 
            Många industriföretag har svårt att hitta den kompetens som krävs. För att Sverige ska vara en stark industrination även i framtiden måste vi hitta långsiktiga och hållbara lösningar som ger företagen rätt kompetens.</p>

            <h2>Hur möter vi utmaningarna?</h2>
            <p>Smart kompetens tar fram utbildningsinsatser för personer som är anställda inom industrin – både personal och ledningsgrupper. Utbildningarna är anpassade utifrån det enskilda företagets specifika behov, samtidigt som de är baserade på den kompetens som efterfrågas för att kunna stärka industrin som helhet.</p>
        </section>
        <section className="card">
            <TimeLine />
        </section>
    </article>
    )
}
