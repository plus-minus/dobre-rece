import React from "react";
import Navigation from "./Navigation";
import "../scss/Login.scss";
import { Link } from "react-router-dom";
import validator from "./validation";

class  Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pswd: "",
      pswd2: "",
      success: false,
      formUsed: false,
      errors: {
        email: null,
        pswd: null,
        pswd2: null
      }
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    const el = e.target;
    const id = el.id;
    const value = el.value;

    if (!validator[id].test(value.trim(), this.state.pswd)) {
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

    const { email, pswd, errors, formUsed } = this.state;
    if (
      errors.pswd || errors.email || errors.pswd2 || !formUsed
    ) {
      console.warn("Bład walidacji");
    } else {

      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email, pswd})
      })
        .then(res => {
          if (res.status === 201) {
            this.setState({
              success: true,
              pswd: "",
              email: "",
              pswd2: ""
            })
          }
        })
        .catch(err => console.warn(err))
    }

  }

    render() {
      const {errors, success} = this.state;
      return (
        <div id="view-register">
          <Navigation />
          <div className="form">
            <h1>Załóż konto</h1>
            {success? <h3 className="success-msg">Konto założone</h3> : null}
            <form onSubmit={this.submit}>
              <div className="inputs">
                <label>Email</label>
                <input id="email" type="email" value={this.state.email} onChange={this.change}/>
                {typeof errors.email === "string" && <p className="error-msg">{errors.email}</p>}
                <label>Hasło</label>
                <input id="pswd" type="password" value={this.state.pswd} onChange={this.change}/>
                {typeof errors.pswd === "string" && <p className="error-msg">{errors.pswd}</p>}
                <label>Powtórz hasło</label>
                <input id="pswd2" type="password" value={this.state.pswd2} onChange={this.change}/>
                {typeof errors.pswd2 === "string" && <p className="error-msg">{errors.pswd2}</p>}
              </div>
              <div className="buttons">
                <button>
                  <Link to="/logowanie">Zaloguj się</Link>
                </button>
                <button className="active">Załóż konto</button>
              </div>
            </form>
          </div>
        </div>
      );
    }

    }

export default Register;