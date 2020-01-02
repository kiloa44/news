import React, { Component } from "react";
import * as firebase from "firebase";

export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    age: ""
  };

  signUpUser = () => {
    alert("in signupuser");
    if (this.state.password.length > 7 && this.state.email != "") {
      let { email, password, first_name, last_name, age } = this.state;
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        })
        .then(function() {
          const db = firebase.firestore();
          alert("in then");
          db.collection("users")
            .add({
              first_name: first_name,
              last_name: last_name,
              age: age
            })
            .then(function(docRef) {
              console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
              console.error("Error adding document: ", error);
            });
        });
    }
  };

  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            value={this.state.first_name}
            onChange={event =>
              this.setState({ first_name: event.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            value={this.state.last_name}
            onChange={event => this.setState({ last_name: event.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            placeholder="age"
            value={this.state.age}
            onChange={event => this.setState({ age: event.target.value })}
          />
        </div>

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
        <a className="btn btn-primary btn-block white" 
        onClick={this.signUpUser}
        style={{fontSize:18}}
        >Send
        </a>
        <p className="forgot-password text-right">
          Already registered <a href="#">sign in?</a>
        </p>
      </form>
    );
  }
}
