import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const Bebida = ({ bebida }) => {
  const { handleModalClick, handleBebidaIdClick } = useBebidas();

  return (
    <Col md={6} lg={4}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          height={300}
          width={50}
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>

          <Button
            onClick={() => {
              handleModalClick();
              handleBebidaIdClick(bebida.idDrink);
            }}
            variant={"warning"}
            className="w-100 text-uppercase mt-2"
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bebida;
