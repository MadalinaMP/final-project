import React, { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./forms-style.css";

export const Signin = () => {
  const userEmailRef = useRef();
  const userPasswordRef = useRef();
  const errMessageRef = useRef();
  const navigateTo = useNavigate();

  const redirectLoggedInUser = () => {
    navigateTo(`/episodes`);
  };

  const checkUser = () => {
    if (
      userEmailRef.current.value !== localStorage.getItem("userEmail") &&
      userPasswordRef.current.value !== localStorage.getItem("userPassword")
    ) {
      errMessageRef.current.style.display = "block";
    } else {
      errMessageRef.current.style.display = "none";
      redirectLoggedInUser();
    }
  };

  const checkingInputs = () => {
    if (!userEmailRef.current.value) {
      userEmailRef.current.style.border = "2px solid red";
    } else {
      userEmailRef.current.style = null;
    }

    if (!userPasswordRef.current.value) {
      userPasswordRef.current.style.border = "2px solid red";
    } else {
      userPasswordRef.current.style = null;
    }
  };

  const onLoginClick = () => {
    checkingInputs();
    checkUser();
  };

  return (
    <>
      <div className="container">
        <h1>Sign in</h1>
        <h2>Sign into your account</h2>

        <div>
          <p ref={errMessageRef} className="err-msg">
            Wrong password or email.
          </p>
          <input
            ref={userEmailRef}
            id="email"
            className="fields"
            type="text"
            placeholder="Email Address"
            autoFocus
          ></input>
          <br />
          <input
            ref={userPasswordRef}
            id="password"
            className="fields"
            type="password"
            placeholder="Password"
          ></input>
          <br />
          <button onClick={onLoginClick} className="buttons">
            Login
          </button>
          <div className="links-container">
            <p>Don't have an account?</p>
            <Link to="/signup" className="no-link">
              <p className="links">Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
