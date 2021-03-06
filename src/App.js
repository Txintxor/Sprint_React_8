import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Button } from "./components/styled-c/styled-components.js";

import NavBar from "./components/NavBar/NavBar.js";
import Home from "./components/Home/Home.js";
import Naus from "./components/Naus/Naus.js";
import Fitxa from "./components/Fitxa/Fitxa.js";
import Login from "./components/Login/Login.js";
import Pilots from "./components/Pilots/Pilots.js";
import Pelis from "./components/Pelis/Pelis.js";
import Register from "./components/Register/Register.js";

const App = () => (
  <div className="App">
    <NavBar />
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Naus" element={<Naus />} />
        <Route path="/Fitxa" element={<Fitxa />} />
        <Route path="/Pilots" element={<Pilots />} />
        <Route path="/Pelis" element={<Pelis />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route
          path="*"
          element={<Button href="/">THE FORCE IS WEAK IN YOU 404!</Button>}
        />
      </Routes>
    </Router>
  </div>
);

export default App;
