import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./forms-style.css";

export const Signup = () => {
  const userNameRef = useRef();
  const userEmailRef = useRef();
  const userPasswordRef = useRef();
  const userPasswordCheckRef = useRef();
  const samePasswordMessageRef = useRef();
  const existentEmailMessageRef = useRef();
  const wrongEmailMessageRef = useRef();
  const shortPasswordMessageRef = useRef();
  const shortUserNameMessageRef = useRef();

  const addUser = () => {
    if (userEmailRef.current.value !== localStorage.getItem("userEmail")) {
      localStorage.setItem("userEmail", userEmailRef.current.value);
      localStorage.setItem("userPassword", userPasswordRef.current.value);
      existentEmailMessageRef.current.style.display = "none";
    } else {
      existentEmailMessageRef.current.style.display = "block";
    }
  };

  const checkingInputs = () => {
    if (!userNameRef.current.value) {
      userNameRef.current.style.border = "2px solid red";
    } else {
      userNameRef.current.style = null;
    }

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

    if (!userPasswordCheckRef.current.value) {
      userPasswordCheckRef.current.style.border = "2px solid red";
    } else {
      userPasswordCheckRef.current.style = null;
    }
  };

  const checkUserNameLength = () => {
    if (userNameRef.current.value.length < 3) {
      shortUserNameMessageRef.current.style.display = "block";
    } else {
      shortUserNameMessageRef.current.style.display = "none";
    }
  };

  const checkEmail = () => {
    const simpleEmailRegex = /\S+@\S+\.\S+/;
    const emailIsCorrect = simpleEmailRegex.test(userEmailRef.current.value);

    if (emailIsCorrect) {
      wrongEmailMessageRef.current.style.display = "none";
    } else {
      wrongEmailMessageRef.current.style.display = "block";
    }
  };

  const checkPasswordLength = () => {
    if (userPasswordRef.current.value.length < 8) {
      shortPasswordMessageRef.current.style.display = "block";
    } else {
      shortPasswordMessageRef.current.style.display = "none";
    }
  };

  const checkPasswordsMatch = () => {
    if (userPasswordRef.current.value !== userPasswordCheckRef.current.value) {
      samePasswordMessageRef.current.style.display = "block";
    } else {
      samePasswordMessageRef.current.style.display = "none";
      addUser();
    }
  };

  const onRegisterClick = () => {
    checkingInputs();
    checkEmail();
    checkUserNameLength();
    checkPasswordLength();
    checkPasswordsMatch();
  };

  return (
    <>
      <div className="container">
        <h1>Sign Up</h1>
        <h2>Create your account</h2>

        <div>
          <p ref={shortUserNameMessageRef} className="err-msg">
            Username has to have at least 3 characters.
          </p>
          <input
            ref={userNameRef}
            className="fields"
            type="text"
            placeholder="Name"
            autoFocus
          ></input>
          <p ref={existentEmailMessageRef} className="err-msg">
            This email address is already in use.
          </p>

          <p ref={wrongEmailMessageRef} className="err-msg">
            This email is invalid.
          </p>
          <input
            ref={userEmailRef}
            className="fields"
            type="text"
            placeholder="Email Address"
          ></input>

          <p className="disclaimer">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </p>

          <input
            ref={userPasswordRef}
            className="fields"
            type="password"
            placeholder="Password"
          ></input>
          <input
            ref={userPasswordCheckRef}
            className="fields"
            type="password"
            placeholder="Confirm Password"
          ></input>
          <p ref={samePasswordMessageRef} className="err-msg">
            Passwords don't match.
          </p>

          <p ref={shortPasswordMessageRef} className="err-msg">
            Password should be at least 8 characters long.
          </p>

          <button onClick={onRegisterClick} className="buttons">
            Register
          </button>

          <div className="links-container">
            <p>Already have an account?</p>
            <Link to="/signin" className="no-link">
              <p className="links">Sign In</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
