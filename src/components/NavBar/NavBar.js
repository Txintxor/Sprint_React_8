import React from "react";
import { NaviBar, UlNav } from "../styled-c/styled-components.js";

const NavBar = () => {
  return <NaviBar>
    <p><a href="/">Home</a></p>
    <p>Star Wars</p>
    <UlNav>
    <li><a href="/Naus">Ships</a></li>
    <li><a href="/Fitxa">Fitxa</a></li>
    <li><a href="/Login">Login</a></li>
    <li><a href="/Register">Register</a></li>  
    </UlNav> 
  </NaviBar>;
};

export default NavBar;
