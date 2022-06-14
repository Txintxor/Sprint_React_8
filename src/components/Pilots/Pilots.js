import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Fitx, Button, PilotContent } from "../styled-c/styled-components.js";
import Card from "react-bootstrap/Card";

const Pilots = () => {
  const location = useLocation();
  const pilot = location.state;
  const [homeWorld, setHomeWorld] = useState("");
  const [especie, setEspecie] = useState("");

  useEffect(() => {
    axios.get(pilot.homeworld).then((data) => {
      setHomeWorld(data.data.name);
    });
    axios.get(pilot.species).then((data) => {
      setEspecie(data.data.name);
    });
  }, []);

  return (
    <>
      <Fitx>
        <Card className="bg-transparent">
          <Card.Title className="cardTitle">{pilot.name}</Card.Title>
          <Card.Text className="cardText">
            Data de neixement: {pilot.birth_year}
          </Card.Text>
          <Card.Text className="cardText">
            Color de cabell : {pilot.hair_color}
          </Card.Text>
          <Card.Text className="cardText">
            Alçada : {pilot.height} cm.
          </Card.Text>
          <Card.Text className="cardText">Pes : {pilot.mass} kg.</Card.Text>
          <Card.Text className="cardText">
            Color de pell : {pilot.skin_color}
          </Card.Text>
          <Card.Text className="cardText">
            Planeta d´origen : {homeWorld}
          </Card.Text>
          <Card.Text className="cardText">Especie : {especie}</Card.Text>
        </Card>
        <Button className="tornaButton" href="/Naus">
          Torna
        </Button>
      </Fitx>
    </>
  );
};

export default Pilots;
