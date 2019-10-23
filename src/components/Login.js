import React from "react";
import Navigation from "./Navigation";
import "../scss/Login.scss";
import {Link} from "react-router-dom";
import validator from "./validation";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            pswd: "",
            success: false,
            formUsed: false,
            errors: {
                email: null,
                pswd: null
            }
        };
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }

    change(e) {
        const el = e.target;
        const id = el.id;
        const value = el.value;

        if (!validator[id].test(value.trim())) {
            this.setState({
                [id]: value,
                errors: {
                    ...this.state.errors,
                    [id]: validator[id].errorMsg
                },
                formUsed: true
            });
        } else {
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

    submit(e) {
        e.preventDefault();

        const {email, pswd, errors, formUsed } = this.state;
        if (
            errors.email || errors.pswd || !formUsed
        ) {
            console.warn("Bład walidacji");
        } else {

            fetch("http://localhost:3000/users?email="+email, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(json => {
                    if(json[0].pswd === pswd){
                        console.log("User validated. Welcome!")
                        console.log("Redirecting to user dashboard...");
                        this.setState({
                                email: "",
                                pswd: "",
                                success: false,
                                formUsed: false,
                                errors: {
                                    email: null,
                                    pswd: null
                        }
                    })

                    //przekierowanie na stronę główną

                }})
                .catch(err => console.warn(err))
        }

    }

    render(){
        const {errors, success } = this.state;
        return (
            <div id="view-login">
                <Navigation />

                <div className="form" onSubmit={this.submit}>
                    <h1>Zaloguj się</h1>
                    <form>
                        <div className="inputs">

                            <label>Email</label>
                            <input id="email" type="email" value={this.state.email} onChange={this.change}/>
                            {typeof errors.email === "string" && <p className="error-msg">{errors.email}</p>}

                            <label>Hasło</label>
                            <input id="pswd" type="password" value={this.state.pswd} onChange={this.change}/>
                            {typeof errors.pswd === "string" && <p className="error-msg">{errors.pswd}</p>}

                        </div>
                        <div className="buttons">
                            <button ><Link to="/rejestracja">Załóż konto</Link></button>
                            <button className="active" >Zaloguj się</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
 
}

export default Login