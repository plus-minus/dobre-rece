import React from "react";
import "../scss/Footer.scss";

function Footer(){
    return (
        <footer>
            <div>
                <span>Copyright by Coders Lab</span>
                <ul className="socials">
                    <li className="social-icon"><a href="https://www.facebook.com">F</a></li>
                    <li className="social-icon"><a href="https://www.instagram.com">I</a></li>
                </ul>
            </div>
        </footer>
    );
}


export default Footer;