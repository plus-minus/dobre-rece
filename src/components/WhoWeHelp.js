import React from "react";
import "../scss/WhoWeHelp.scss";

class WhoWeHelp extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: "loc" //fou/org/loc
        };

        this.changeTab = this.changeTab.bind(this);
    }

    componentDidMount(){

        fetch("/foundations", {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error(err))

    }

    changeTab(e){
        const el = e.target;
        this.setState({
            selected: el.id
        });


    }
    render() {
        return (
            <section id="home-whoWeHelp">
                <h1>Komu pomagamy?</h1>
                <ul className="tabs">
                    <li id="fou" className={this.state.selected === "fou"? "tab selected" : "tab"}
                    onClick={this.changeTab}
                    >Fundacjom</li>
                    <li id="org" className={this.state.selected === "org" ? "tab selected" : "tab"}
                        onClick={this.changeTab}
                        >Organizacjom pozarządowym</li>
                    <li  id="loc" className={this.state.selected === "loc" ? "tab selected" : "tab"}
                        onClick={this.changeTab}
                        >Lokalnym zbiórkom</li>
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
                        <hr />
                        <li className="foundation">
                            <div>
                                <h3 className="fundName">Fundacja “Dla dzieci”</h3>
                                <p className="goal">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                            </div>
                            <div className="What">ubrania, meble, zabawki</div>
                        </li>
                        <hr />
                        <li className="foundation">
                            <div>
                                <h3 className="fundName">Fundacja “Bez domu”</h3>
                                <p className="goal">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                            </div>
                            <div className="What">ubrania, jedzenie, ciepłe koce</div>
                        </li>
                        <hr />
                    </ul>
                </div>
            </section>
        );
    }

}

export default WhoWeHelp;