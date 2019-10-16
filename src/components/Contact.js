import React from "react";
import "../scss/Contact.scss";
import Footer from "./Footer";

function Contact() {
    return (
        <section id="home-contact">
            <form>
                <h1>Skontaktuj się z nami</h1>
                <section>
                    <div className="text-input">
                        <label>Wpisz swoje imię</label>
                        <input type="text" placeholder="Krzysztof" />
                    </div>
                    <div className="text-input">
                        <label>Wpisz swój email</label>
                        <input type="email" placeholder="abc@xyz.pl" />
                    </div>
                    <div className="textarea-input">
                        <label>Wpisz swoją wiadomość</label>
                        <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
                        </textarea>
                    </div>
                    <button >Wyślij</button>
                </section>

                
            </form>
            <Footer/>
        </section>
    );
}

export default Contact;