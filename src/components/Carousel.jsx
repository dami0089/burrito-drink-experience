import { Button, Card, Col, Row } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";
import { useEffect } from "react";

function CarouselComponent() {
  const {
    consultarBebidaRandom1,
    bebidasRandom1,
    consultarBebidaRandom2,
    bebidasRandom2,
    consultarBebidaRandom3,
    bebidasRandom3,
    handleModalClick,
    handleBebidaIdClick,
  } = useBebidas();

  useEffect(() => {
    consultarBebidaRandom1();
    consultarBebidaRandom2();
    consultarBebidaRandom3();
  }, []);

  return (
    <>
      <h1>RECOMENDADAS POR EL BURRO</h1>
      <Row className="mt-5">
        <Col md={6} lg={4}>
          <Card className="mb-4">
            <Card.Img
              variant="top"
              height={300}
              width={50}
              src={bebidasRandom1.strDrinkThumb}
              alt={`Imagen de ${bebidasRandom1.strDrink}`}
            />
            <Card.Body>
              <Card.Title>{bebidasRandom1.strDrink}</Card.Title>

              <Button
                onClick={() => {
                  handleModalClick();
                  handleBebidaIdClick(bebidasRandom1.idDrink);
                }}
                variant={"warning"}
                className="w-100 text-uppercase mt-2"
              >
                Ver Receta
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="mb-4">
            <Card.Img
              variant="top"
              height={300}
              width={50}
              src={bebidasRandom2.strDrinkThumb}
              alt={`Imagen de ${bebidasRandom2.strDrink}`}
            />
            <Card.Body>
              <Card.Title>{bebidasRandom2.strDrink}</Card.Title>

              <Button
                onClick={() => {
                  handleModalClick();
                  handleBebidaIdClick(bebidasRandom2.idDrink);
                }}
                variant={"warning"}
                className="w-100 text-uppercase mt-2"
              >
                Ver Receta
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="mb-4">
            <Card.Img
              variant="top"
              height={300}
              width={50}
              src={bebidasRandom3.strDrinkThumb}
              alt={`Imagen de ${bebidasRandom3.strDrink}`}
            />
            <Card.Body>
              <Card.Title>{bebidasRandom3.strDrink}</Card.Title>

              <Button
                onClick={() => {
                  handleModalClick();
                  handleBebidaIdClick(bebidasRandom3.idDrink);
                }}
                variant={"warning"}
                className="w-100 text-uppercase mt-2"
              >
                Ver Receta
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CarouselComponent;
