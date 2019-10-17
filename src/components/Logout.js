import React from "react";
import Navigation from "./Navigation";
import "../scss/Login.scss";
import { Link } from "react-router-dom";

function Logout() {
    return (
        <div id="view-logout">
            <Navigation />

            <div className="form">
                <h1>Wylogowanie nastąpiło<br/>pomyślnie!</h1>
                <form>
                    <div></div>
                    <div className="buttons">
                        <button className="active"><Link to="/">Strona głowna</Link></button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Logout;