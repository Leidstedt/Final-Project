import React from 'react';
import 'components/header/header.css'
import { NavBar } from 'components/NavBar';
import laser from '../../assets/laser.jpg'

export const Header = () => (
    <header>
        <NavBar />
        <img className= "header-container" src="laser" alt="laser cutting"></img>
    </header>
)