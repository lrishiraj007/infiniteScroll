import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LoginForm.css";

function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
  });
  props.updateTitle("Login");

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.email === "foo" && state.password === "bar") {
      setState((prevState) => ({
        ...prevState,
        successMessage: "Login successful. Redirecting to home page..",
      }));
      redirectToHome();
    } else {
      setState((prevState) => ({
        ...prevState,
        successMessage: "Please check your creds ",
      }));
    }
  };
  const redirectToHome = () => {
    props.updateTitle("Contact List");
    navigate("/home");
  };

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center vertical-center">
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-check"></div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </form>
      <div
        className="alert alert-warning mt-2"
        style={{ display: state.successMessage ? "block" : "none" }}
        role="alert"
      >
        {state.successMessage}
      </div>
    </div>
  );
}

export default LoginForm;
