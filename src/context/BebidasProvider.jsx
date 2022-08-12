import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);
  const [modal, setModal] = useState(false);
  const [bebidaID, setBebidaID] = useState(null);
  const [receta, setReceta] = useState({});
  const [cargando, setCargando] = useState(false);
  const [bebidasRandom1, setBebidasRandom1] = useState([]);
  const [bebidasRandom2, setBebidasRandom2] = useState([]);
  const [bebidasRandom3, setBebidasRandom3] = useState([]);

  useEffect(() => {
    setCargando(true);
    const obtenerReceta = async () => {
      if (!bebidaID) return;
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaID}`;

        const { data } = await axios(url);
        setReceta(data.drinks[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setCargando(false);
      }
    };
    obtenerReceta();
  }, [bebidaID]);

  const consultarBebidaRandom1 = async () => {
    try {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
      const { data } = await axios(url);
      setBebidasRandom1(data.drinks[0]);
      // console.log(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };
  const consultarBebidaRandom2 = async () => {
    try {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
      const { data } = await axios(url);
      setBebidasRandom2(data.drinks[0]);
      // console.log(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };
  const consultarBebidaRandom3 = async () => {
    try {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
      const { data } = await axios(url);
      setBebidasRandom3(data.drinks[0]);
      // console.log(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const consultarBebida = async (datos) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;

      const { data } = await axios(url);
      setBebidas(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleBebidaIdClick = (id) => {
    setBebidaID(id);
  };

  return (
    <BebidasContext.Provider
      value={{
        consultarBebida,
        bebidas,
        handleModalClick,
        modal,
        handleBebidaIdClick,
        receta,
        cargando,
        consultarBebidaRandom1,
        bebidasRandom1,
        consultarBebidaRandom2,
        bebidasRandom2,
        consultarBebidaRandom3,
        bebidasRandom3,
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};
export { BebidasProvider };

export default BebidasContext;
