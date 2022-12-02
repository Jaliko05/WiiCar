import { Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./css/reset.css";
import "./App.css";
import Encabezado from "./components/Encabezado";
import Footer from "./components/Footer";
import SinDatos from "./components/SinDatos";
import CargaDatos from "./components/CargaDatos";
import Cargando from "./components/Cargando"

function App() {
  const navigate = useNavigate();
  const [carData, setcarData] = useState([]);
  const [desde, setDesde] = useState(0);
  const [hasta, setHasta] = useState(11);
  const [numPage, setnumPage] = useState(1);
  const [numCheck, setNumCheck] = useState(0);
  const [rutaPath, setRutaPath] = useState("/");
  let location = useLocation();


  useEffect(function () {
    setRutaPath(location.pathname);
  });

  return (
    <>
      <Encabezado />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<SinDatos />} />
          <Route
            path="/datos"
            element={
              <CargaDatos
                carData={carData}
                setcarData={setcarData}
                desde={desde}
                hasta={hasta}
                numCheck={numCheck}
                setNumCheck={setNumCheck}
                setRutaPath={setRutaPath}
              />
            }
          />
          <Route path="/cargando" element={<Cargando/>} />
        </Routes>
      </div>
      <Footer
        setDesde={setDesde}
        setHasta={setHasta}
        desde={desde}
        hasta={hasta}
        setnumPage={setnumPage}
        numPage={numPage}
        carData={carData}
        numCheck={numCheck}
        setNumCheck={setNumCheck}
        rutaPath={rutaPath}
      />
    </>
  );
}

export default App;
