import Home from "../components/Home/Home.js";
import Naus from "../components/Naus/Naus.js";
import Fitxa from "../components/Fitxa/Fitxa.js";
import Login from "../components/Login/Login.js";
import Register from "../components/Register/Register.js";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default () => (
  <Router>
    <Routes style= {{ background: "red"}}>
      <Route path="/" element={<Home />} />
      <Route path="/Naus" element={<Naus />} />
      <Route path="/Fitxa" element={<Fitxa />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  </Router>
);