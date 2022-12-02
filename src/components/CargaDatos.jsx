import React from "react";
import { useNavigate, useLocation  } from "react-router-dom";
import { useState, useEffect } from "react";
import swalert from "sweetalert";
import "../css/cargaDatos.css";
import ordenar from "../assets/arriba_abajo.png";
import ver from "../assets/ver.png"
import axios from "axios";

function CargaDatos(props) {
  let clase = "contenedor-tabla_cuerpo";
  const [sentido, setSentido] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:3000/data")
      .then((respose) => {
        const dataApi = respose.data;
        props.setcarData(dataApi);
      })
      .catch((error) => {
        console.log(error);
        navigate("/");
      });
  }, []);

  useEffect(function () {
    props.setRutaPath(location.pathname)
  })

  function ordenarAsc(columna) {
    let datos = props.carData;

    datos.sort((a, b) => {
      if (a[columna] == b[columna]) {
        return 0;
      }
      if (sentido == true) {
        if (a[columna] > b[columna]) {
          return -1;
        }
      } else {
        if (a[columna] < b[columna]) {
          return -1;
        }
      }
      return 1;
    });
    props.setcarData(datos);

    if (sentido == true) {
      setSentido(false);
    } else {
      setSentido(true);
    }
    navigate("/datos");
  }

  return (
    <>
    {!props.carData && <>{swalert("Cargue masivo, Espera un momento mientras procesasmos los datos, esto puede tardar unos minutos")}</>}
      <div className="contenedor-tabla">
        <table>
          <thead>
            <tr className="contenedor-tabla_encabezado">
              <th className="tdSmall">
                <input type="checkbox" />
              </th>
              <th
                className="tdSmall"
                onClick={() => {
                  ordenarAsc("id");
                }}
              >
                Id <img src={ordenar} />
              </th>
              <th
                onClick={() => {
                  ordenarAsc("placa");
                }}
              > 
                Placa <img src={ordenar} />
              </th>
              <th
                onClick={() => {
                  ordenarAsc("marca");
                }}
              >
                Marcar
                <img src={ordenar} />
              </th>
              <th
                className="tdSmall"
                onClick={() => {
                  ordenarAsc("modelo");
                }}
              >
                Modelo
                <img src={ordenar} />
              </th>
              <th
                onClick={() => {
                  ordenarAsc("kilometraje");
                }}
              >
                Kilometraje
                <img src={ordenar} />
              </th>
              <th
                onClick={() => {
                  ordenarAsc("trasmicion");
                }}
              >
                Transmisión
                <img src={ordenar} />
              </th>
              <th
                onClick={() => {
                  ordenarAsc("tipo");
                }}
              >
                Tipo
                <img src={ordenar} />
              </th>
              <th
                className="tdBig"
                onClick={() => {
                  ordenarAsc("precioCompra");
                }}
              >
                Precio de compra
                <img src={ordenar} />
              </th>
              <th className="tdBig"
                onClick={() => {
                  ordenarAsc("proviniencia");
                }}
              >
                Proviniencia
                <img src={ordenar} />
              </th>
              <th className="tdBig">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {props.carData.map((oneCar, idx) => {
              clase =
                oneCar.id % 2 == 0
                  ? "contenedor-tabla_cuerpo"
                  : "contenedor-tabla_cuerpo2";

              if (oneCar.id > props.desde && oneCar.id < props.hasta) {
                return (
                  <tr key={idx} className={clase}>
                    <td className="tdSmall">
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          if (e.target.checked) {
                            props.setNumCheck(props.numCheck + 1);
                            e.target.checked = true;
                          } else {
                            props.setNumCheck(props.numCheck - 1);
                          }
                        }}
                      />
                    </td>
                    <td className="tdSmall">{oneCar.id}</td>
                    <td>{oneCar.placa}</td>
                    <td>{oneCar.marca}</td>
                    <td className="tdSmall">{oneCar.modelo}</td>
                    <td>{oneCar.kilometraje}</td>
                    <td>{oneCar.trasmicion}</td>
                    <td>{oneCar.tipo}</td>
                    <td className="tdBig">{oneCar.precioCompra}</td>
                    <td className="tdBig-provi">
                      {oneCar.proviniencia}
                      <img src={ver} />
                      </td>
                    <td className="tdBig">
                      <select id="acciones-tabla" defaultValue={"default"}>
                        <option value="default" disabled hidden>
                          Acciones
                        </option>
                        <option>Editar</option>
                        <option>Almacenar</option>
                      </select>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CargaDatos;
