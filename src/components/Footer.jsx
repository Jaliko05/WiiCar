import React from "react";
import "../css/footer.css";
import menor from "../assets/menor-que.png";
import mayor from "../assets/mayor-que.png";
import { useNavigate, useLocation } from "react-router-dom";

function Footer(props) {
  const navigate = useNavigate();
  let location = useLocation();

  function paginaPosterior() {
    props.setNumCheck(0);
    if (props.hasta == 101) {
      props.setHasta(11);
      props.setDesde(0);
      props.setnumPage(1);
    } else {
      props.setHasta(props.hasta + 10);
      props.setDesde(props.desde + 10);
      props.setnumPage(props.numPage + 1);
    }
  }
  function paginaAnterior() {
    props.setNumCheck(0);
    if (props.desde == 0) {
      props.setHasta(101);
      props.setDesde(90);
      props.setnumPage(10);
    } else {
      props.setHasta(props.hasta - 10);
      props.setDesde(props.desde - 10);
      props.setnumPage(props.numPage - 1);
    }
  }
  return (
    <>
      <footer>
        <input
          type="search"
          placeholder="Busqueda por Coincidencia"
          id="Buscador"
        />
        <div className="resultados">
          <label htmlFor="resultado-select">Resultados</label>
          <select name="resultado-select" id="resultado-select">
            <option>{props.numCheck}</option>
          </select>
        </div>
        <div className="cambio-pagina">
          <button
            onClick={() => {
              paginaAnterior();
            }}
          >
            <img src={menor} />
          </button>
          <input
            type="search"
            placeholder={props.numPage}
            id="Buscador-page"
          ></input>
          <label htmlFor="">de 10</label>
          <button>
            <img
              src={mayor}
              onClick={() => {
                paginaPosterior();
              }}
            />
          </button>
        </div>
        {props.rutaPath == "/" ? (
          <select
          className="acciones-select"
            defaultValue={"default"}
            onChange={(e) => {
              if (e.target.value == 25) {
                navigate("/cargando");
                console.log(location.pathname);
              }
            }}
          >
            <option value="default" disabled hidden>
              Acciones
            </option>
            <option value={25}>Cargue masivo</option>
            <option>Nuevo registro</option>
          </select>
        ) : (
          <select className="acciones-select" defaultValue={"default"}>
            <option value="default" disabled hidden>
              Acciones
            </option>
            <option>Amacenar</option>
            <option>Cargue masivo</option>
            <option>Descargar excel</option>
            <option>Nuevo registro</option>
            <option style={{ color: "#e63020" }}>Eliminar</option>
          </select>
        )}
      </footer>
    </>
  );
}

export default Footer;
