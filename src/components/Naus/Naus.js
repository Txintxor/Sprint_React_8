import React, { useEffect, useState } from "react";
import { Nau, ShipContent } from "../styled-c/styled-components.js";
import axios from "axios";
const Naus = () => {
  const [ships, setShips] = useState([]);
  // const [key, setKey] = useState(0);

  useEffect(() => {
    // fetch("https://swapi.py4e.com/api/starships")
    // .then((result) => {
    //   return result.json();
    // })
    axios
      .get("https://swapi.py4e.com/api/starships")
      .then((data) => {
        setShips(data.data.results)})
      .catch((error) => console.log(error.toJSON));
  }, []);

  return (
    <Nau>
      {ships.map((e) => (
        <ShipContent href="/" key={e.name}>
          <h2 className="shipName"> Nom :{e.name}</h2> <h4>Model: {e.model}</h4>
        </ShipContent>
      ))}
    </Nau>
  );
};

export default Naus;
