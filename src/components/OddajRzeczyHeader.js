import React from "react";
import Navigation from "./Navigation";
import "../scss/OddajRzeczyHeader.scss";

const OddajRzeczyHeader = () => {

    return (
      <header id="oddajRzeczy-header">
        <div className="hero-image">
        </div>
        <section className="hero-info">
          <Navigation />
          <article>
            <h1>Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM</h1>

          </article>
        </section>

      </header>
    );
}

export default OddajRzeczyHeader;