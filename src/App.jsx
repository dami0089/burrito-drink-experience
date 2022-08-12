import { Carousel, Container, Image, ModalBody } from "react-bootstrap";
import CarouselComponent from "./components/Carousel";
import Formulario from "./components/Formulario";
import ListadoBebidas from "./components/ListadoBebidas";
import ModalBebida from "./components/ModalBebida";
import { BebidasProvider } from "./context/BebidasProvider";
import { CategoriasProvider } from "./context/CategoriasProvider";
import { useState } from "react";

function App() {
  const [mostrarRecomendados, setMostrarRecomendados] = useState(true);

  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-1">
          <Image src="https://res.cloudinary.com/dlh7nqyxu/image/upload/v1660278290/burroheader_s0cqku.png" />
          <h1>The Burrito Drink Experience</h1>
        </header>

        <Container className="mt-5">
          <Formulario setMostrarRecomendados={setMostrarRecomendados} />
          {mostrarRecomendados ? <CarouselComponent /> : <ListadoBebidas />}

          <ModalBebida />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  );
}

export default App;
