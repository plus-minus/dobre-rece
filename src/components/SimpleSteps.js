import React from "react";
import {Link} from "react-router-dom";
import "../scss/SimpleSteps.scss";

function SimpleSteps() {
    return (
        <section id="home-simpleSteps">
            <h1>Wystarczą 4 proste kroki</h1>
            <article className="steps">
                <div className="step">
                    <div className="step-img shirt"></div>
                    <p className="step-desc">Wybierz rzeczy</p>
                    <p className="step-tip">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="step">
                    <div className="step-img bag"></div>
                    <p className="step-desc">Spakuj je</p>
                    <p className="step-tip">skorzystaj z worków na śmieci</p>
                </div>
                <div className="step">
                    <div className="step-img zoom"></div>
                    <p className="step-desc">Zdecyduj komu chcesz pomóc</p>
                    <p className="step-tip">wybierz zaufane miejsce</p>
                </div>
                <div className="step">
                    <div className="step-img order"></div>
                    <p className="step-desc">Zamów kuriera</p>
                    <p className="step-tip">kurier przyjedzie w dogodnym terminie</p>
                </div>

            </article>
            <Link to="/oddaj-rzeczy">Oddaj<br/>rzeczy</Link>
        </section>
    );
}

export default SimpleSteps;