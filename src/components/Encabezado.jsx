import React from "react";
import "../css/encabezado.css";
import { useNavigate } from "react-router-dom";
import iconMenu from "../assets/menu.png";
import logo from "../assets/LOGO.png";
import salir from "../assets/apagar.png";
import reparacion from "../assets/reparacionAutos.png";
import almacenado from "../assets/garajes.png";
import venta from "../assets/venta.png";
import vendido from "../assets/vendido.png";

function Encabezado() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="encabezado">
          <a>
            <img src={iconMenu} className="icon_menu" />
          </a>

          <img src={logo} className="img_logo" />

          <button
            className="button-salir"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={salir} />
            <p>Salir</p>
          </button>
        </div>
        <nav>
          <ul>
            <li>
              <a>
                <button className="nav_button-pestaña">
                  <img src={reparacion} />
                  Preparación
                </button>
              </a>
            </li>
            <li>
              <a>
                <button className="nav_button-pestaña">
                  <img src={almacenado} />
                  Almacenamiento
                </button>
              </a>
            </li>
            <li>
              <a>
                <button className="nav_button-pestaña">
                  <img src={venta} />
                  En Venta
                </button>
              </a>
            </li>
            <li>
              <a>
                <button className="nav_button-pestaña">
                  <img src={vendido} />
                  Vendidos
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Encabezado;
