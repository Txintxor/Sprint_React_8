import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Log, ButtonSubmit } from "../styled-c/styled-components.js";

const Login = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [auth, setAuth] = useState(false);

  const navigate = useNavigate();

  const submit = (e) => {
    if (name !== "" && pass !== "") {
      const local = JSON.parse(window.localStorage.getItem("user"));
      if (name === local.user && pass === local.password) {
        e.preventDefault();
        setAuth(true);
        window.localStorage.setItem("log", true);
        navigate("/Naus");
      }
    } else {
      alert("Torni a probar");
      e.preventDefault();
    }
  };

  const dataCapture = (e) => {
    e.target.id === "user" ? setName(e.target.value) : setPass(e.target.value);
  };

  return (
    <>
      <Log onSubmit={submit}>
        <h1 className="logTitle">Introdueix usuari i contrasenya</h1>
        <label htmlFor="user">Usuari</label>
        <input type="text" onChange={dataCapture} name="user" id="user" />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          onChange={dataCapture}
          name="password"
          id="password"
        />
        <ButtonSubmit type="submit" value="Envia" />
      </Log>
    </>
  );
};

export default Login;
