import logo from './logo.svg';
import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationComponent from "./components/NavigationComponent";
import ClientAddComponent from "./components/ClientAddComponent";
import ClientListComponent from "./components/ClientListComponent";
import {Routes} from "react-router";

function App() {
  return (
      <div className="App">
          <Router>
              <div>
                  <div>
                      <nav className="m-1 navbar navbar-expand-lg navbar-light bg-light">
                          <a className="navbar-brand" href="/">Gym</a>
                          <button className="navbar-toggler" type="button" data-toggle="collapse"
                                  data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                  aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"/>
                          </button>
                          <div className="collapse navbar-collapse" id="navbarNav">
                              <ul className="navbar-nav">
                                  <li className="nav-item active">
                                      <a className="nav-link" href="/">Home</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="/clients">Clients</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="#">Pricing</a>
                                  </li>
                              </ul>
                          </div>
                      </nav>

                  </div>

                  <hr />

                  {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                  <Switch>
                      <Route exact path="/">
                          <ClientAddComponent />
                      </Route>
                      <Route path="/clients">
                          <ClientListComponent />
                      </Route>
                      <Route path="/dashboard">
                          <NavigationComponent />
                      </Route>
                  </Switch>
              </div>
          </Router>

      </div>  );
}

export default App;
