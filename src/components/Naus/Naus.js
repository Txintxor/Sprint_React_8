import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Nau, ShipContent } from "../styled-c/styled-components.js";

let page = 1;
const Naus = () => {
  const navigate = useNavigate();

  const [ships, setShips] = useState([]);

  const loadPage = () => {
    // fetch("https://swapi.py4e.com/api/starships")
    // .then((result) => {
    //   return result.json();
    // })

    axios
      .get(`https://swapi.py4e.com/api/starships/?page=${page}`)
      .then((data) => {
        if (page === 4) {
          window.removeEventListener("scroll", handleScroll);
        } else {
          page++;
          let joinShips = data.data.results;
          setShips((ships) => [...ships, ...joinShips]);
        }
      })
      .catch((error) => console.log(error.toJSON));
  };

  const handleScroll = (e) => {
    let top = e.target.documentElement.scrollTop;
    let height = e.target.documentElement.scrollHeight;
    if (window.innerHeight + top >= height) {
      loadPage();
    }
  };

  // No encontré la forma de usar las instrucciones del link (tambien investigué
  // por otro lado y no me quedó claro ) ya que
  // han cambiado cosas (redirect ya no funciona ahora es useNAvigate) además
  // que tengo Route en un componente separado de App.js y el login que debería
  //guardar el estado de login en otro.
  // Así que me decidí por usar el localStorage para guardar un boleano del login
  // y un useEffect se encarga de comprobarlo al cargar la página.
  // No sé si es lo correcto.

  useEffect(() => {
    const log = window.localStorage.getItem("log");
    if (!log) {
      navigate("/Login", { replace: true });
    } else {
      window.addEventListener("scroll", handleScroll);
      loadPage();
    }
  }, []);

  return (
    <Nau data-testid="list">
      {ships.map((e) => (
        <Link to="/Fitxa" state={e} key={e.name + e.model}>
          <ShipContent href="/Fitxa">
            <h2 className="shipName"> Nom :{e.name}</h2>
            <h4 className="shipModel">Model: {e.model}</h4>
          </ShipContent>
        </Link>
      ))}
    </Nau>
  );
};

export default Naus;
