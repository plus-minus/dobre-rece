import React from "react";
import Navigation from "./Navigation";
import "../scss/Login.scss";
import { Link } from "react-router-dom";

function Register() {

    return (
      <div id="view-register">
        <Navigation />

        <div className="form">
          <h1>Załóż konto</h1>
          <form>
            <div className="inputs">
              <label>Email</label>
              <input type="email" />
              <label>Hasło</label>
              <input type="password" />
              <label>Powtórz hasło</label>
              <input type="password" />
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

export default Register;