import React from "react";
import "../estilos/componentes/tarjeta-hover.css";

function TarjetaHover({
  tituloBoton,
  tituloTarjeta,
  descripcion,
  l_elementos = [],
  direccion = "derecha"
}) {
  const b_es_formacion = tituloTarjeta === "formación académica";

  const renderElemento = (texto, index) => {
    const partes = texto.split(":");

    if (partes.length > 1) {
      return (
        <li key={index} className="tarjeta-hover__item">
          <strong>{partes[0]}:</strong> {partes.slice(1).join(":")}
        </li>
      );
    }

    return (
      <li key={index} className="tarjeta-hover__item">
        {texto}
      </li>
    );
  };

  return (
    <div className={`tarjeta-hover tarjeta-hover--${direccion}`}>
      <button className="tarjeta-hover__boton" type="button">
        {tituloBoton}
      </button>

      <div className="tarjeta-hover__contenido">
        <div className="tarjeta-hover__tarjeta">
          <h3 className="tarjeta-hover__titulo">{tituloTarjeta}</h3>

          {b_es_formacion ? (
            <div className="tarjeta-hover__formacion">
              {descripcion && (
                <p className="tarjeta-hover__formacion-carrera">
                  {descripcion}
                </p>
              )}

              {l_elementos.length > 0 && (
                <div className="tarjeta-hover__formacion-datos">
                  {l_elementos.map((elemento, index) => (
                    <p key={index} className="tarjeta-hover__formacion-linea">
                      {elemento}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <>
              {descripcion && (
                <p className="tarjeta-hover__descripcion">{descripcion}</p>
              )}

              {l_elementos.length > 0 && (
                <ul className="tarjeta-hover__lista">
                  {l_elementos.map(renderElemento)}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TarjetaHover;