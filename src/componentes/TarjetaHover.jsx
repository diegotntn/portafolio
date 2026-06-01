import React, { useState, useRef, useEffect } from "react";
import "../estilos/componentes/tarjeta-hover.css";

function TarjetaHover({
  tituloBoton,
  tituloTarjeta,
  descripcion,
  l_elementos = [],
  direccion = "derecha"
}) {
  const [abierta, setAbierta] = useState(false);
  const ref = useRef(null);
  const b_es_formacion = tituloTarjeta === "formación académica";

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickFuera = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setAbierta(false);
      }
    };
    if (abierta) {
      document.addEventListener("mousedown", handleClickFuera);
      document.addEventListener("touchstart", handleClickFuera);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickFuera);
      document.removeEventListener("touchstart", handleClickFuera);
    };
  }, [abierta]);

  const renderElemento = (elemento, index) => {
    // Nuevo formato: { etiqueta, valor }
    if (elemento && typeof elemento === "object" && "etiqueta" in elemento) {
      return (
        <li key={index} className="tarjeta-hover__item">
          <strong>{elemento.etiqueta}:</strong> {elemento.valor}
        </li>
      );
    }
    // Formato legacy: string plano
    return (
      <li key={index} className="tarjeta-hover__item">
        {elemento}
      </li>
    );
  };

  return (
    <div
      ref={ref}
      className={`tarjeta-hover tarjeta-hover--${direccion}${abierta ? " tarjeta-hover--abierta" : ""}`}
    >
      <button
        className="tarjeta-hover__boton"
        type="button"
        onClick={() => setAbierta((prev) => !prev)}
        aria-expanded={abierta}
      >
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
