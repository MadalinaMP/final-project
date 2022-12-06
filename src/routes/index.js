import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../components/App";
import Home from "../components/Home/Home";
import Episodes from "../components/Episodes/Episodes";
import Characters from "../components/Characters/Characters";
import Signin from "../components/Forms/Signin";
import Signup from "../components/Forms/Signup";

export default (
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/episodes" element={<Episodes />}></Route>
      <Route path="/characters" element={<Characters />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Route>
  </Routes>
);
