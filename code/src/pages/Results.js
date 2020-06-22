import React from 'react'
import { GenderChart } from 'components/charts/GenderChart'
import { CategoryChart } from 'components/charts/CategoryChart';
import 'components/card-style.css'
import { AgeChart } from 'components/charts/AgeChart'
import { Buttons } from 'components/Buttons';



export const Results  = () => {
    return (
    
    <div>
        
        <article className="card-wrapper">
        <Buttons />
            <section className="card">
                
                
                <h1>Results</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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