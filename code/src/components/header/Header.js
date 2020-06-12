import React from 'react';
import { Route, Link } from 'react-router-dom';
import 'components/header/header.css'
import { NavBar } from 'components/NavBar';
import '../../assets/laser.jpg'



export const Header = () => (
<header>
    <NavBar />
    <img className= "header-container" src="https://filament2print.com/img/cms/blog/67/dysteel-laser-cutting.jpg" alt="laser cutting"></img>
    <img className= "header-container" src="../../assets/laser.jpg" alt="laser cutting"></img>
</header>
    
  )