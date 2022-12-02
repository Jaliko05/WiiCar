import React from "react";
import swalert from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Cargando() {
  const navigate = useNavigate();
  swalert({
    title: "Cargue masivo",
    text: "Cargue masivo, Espera un momento mientras procesasmos los datos, esto puede tardar unos minutos.",
    timer: 2000,
    icon: "success" ,
    buttons: false,
  });

  useEffect(() => {
    setTimeout(function () {
      navigate("/datos");
    }, 2000);
  }, []);

  return <></>;
}

export default Cargando;
