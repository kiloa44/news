import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/signup';
import Home from './components/home';
import Login from './components/login';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Dashboard</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
