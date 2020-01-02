import React from "react";
import "./App.css";
import SignUp from "./components/signup";
import Home from "./components/home";
import Login from "./components/login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/login"}>
              YourNews
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper" style={{marginTop:55}}>
          <div className="auth-inner" >
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
