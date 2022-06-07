import Routes from "./application/routes.js";
import NavBar from "./components/NavBar/NavBar.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
