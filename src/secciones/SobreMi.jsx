import React from "react";
import "../estilos/secciones/sobre-mi.css";
import TarjetaHover from "../componentes/TarjetaHover";
import { l_sobre_mi } from "../datos/sobreMi";

function SobreMi() {
  return (
    <section className="sobre-mi" id="sobre-mi">

      {/* Barra superior */}
      <div className="sobre-mi__header">
        <span className="sobre-mi__seccion-label">Sobre mí</span>
        <span className="sobre-mi__seccion-num">03 / 04</span>
      </div>

      <div className="sobre-mi__contenedor">

        {/* Título */}
        <h2 className="sobre-mi__titulo">
          Sobre<br />
          <span className="titulo-invertido">mí</span>
        </h2>

        {/* Tarjetas hover */}
        <div className="sobre-mi__zona-tarjetas">
          {l_sobre_mi.map((tarjeta) => {
            const {
              id,
              tituloBoton,
              tituloTarjeta,
              descripcion,
              l_elementos,
              direccion
            } = tarjeta;

            return (
              <div
                key={id}
                className={`sobre-mi__item sobre-mi__item--${id}`}
              >
                <TarjetaHover
                  tituloBoton={tituloBoton}
                  tituloTarjeta={tituloTarjeta}
                  descripcion={descripcion}
                  l_elementos={l_elementos}
                  direccion={direccion}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default SobreMi;