import React from "react";
import "../../estilos/componentes/detalle-proyecto.css";

function DetalleProyecto({ proyecto }) {
  if (!proyecto) {
    return (
      <div className="detalle-proyecto detalle-proyecto--vacio">
        <span className="detalle-proyecto__placeholder">
          Selecciona un proyecto
        </span>
      </div>
    );
  }

  return (
    <div className="detalle-proyecto">

      <h3 className="detalle-proyecto__titulo">
        {proyecto.titulo}
      </h3>

      {proyecto.contexto && (
        <p className="detalle-proyecto__contexto">
          {proyecto.contexto}
        </p>
      )}

      <p className="detalle-proyecto__descripcion">
        {proyecto.descripcion}
      </p>

      {/* Imágenes */}
      {proyecto.imagenes && proyecto.imagenes.length > 0 && (
        <div className="detalle-proyecto__imagenes">
          {proyecto.imagenes.map((imagen, index) => (
            <img
              key={index}
              src={imagen}
              alt={`imagen proyecto ${index + 1}`}
              className="detalle-proyecto__imagen"
            />
          ))}
        </div>
      )}

      {/* Tecnologías */}
      {proyecto.tecnologias && proyecto.tecnologias.length > 0 && (
        <div className="detalle-proyecto__bloque">
          <h4 className="detalle-proyecto__subtitulo">Tecnologías</h4>
          <div className="detalle-proyecto__etiquetas">
            {proyecto.tecnologias.map((tecnologia, index) => (
              <span key={index} className="detalle-proyecto__etiqueta">
                {tecnologia}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      {proyecto.links && proyecto.links.length > 0 && (
        <div className="detalle-proyecto__bloque">
          <h4 className="detalle-proyecto__subtitulo">Enlaces</h4>
          <div className="detalle-proyecto__links">
            {proyecto.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="detalle-proyecto__link"
              >
                {link.nombre}
              </a>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default DetalleProyecto;