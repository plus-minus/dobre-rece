import React from "react";
import "../scss/WhoWeHelp.scss";

class WhoWeHelp extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: "loc", //fou/org/loc
            founds: [],
            orgs: [],
            local:[]
        };

        this.changeTab = this.changeTab.bind(this);
    }

    componentDidMount() {

        fetch("http://localhost:3001/foundations", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    founds: json
                })
            })
            .catch(err => console.error(err))

    }

    changeTab(e) {
        const el = e.target;
        this.setState({
            selected: el.id
        });
    }

    createContent(array){
        return (
            <div className="tab-content">
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <ul className="foundations">
                    {
                        array.length > 0 ?
                            array.map((f, i) => {
                                return <><li key={i} className="foundation">
                                    <div>
                                        <h3 className="fundName">Fundacja {f.nazwa}</h3>
                                        <p className="goal">Cel i misja: {f.cel}</p>
                                    </div>
                                    <div className="What">{f.dary.join(", ")}</div>

                                </li>
                                <hr /></>
                            }).slice(0, 3)
                            :
                            <h3>Nie znaleziono </h3>
                    }
                    </ul>
                </div>
        );
    }


    render() {
        const { founds, selected, orgs, local } = this.state;
        let content;

        switch(selected){
            case "fou":
                content = this.createContent(founds);
                break;
            case "org":
                content = this.createContent(orgs);
                break;
            case "loc":
                content = this.createContent(local);
                break;
            default: 
                content = <h3>Coś poszło nie tak...</h3>
        }

        return (
            <section id="home-whoWeHelp">
                <h1>Komu pomagamy?</h1>
                <ul className="tabs">
                    <li  id="fou" className={this.state.selected === "fou" ? "tab selected" : "tab"}
                        onClick={this.changeTab}
                    >Fundacjom</li>
                    <li id="org" className={this.state.selected === "org" ? "tab selected" : "tab"}
                        onClick={this.changeTab}
                    >Organizacjom pozarządowym</li>
                    <li id="loc" className={this.state.selected === "loc" ? "tab selected" : "tab"}
                        onClick={this.changeTab}
                    >Lokalnym zbiórkom</li>
                </ul>

                {content}

            </section>
        );
    }

}

export default WhoWeHelp;