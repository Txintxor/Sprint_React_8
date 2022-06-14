import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Naus from "./components/Naus/Naus.js";
import App from "./App";

test("renders Log in in NavBar", () => {
  render(<NavBar />);
  const log = screen.getByText(/log in/i);
  expect(log).toBeInTheDocument();
});

test("renders Ship List in Naus component", () => {
  render(
    <Router>
      <Naus />
    </Router>
  );
  const list = screen.getByTestId("list");
  expect(list).toBeInTheDocument();
});

test("renders torna button in pelis component", () => {
  render(<App />);
  const list = screen.getByAltText(/Star Wars/i);
  expect(list).toBeInTheDocument();
});
