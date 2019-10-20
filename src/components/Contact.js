import React from "react";
import "../scss/Contact.scss";
import Footer from "./Footer";
import validator from "./validation";

class Contact extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            msg: "",
            success: false,
            formUsed: false,
            errors: {
                name: null,
                email: null, 
                msg: null
            }
        };
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }

    change(e){
        const el = e.target;
        const id = el.id;
        const value = el.value;

       if( !validator[id].test( value.trim() ) ){
           this.setState({
               [id]: value,
               errors: {
                   ...this.state.errors,
                   [id]: validator[id].errorMsg
               },
               formUsed: true
           });
       }else {
           this.setState({
               [id]: value,
               formUsed: true,
               errors: {
                   ...this.state.errors,
                   [id]: null
               }
           })
       }


    }

    submit(e){
        e.preventDefault();

        const {name, email, msg, errors, formUsed} = this.state;
        if (
            errors.name || errors.email || errors.msg || !formUsed
        ){
            console.warn("Bład walidacji");
        }else{

            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, message: msg })
            })
                .then(res => {
                    if(res.status === 200){
                        this.setState({
                            success: true,
                            name: "",
                            email: "",
                            msg: ""
                        })
                    }
                })
                .catch(err => console.warn(err))
        }

    }

    render(){
       const { errors, success} = this.state;
        return (
            <section id="home-contact">
                <form onSubmit={this.submit}>
                    <h1>Skontaktuj się z nami</h1>

                    <p className="success-msg">{success? "Wiadomość została wysłana! Wkrótce się skontaktujemy.": null}</p>
                    <section>
                        <div className="text-input">
                            <label>Wpisz swoje imię</label>
                            <input id="name" type="text" value={this.state.name} onChange={this.change} placeholder="Krzysztof" />
                            {typeof errors.name === "string" && <p className="error-msg">{errors.name}</p>}
                        </div>
                        <div className="text-input">
                            <label>Wpisz swój email</label>
                            <input id="email"type="email" value={this.state.email} onChange={this.change} placeholder="abc@xyz.pl" />
                            {typeof errors.email === "string" && <p className="error-msg">{errors.email}</p>}
                        </div>
                        <div className="textarea-input">
                            <label>Wpisz swoją wiadomość</label>
                            <textarea id="msg" value={this.state.msg} onChange={this.change} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
                            </textarea>
                            {typeof errors.msg === "string" && <p className="error-msg">{errors.msg}</p>}
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