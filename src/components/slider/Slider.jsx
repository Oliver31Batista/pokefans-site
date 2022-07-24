import React, { useState } from "react";
import estilos from "../slider/Slider.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { createTheme } from "@mui/material/styles"

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: ''
//         }
//     }
// });

function Slider({ imagenes }) {
  const [imagenActual, setImagenActual] = useState(0);
  const cantidadImagenes = imagenes?.length;

  if (!Array.isArray(imagenes) || cantidadImagenes == 0) return;

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidadImagenes - 1? 0 : imagenActual + 1);
  }

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidadImagenes - 1 : imagenActual - 1);
  }
  
  return (
    <div className={estilos.container}>
      <button className={estilos.sliderButtons} onClick={anteriorImagen}>
        <ArrowBackIosNewIcon />
      </button>
      {imagenes.map((imagen, index) => {
        return (
          <div 
                className={
                    imagenActual === index 
                        ? `${estilos.slide} ${estilos.active}`
                        : estilos.slide}>{ imagenActual === index && (
            <img key={index} src={imagen} alt="imagen" />
          )}
          </div>
        );
      })}
      <button className={estilos.sliderButtons} onClick={siguienteImagen}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
}

export default Slider;
