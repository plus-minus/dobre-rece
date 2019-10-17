import React from "react";
import Navigation from "./Navigation";
import "../scss/Login.scss";
import {Link} from "react-router-dom";

function Login() {
    return (
        <div id="view-login">
            <Navigation/>
            
            <div className="form">
                <h1>Zaloguj się</h1>
                <form>
                    <div className="inputs">

                    <label>Email</label>
                    <input type="email"/>
                        <label>Hasło</label>
                        <input type="password" />
                </div>
                <div className="buttons">
                        <button><Link to="/rejestracja">Załóż konto</Link></button>
                    <button className="active">Zaloguj się</button>
                </div>
                </form>
            </div>
            
        </div>
    );
}

export default Login