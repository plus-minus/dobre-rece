import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import OddajRzeczy from "./components/OddajRzeczy";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";

import "./scss/App.scss";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};

    this.sendContactInfo = this.sendContactInfo.bind(this);
  }

  sendContactInfo(name, email, message){

      fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      })
      .then(res => console.log(res.status))
      .catch(err => console.warn(err))
 
  }

  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props)=> <Home sendContactInfo={this.sendContactInfo}/>} />
          <Route path="/oddaj-rzeczy" component={OddajRzeczy} />
          <Route path="/logowanie" component={Login} />
          <Route path="/rejestracja" component={Register} />
          <Route path="/wylogowano" component={Logout} />
          <Route component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }// koniec render
}

export default App;
