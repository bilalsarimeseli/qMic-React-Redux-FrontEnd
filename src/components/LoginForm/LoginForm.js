import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";
import { API_BASE_URL } from "../../constants/apiConstant";
import { withRouter } from "react-router-dom";
import Header from "../Header/HeaderLogin";
import "../Header/Header.css"

function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };


  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      email: state.email,
      password: state.password,
    };
    axios
      .post(API_BASE_URL + "login", payload)
      .then(function (response) {
        if (response.data.code === 200) {
          setState((prevState) => ({
            ...prevState,
            successMessage: "Login successful. Redirecting to home page..",
          }));
          redirectToHome();
          props.showError(null);
        } else if (response.data.code === 204) {
          props.showError("Username and password do not match");
        } else {
          props.showError("Username does not exists");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const redirectToHome = () => {
    props.updateTitle("Home");
    props.history.push("/home");
  };
  const redirectToRegister = () => {
    props.history.push("http://52.26.150.183/api/v1/register");
    props.updateTitle("Register");
  };
  return (
    <div
      className="card col-12 col-lg-4 login-card mt-2 hv-center"
      id="formlogin"
    >
      <Header/>
      <form>
        <div className="form-group text-left" id="formgroup">
          <label htmlFor="exampleInputEmail1">
            <h5>
              <b>Email address</b>
            </h5>
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
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group text-left" id="formgroup2">
          <label htmlFor="exampleInputPassword1">
            <h5>
              <b>Password</b>
            </h5>
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
        <div className="form-check" style={{ backgroundColor: "red" }}></div>
        <button
          type="submit"
          className="btn btn-primary"
          id="loginbutton"
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </form>
      <div
        className="alert alert-success mt-2"
        style={{ display: state.successMessage ? "block" : "none" }}
        role="alert"
      >
        {state.successMessage}
      </div>
      <div className="registerMessage">
        <span>Don't have an account? </span>
        <span className="loginText" onClick={() => redirectToRegister()}>
          <b style={{ fontSize: "15px" }}>Register</b>
        </span>
      </div>
    </div>
  );
}

export default withRouter(LoginForm);
