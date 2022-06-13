import { NaviBar, UlNav } from "../styled-c/styled-components.js";

import image from "../../img/StWrs-sm.png";
const NavBar = () => {
  return (
    <NaviBar>
      <UlNav>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Naus">Naus</a>
        </li>
      </UlNav>
      <a
        target="_blank"
        href="https://www.youtube.com/watch?v=5pqtN8vbRuE"
        rel="noreferrer"
      >
        <img src={image} style={{ margin: 0 }} alt="Star Wars logo" />
      </a>
      <UlNav>
        <li>
          <a href="/Login">Log in</a>
        </li>
        <li>
          <a href="/Register">Sign up</a>
        </li>
      </UlNav>
    </NaviBar>
  );
};

export default NavBar;
