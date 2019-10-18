import React from "react";
import "../scss/Contact.scss";
import Footer from "./Footer";

class Contact extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            msg: ""
        };
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }

    change(e){
        const el = e.target;

        this.setState({
            [el.id]: (el.value.trim())
        });
    }

    validateMsg(msg){
        return typeof msg === "string" && msg.length > 120;
    }
    validateName(name){
        return typeof name === "string" && name.length > 0 && !name.includes(" ");
    }
    validateEmail(email){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    submit(e){
        e.preventDefault();

        const {name, email, msg} = this.state;
        if (
          this.validateName(name) &&
          this.validateEmail(email) &&
          this.validateMsg(msg)
        ){
            this.props.sendContactInfo(name, email, msg);

        }else{
            console.warn("Bład walidacji");
        }

        this.setState({
            name: "",
            email: "",
            msg: ""
        });
    }

    render(){
        return (
            <section id="home-contact">
                <form onSubmit={this.submit}>
                    <h1>Skontaktuj się z nami</h1>

                    <p className="success-msg"></p>
                    <section>
                        <div className="text-input">
                            <label>Wpisz swoje imię</label>
                            <input id="name" type="text" value={this.state.name} onChange={this.change} placeholder="Krzysztof" />
                            <p className="error-msg"></p>
                        </div>
                        <div className="text-input">
                            <label>Wpisz swój email</label>
                            <input id="email"type="email" value={this.state.email} onChange={this.change} placeholder="abc@xyz.pl" />
                            <p className="error-msg"></p>
                        </div>
                        <div className="textarea-input">
                            <label>Wpisz swoją wiadomość</label>
                            <textarea id="msg" value={this.state.msg} onChange={this.change} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
                            </textarea>
                            <p className="error-msg"></p>
                        </div>
                        <button >Wyślij</button>
                    </section>


                </form>
                <Footer />
            </section>
        );
    }

}

export default Contact;