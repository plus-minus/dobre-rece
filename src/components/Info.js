import React from "react";
import "../scss/Info.scss";

function Info() {
    return (
        <section id="home-info" className="center-content">
            <div>
                <span>10</span>
                <span>oddanych worków</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div>
                <span>5</span>
                <span>wspartych organizacji</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div>
                <span>7</span>
                <span>zorganizowanych zbiórek</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </section>
    );
}

export default Info;