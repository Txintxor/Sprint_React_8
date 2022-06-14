import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Fitx, Button, peliContent } from "../styled-c/styled-components.js";
import Card from "react-bootstrap/Card";

const Pelis = () => {
  const location = useLocation();
  const peli = location.state;

  return (
    <Fitx>
      <Card className="bg-transparent">
        <Card.Title className="cardTitle">{peli.title}</Card.Title>
        <Card.Text className="cardText">Director: {peli.director}</Card.Text>
        <Card.Text className="cardText">Productor : {peli.producer}</Card.Text>
        <Card.Text className="cardText">
          Data d´estrena : {peli.release_date}
        </Card.Text>
      </Card>
      <Button className="tornaButton" href="/Naus">
        Torna
      </Button>
    </Fitx>
  );
};

export default Pelis;
