import React from "react";
import { connect } from "react-redux";
import Contact from "./Contact";
import OddajRzeczyHeader from "./OddajRzeczyHeader";
import "../scss/OddajRzeczy.scss";
import {incrementStep, decrementStep} from "../redux/actions/actionCreators";

const OddajRzeczy = ({ onDecrementStep, onIncrementStep, step }) => (
        <>
            <OddajRzeczyHeader />
            <section className="oddajRzeczyForm">
                <div className="important"></div>
                <div className="form">
                    <h3>Krok {step}/4</h3>
                    <button onClick={onDecrementStep} >Wstecz</button>
                    <button onClick={onIncrementStep}>Dalej</button>
                </div>

            </section>

            <Contact />
        </>
    );

const mapStateToProps = (state) => {
    return {
        step: state.step
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementStep: () => dispatch(incrementStep()),
        onDecrementStep: () => dispatch(decrementStep())
       // updateForm: (data) => dispatch(updateForm(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OddajRzeczy);