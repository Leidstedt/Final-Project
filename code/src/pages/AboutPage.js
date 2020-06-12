import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { render } from "react-dom";
import { Chart } from "react-google-charts";
import 'components/card-style.css'
import { TimeLine } from 'components/charts/TimeLine';

export const AboutPage  = () => {
    return (
    <article className="card-wrapper">
        <section className="first-card">
            <h1>About...</h1>
            <p>	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <section className="first-card">
            <TimeLine />
        </section>
    </article>
    )
}
