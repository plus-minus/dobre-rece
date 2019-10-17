import React from "react";
import "../scss/Navigation.scss";
import { Link } from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";

function Navigation(){
    return (
        <nav>
            <div className="auth">
                <span><Link to="/logowanie">Zaloguj</Link></span>
                <span><Link to="/rejestracja">Załóż konto</Link></span>
            </div>
            <ul className="menu">
                <li><Link to="/" >Start</Link></li>
                <li><ScrollLink to="home-simpleSteps" spy={true} smooth={true} duration={500} >O co chodzi?</ScrollLink> </li>
                <li><ScrollLink to="home-about" spy={true} smooth={true} duration={500} >O nas</ScrollLink></li>
                <li><ScrollLink to="home-whoWeHelp" spy={true} smooth={true} duration={500} >Fundacje i organizacje</ScrollLink></li>
                <li><ScrollLink to="home-contact" spy={true} smooth={true} offset={100} duration={500} >Kontakt</ScrollLink></li>
            </ul>
        </nav>
    );
}


export default Navigation;