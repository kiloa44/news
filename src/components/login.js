import React, { Component , useContext } from "react";
import * as firebase from "firebase";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "./Auth.js";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    currentUser:AuthContext
  };
  login = () => {
    console.log("in login");
    let { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("hello");
        console.log(errorCode, errorMessage);

        // ...
      })
      .then(res => {
        console.log(res);
        this.props.history.push("/");
      });
  };
  render() {
    const { currentUser } = this.state;
console.log(currentUser);
    if (currentUser) {
      return <Redirect to="/" />;
    }
    return (
      <form>
        <h3>Login</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={this.state.password}
            onChange={event => this.setState({ password: event.target.value })}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <a
          className="btn btn-primary btn-block white"
          onClick={this.login}
          style={{ fontSize: 18 }}
        >
          Send
        </a>
      </form>
    );
  }
}
