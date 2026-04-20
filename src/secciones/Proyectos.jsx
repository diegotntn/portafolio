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

      {/* Barra superior */}
      <div className="proyectos__header">
        <span className="proyectos__seccion-label">Proyectos</span>
        <span className="proyectos__seccion-num">02 / 04</span>
      </div>

      <div className="proyectos__contenido">

        {/* Título */}
        <h2 className="proyectos__titulo">
          Mis<br />
          <span className="titulo-invertido">proyectos</span>
        </h2>

        {/* Layout */}
        <div className="proyectos__layout">
          <div className="proyectos__lista">
            {l_proyectos.map((proyecto) => (
              <TarjetaProyecto
                key={proyecto.id}
                proyecto={proyecto}
                seleccionarProyecto={seleccionarProyecto}
                estaSeleccionado={proyectoSeleccionado?.id === proyecto.id}
              />
            ))}
          </div>

          <div className="proyectos__panel">
            <DetalleProyecto proyecto={proyectoSeleccionado} />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Proyectos;