import React from "react";
import "../scss/Navigation.scss";
import { Link } from "react-router-dom";


function Navigation(){
    return (
        <nav>
            <div className="auth">
                <span><Link to="/logowanie">Zaloguj</Link></span>
                <span><Link to="/rejestracja">Załóż konto</Link></span>
            </div>
            <ul className="menu">
                <li><Link to="/">Start</Link></li>
                <li>O co chodzi?</li>
                <li>O nas</li>
                <li>Fundacje i organizacje</li>
                <li>Kontakt</li>
            </ul>
        </nav>
    );
}


export default Navigation;