import { Fitx, Button } from "../styled-c/styled-components.js";
import Card from "react-bootstrap/Card";
import {Link,  useLocation } from "react-router-dom";

const Fitxa = () => {
  const location = useLocation();
  const ship = location.state;

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
        </Card>
        <Link to="/Pilots" state={ship.pilots}>Pilots</Link>
        <Link to="/Pelis" state={ship.films}>Pelis</Link>
        <Button className="tornaButton" href="/Naus">Torna</Button>
      </Fitx>
      
        
    
  );
};

export default Fitxa;
