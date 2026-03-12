import React, { useState } from "react";

import "../../estilos/componentes/tarjeta-proyecto.css";

function TarjetaProyecto({ proyecto, seleccionarProyecto }) {
  return (
    <div className="proyecto">
      <h3 className="proyecto__nombre">{proyecto.titulo}</h3>

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