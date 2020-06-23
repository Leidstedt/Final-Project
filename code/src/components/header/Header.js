import React from 'react';
import 'components/header/header.css'
import { NavBar } from 'components/NavBar';


export const Header = () => (
    <header>
        <NavBar />
        <img className= "header-container" src="../../assets/laser.jpg" alt="laser cutting"></img>
    </header>
)