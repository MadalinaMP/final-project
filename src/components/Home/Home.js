import React, { useEffect } from "react";
import Buttons from "../Buttons/Buttons.js";

const Home = () => {
  useEffect(() => {
    fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "madalinapui@gmail.com",
        password: "parola1234",
      }),
    }).then(() => {
      fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "madalinapui@gmail.com",
          password: "parola1234",
        }),
      });
    });
  }, []);

  return (
    <div className="home-page">
      <Buttons />
    </div>
  );
};

export default Home;
