import React from "react";
import "../scss/WhoWeHelp.scss";

class WhoWeHelp extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: "foundations",
            foundations: [],
            organizations: [],
            local:[],
            limit: 3,
            offset: 0
        };

        this.changeTab = this.changeTab.bind(this);
        this.changeOffset = this.changeOffset.bind(this);
    }

    componentDidMount() {

        fetch("http://localhost:3000/foundations", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    foundations: json
                })
            })
            .catch(err => console.error(err))

    }

    changeTab(e) {
        const el = e.target;
        const id = el.id;

    
        this.setState({
            selected: id,
            offset: 0
        });

        if(!this.state[id].length){
            fetch("http://localhost:3000/" + id)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    [id]: json
                })
            })
        }
    }
    changeOffset(e){
        const el = e.target;
        const offsetValue = el.getAttribute("data-offset");

        this.setState({
            offset: +offsetValue
        });

    }
    createPagination(array){
        const items = array.length;
        const { limit } = this.state;

        if(items > limit){
            const links = items % limit === 0 ? items / limit : Math.ceil(parseFloat(items)/ parseFloat(limit));
            if (links) {
                return <p className="pagination">
                    {[...Array(links)].map((link, i) => {
                        return <button onClick={this.changeOffset}
                            className="pagination-button"
                            data-offset={limit * i}
                            key={i}>{i + 1}</button>
                    })}
                </p>
            }
        }

    }

    createContent(array){
        const {limit, offset} = this.state;
        const arraySlice = array.slice(offset, offset+limit);
        return (
            <div className="tab-content">
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <ul className="items">
                    {
                        arraySlice.length > 0 ?
                            arraySlice.map((f, i) => {
                                return <li key={i} className="item">
                                    <div>
                                        <h3 className="name">{f.nazwa}</h3>
                                        <p className="goal">Cel i misja: {f.cel}</p>
                                    </div>
                                    <div className="What">{f.dary.join(", ")}</div>

                                </li>
                               
                            })
                            :
                            <h3>Nie znaleziono </h3>
                    }
                    </ul>
                    {this.createPagination(array)}
                </div>
        );
    }


    render() {
        const { foundations, selected, organizations, local } = this.state;
        let content;

        switch(selected){
            case "foundations":
                content = this.createContent(foundations);
                break;
            case "organizations":
                content = this.createContent(organizations);
                break;
            case "local":
                content = this.createContent(local);
                break;
            default: 
                content = <h3>Coś poszło nie tak...</h3>
        }

        return (
            <section id="home-whoWeHelp">
                <h1>Komu pomagamy?</h1>
                <ul className="tabs">
                    <li  id="foundations" className={this.state.selected === "foundations" ? "tab selected" : "tab"}
                        onClick={this.changeTab}
                    >Fundacjom</li>
                    <li id="organizations" className={this.state.selected === "organizations" ? "tab selected" : "tab"}
                        onClick={this.changeTab}
                    >Organizacjom pozarządowym</li>
                    <li id="local" className={this.state.selected === "local" ? "tab selected" : "tab"}
                        onClick={this.changeTab}
                    >Lokalnym zbiórkom</li>
                </ul>

                {content}

            </section>
        );
    }

}

export default WhoWeHelp;