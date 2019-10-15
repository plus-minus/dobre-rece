import React from "react";
import Header from "./Header";
import Info from "./Info";
import SimpleSteps from "./SimpleSteps";
import About from "./About";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";

function Home(){
    return (
        <>
        <Header/>
        <Info/>
        <SimpleSteps/>
        <About/>
        <WhoWeHelp/>
        <Contact/>
        </>
    );
}

export default Home;