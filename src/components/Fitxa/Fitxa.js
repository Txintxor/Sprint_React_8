import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

import { Fitx, Button, PilotContent } from "../styled-c/styled-components.js";
import Card from "react-bootstrap/Card";

const Fitxa = () => {
  const location = useLocation();
  const ship = location.state;
  const [pilots, setPilots] = useState([]);
  const [pelis, setPelis] = useState([]);

  useEffect(() => {
    ship.pilots.map((pilot) =>
      axios.get(pilot).then((data) => {
        setPilots((old) => [...old, data.data]);
      })
    );
    ship.films.map((peli) =>
      axios.get(peli).then((data) => {
        setPelis((old) => [...old, data.data]);
      })
    );
  }, []);

  console.log(pilots);
  return (
    <Fitx>
      <Card className="bg-transparent">
        <Card.Title className="cardTitle">{ship.name}</Card.Title>
        <Card.Text className="cardText">
          Fabricant: {ship.manufacturer}
        </Card.Text>
        <Card.Text className="cardText">
          Preu: {ship.cost_in_credits} credits
        </Card.Text>
        <Card.Text className="cardText">
          Longitud: {ship.length} metres
        </Card.Text>
        <Card.Text className="cardText">
          Velocitat máxima: {ship.max_atmosphering_speed}
        </Card.Text>
        <Card.Text className="cardText"> Tripulació: {ship.crew}</Card.Text>
        <Card.Text className="cardText">
          Passatgers: {ship.passengers}
        </Card.Text>
        <Card.Text className="cardText">
          Capacitat de Carrega: {ship.cargo_capacity} tones
        </Card.Text>
        <Card.Text className="cardText">Consum: {ship.consumables}</Card.Text>
        <Card.Text className="cardText">
          Hyperdrive: {ship.hyperdrive_rating}
        </Card.Text>
        <Card.Text className="cardText"> MGLT: {ship.MGLT}</Card.Text>
        <Card.Text className="cardText">
          Classe: {ship.starship_class}
        </Card.Text>
        <Card.Text className="cardText">
          <h1>Pilots:</h1>
          <PilotContent>
            {pilots.map((e) => (
              <Link to="/Pilots" state={e} key={e.name + e.mass}>
                <h2 className="pilotName"> {e.name}</h2>
              </Link>
            ))}
          </PilotContent>
        </Card.Text>
        <Card.Text className="cardText">
          <h1>Pel¨licules:</h1>
          <PilotContent>
            {pelis.map((e) => (
              <Link to="/Pelis" state={e} key={e.title}>
                <h2 className="pilotName"> {e.title}</h2>
              </Link>
            ))}
          </PilotContent>
        </Card.Text>
      </Card>
      <Button className="tornaButton" href="/Naus">
        Torna
      </Button>
    </Fitx>
  );
};

export default Fitxa;
