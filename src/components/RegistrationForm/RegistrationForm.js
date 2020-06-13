import React, { useState } from "react";
import axios from "axios";
import "./RegistrationForm.css";
import { API_BASE_URL } from "../../constants/apiConstant";
import Button from "react-bootstrap/Button";
import Header from "../Header/HeaderRegister";
import "../Header/Header.css";
import { withRouter } from "react-router-dom";


const RegistrationForm = (props) => {
  const [state, setState ] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const showError = () => {
    console.log(this)
  }

  const sendDetailsToServer = () => {
    if (state.email.length && state.password.length) {
      showError(null);
      const payload = {
        email: state.email,
        password: state.password,
      };
      const headers = {
        'Access-Control-Allow-Origin': '*'
    };

      axios
        .post(API_BASE_URL + "register", payload, {headers:headers})
        .then(function (response) {
          if (response.data.code === 200) {
            setState((prevState) => ({
              ...prevState,
              successMessage:
                "Registration successful. Redirecting to home page..",
            }));
            redirectToHome();
            showError(null);
          } else {
            showError("Some error ocurred");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      props.showError("Please enter valid username and password");
    }
  };
  const redirectToHome = () => {
    props.updateTitle("Home");
    props.history.push("/home");
  };
  const redirectToLogin = () => {
    props.updateTitle("Login");
    props.history.push("/login");
  };
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    } else {
      props.showError("Passwords do not match");
    }
  };

  return (
    <div
      className="card col-12 col-lg-4 login-card mt-2 hv-center"
      id="outerform"
    >
      <Header />
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">
            <b>Email address</b>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={state.email}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Enter your email address to register please.
          </small>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">
            <b>Password</b>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">
            <b>Confirm Password</b>
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={state.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          id="registerbtn"
          onClick={handleSubmitClick}
        >
          Register
        </button>
      </form>
      <div
        className="alert alert-success mt-2"
        style={{ display: state.successMessage ? "block" : "none" }}
        role="alert"
      >
        {state.successMessage}
      </div>
      <div className="mt-2" id="loginbutton">
        <span id="account">Already have an account? </span>
        <span className="loginText" onClick={() => redirectToLogin()}>
          <div className="buttondiv">
            <Button variant="link" id="login">
              Login here
            </Button>
          </div>
        </span>
      </div>
    </div>
  );

}


  
  


export default withRouter(RegistrationForm);
