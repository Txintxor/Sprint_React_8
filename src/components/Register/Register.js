import React from "react";
import {Regist}  from "../styled-c/styled-components.js";
const Register = () => {

  const submit = () => {
    
  }
  return (
    <Regist onSubmit={submit}><h1 className="logTitle">Register</h1>
    <label htmlFor="user">Introdueix l´Username</label>
    <input type="text" name="user" id="user" />
    <label htmlFor="password">Introdueix el Password</label>
    <input type="text" name="password" id="password" />
    </Regist>
    );
}
 
export default Register;