import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import OddajRzeczy from "./components/OddajRzeczy";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";

import "./scss/App.scss";

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>} />
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
