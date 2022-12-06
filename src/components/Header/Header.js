import React from "react";
import { Link } from "react-router-dom";
import "./header-style.css";

const Header = () => {
  return (
    <nav>
      <Link to="/" className="no-link">
        <div className="logo">SociaL in</div>
      </Link>

      <div className="navigation">
        <Link to="/episodes" className="no-link">
          <div className="posts no-link">Episodes</div>
        </Link>

        <Link to="/characters" className="no-link">
          <div className="posts no-link">Characters</div>
        </Link>

        <Link to="/signin" className="no-link">
          <div className="login">Log in</div>
        </Link>

        <Link to="/signup" className="no-link">
          <div className="signup">Sign up</div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
