import React from "react";
import "../../estilos/componentes/tarjeta-proyecto.css";

function TarjetaProyecto({ proyecto, seleccionarProyecto, estaSeleccionado }) {
  return (
    <div className={`proyecto${estaSeleccionado ? " proyecto--seleccionado" : ""}`}>
      <div className="proyecto__fila">
        <span className="proyecto__numero">
          {String(proyecto.id).padStart(2, "0")}
        </span>
        <h3 className="proyecto__nombre">{proyecto.titulo}</h3>
      </div>

      <button
        type="button"
        className="proyecto__descripcion"
        onClick={() => seleccionarProyecto(proyecto)}
      >
        {proyecto.descripcionCorta}
      </button>
    </div>
  );
}

export default TarjetaProyecto;