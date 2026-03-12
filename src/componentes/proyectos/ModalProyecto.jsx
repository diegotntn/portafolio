import React, { useState } from "react";

import "../../estilos/componentes/modal-proyecto.css";

function ModalProyecto({ proyecto, cerrarModal }) {
  if (!proyecto) {
    return null;
  }

  return (
    <div className="modal" onClick={cerrarModal}>
      <div
        className="modal__contenido"
        onClick={(evento) => evento.stopPropagation()}
      >
        <button
          className="modal__boton-cerrar"
          onClick={cerrarModal}
          type="button"
          aria-label="Cerrar ventana"
        >
          ×
        </button>

        <h2 className="modal__titulo">{proyecto.titulo}</h2>

        {proyecto.imagen && (
          <img
            src={proyecto.imagen}
            alt={proyecto.titulo}
            className="modal__imagen"
          />
        )}

        <p className="modal__descripcion">{proyecto.descripcionLarga}</p>

        <div className="modal__bloque">
          <h3 className="modal__subtitulo">Tecnologías</h3>
          <div className="modal__etiquetas">
            {proyecto.tecnologias.map((tecnologia, index) => (
              <span key={index} className="modal__etiqueta">
                {tecnologia}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProyecto;