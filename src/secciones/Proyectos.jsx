import React, { useState } from "react";

import "../estilos/secciones/proyectos.css";

import TarjetaProyecto from "../componentes/proyectos/TarjetaProyecto";
import DetalleProyecto from "../componentes/proyectos/DetalleProyecto";
import l_proyectos from "../datos/proyectos";

function Proyectos() {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const seleccionarProyecto = (proyecto) => {
    setProyectoSeleccionado(proyecto);
  };

  return (
    <section className="proyectos" id="proyectos">
      <div className="proyectos__contenido">
        <h2 className="proyectos__titulo">PROYECTOS</h2>

        <div className="proyectos__layout">
          <div className="proyectos__lista">
            {l_proyectos.map((proyecto) => (
              <TarjetaProyecto
                key={proyecto.id}
                proyecto={proyecto}
                seleccionarProyecto={seleccionarProyecto}
              />
            ))}
          </div>

          <div className="proyectos__panel">
            {proyectoSeleccionado && (
              <DetalleProyecto proyecto={proyectoSeleccionado} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;