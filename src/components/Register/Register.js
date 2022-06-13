import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Regist, ButtonSubmit } from "../styled-c/styled-components.js";

const Register = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState(1);

  const navigate = useNavigate();

  const submit = () => {
    if (name !== "" && pass !== "") {
      const data = { user: name, password: pass };
      window.localStorage.setItem("user" + user, JSON.stringify(data));
      setUser(user + 1);

      navigate("/Login");
    } else {
      setUser(user + 1);
    }
  };

  const dataCapture = (e) => {
    e.target.id === "user" ? setName(e.target.value) : setPass(e.target.value);
  };

  return (
    <Regist onSubmit={submit}>
      <h1 className="logTitle">Registre de nou usuari</h1>
      <label htmlFor="user">Introdueix el nom d´usuari</label>
      <input type="text" onChange={dataCapture} name="user" id="user" />
      <label htmlFor="password">Introdueix el Password</label>
      <input type="text" onChange={dataCapture} name="password" id="password" />
      <ButtonSubmit type="submit" value="Envia" />
    </Regist>
  );
};

export default Register;
