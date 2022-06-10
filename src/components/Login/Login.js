import React from "react";
import {Log}  from "../styled-c/styled-components.js";
const Login = () => {

  const submit = () => {

  }


  return (
    <Log onSubmit={submit}><h1 className="logTitle">Login</h1>
    <label htmlFor="user">Username</label>
    <input type="text" name="user" id="user" />
    <label htmlFor="password">Password</label>
    <input type="text" name="password" id="password" />
    </Log>
    );
}
 
export default Login;