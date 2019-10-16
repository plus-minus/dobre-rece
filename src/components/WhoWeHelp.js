import React from "react";
import "../scss/WhoWeHelp.scss";

function WhoWeHelp() {
    return (
        <section id="home-whoWeHelp">
            <h1>Komu pomagamy?</h1>
            <ul className="tabs">
                <li className="tab active">Fundacjom</li>
                <li className="tab">Organizacjom pozarządowym</li>
                <li className="tab">Lokalnym zbiórkom</li>
            </ul>
            <div className="tab-content">
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <ul className="foundations">
                    <li className="foundation">
                        <div>
                            <h3 className="fundName">Fundacja “Dbam o Zdrowie”</h3>
                            <p className="goal">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        </div>
                        <div className="What">ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
                    </li>
                    <hr/>
                    <li className="foundation">
                        <div>
                            <h3 className="fundName">Fundacja “Dla dzieci”</h3>
                            <p className="goal">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                        </div>
                        <div className="What">ubrania, meble, zabawki</div>
                    </li>
                    <hr/>
                    <li className="foundation">
                        <div>
                            <h3 className="fundName">Fundacja “Bez domu”</h3>
                            <p className="goal">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                        </div>
                        <div className="What">ubrania, jedzenie, ciepłe koce</div>
                    </li>
                    <hr/>
                </ul>
            </div>
        </section>
    );
}

export default WhoWeHelp;