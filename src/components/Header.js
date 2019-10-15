import React from "react";
import "../scss/Header.scss";
import Navigation from "./Navigation";
import {Link} from "react-router-dom";


function Header(){
    return (
        <header id="home-header">
            <div className="hero-image">
            </div>
            <section className="hero-info">
                <Navigation/>
                <article>
                    <h1>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <div className="cta">
                        <Link to="/oddaj-rzeczy">Oddaj<br/>rzeczy</Link>
                        <Link to="/oddaj-rzeczy">Zorganizuj<br/>zbiórkę</Link>
                    </div>
                </article>
            </section>

        </header>
    );
}

export default Header;