import React from 'react';
import { Route, Link } from 'react-router-dom';
import 'components/header/header.css'
import { NavBar } from 'components/NavBar';



export const Header = () => (
<header>
    <NavBar />
    <img className= "header-container" src="https://filament2print.com/img/cms/blog/67/dysteel-laser-cutting.jpg" alt="laser cutting"></img>
</header>
    
  )