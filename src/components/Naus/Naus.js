import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Nau, ShipContent } from "../styled-c/styled-components.js";

let page = 1;
const Naus = (props) => {
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    loadPage();
  }, []);

  return (
    <Nau>
      {ships.map((e) => (
        <Link to="/Fitxa" state={e} key={e.name + e.model}>
          <ShipContent href="/Fitxa" >
            <h2 className="shipName"> Nom :{e.name}</h2>
            <h4 className="shipModel">Model: {e.model}</h4>
          </ShipContent>
        </Link>
      ))}
    </Nau>
  );
};

export default Naus;
