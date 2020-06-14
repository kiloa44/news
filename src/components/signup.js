import React, { Component } from "react";
import * as firebase from "firebase";
import { ButtonToolbar } from "react-bootstrap";
import ChooseButton from "./choose_buttons";

export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    age: "",
    interests: [
      "Science",
      "Art",
      "Politics",
      "Technology",
      "Business",
      "Fashion",
      "Food",
      "Health"
    ],
    user_interests: []
  };

  handlePress = e => {
    let { user_interests } = this.state;
    let value = e.target.value;
    if (!user_interests.includes(value)) {
      user_interests.push(value);
      e.target.style.backgroundColor = "red";
    }
    this.setState({
      user_interests: user_interests
    });
    console.log(user_interests);
  };

  signUpUser = () => {
    alert("in signupuser");
    if (this.state.password.length > 7 && this.state.email !== "") {
      let {
        email,
        password,
        first_name,
        last_name,
        age,
        user_interests
      } = this.state;
      
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ...
        })
        .then(function(res) {
          const db = firebase.firestore();
          console.log(res.user.uid)
          alert("in then");
          db.collection("users")
            .doc(res.user.uid)
            .set({
              first_name: first_name,
              last_name: last_name,
              age: age,
              user_interests: user_interests
            })
            .then(function(docRef) {
              console.log("Document written with ID: ", docRef);
              this.props.history.push("/");
            })
            .catch(function(error) {
              console.error("Error adding document: ", error);
            });
        });
    }
  };

  render() {
    let { interests } = this.state;
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
        <div className="form-group">
          <ButtonToolbar aria-label="Toolbar with button groups">
            {interests.map(element => {
              return (
                <ChooseButton
                  text={element}
                  value={element.toLowerCase()}
                  onClick={this.handlePress}
                ></ChooseButton>
              );
            })}
          </ButtonToolbar>
        </div>

        <a
          className="btn btn-primary btn-block white"
          onClick={this.signUpUser}
          style={{ fontSize: 18 }}
        >
          Send
        </a>
        <p className="forgot-password text-right">
          Already registered <a href="#">sign in?</a>
        </p>
      </form>
    );
  }
}
