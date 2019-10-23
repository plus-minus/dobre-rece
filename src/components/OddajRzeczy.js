import React from "react";
import { connect } from "react-redux";
import Contact from "./Contact";
import OddajRzeczyHeader from "./OddajRzeczyHeader";
import "../scss/OddajRzeczy.scss";
import {incrementStep, decrementStep} from "../redux/actions/actionCreators";

function OddajRzeczy(props) {

    return (
        <>
            <OddajRzeczyHeader />
            <section className="oddajRzeczyForm">
                <div className="important"></div>
                <div className="form">
                    <h3>Krok {props.step}/4</h3>
                    <button onClick={props.onDecrementStep} >Wstecz</button>
                    <button onClick={props.onIncrementStep}>Dalej</button>
                </div>

            </section>

            <Contact />
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        step: state.step
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementStep: () => dispatch(incrementStep()),
        onDecrementStep: () => dispatch(decrementStep())
    };
}

const OddajRzeczyContainer = connect(mapStateToProps, mapDispatchToProps)(OddajRzeczy);


export default OddajRzeczyContainer;