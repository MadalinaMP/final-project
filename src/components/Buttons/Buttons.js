import React from "react";
import { Link } from "react-router-dom";
import "./buttons-style.css";

export const Buttons = () => {
  return (
    <div className="btn-container">
      <div className="btn-row">
        <Link to="/signup">
          <button className="buttons">Sign up</button>
        </Link>
      </div>

      <div className="btn-row">
        <Link to="/signin">
          <button className="buttons">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Buttons;
