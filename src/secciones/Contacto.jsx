import React, { useState } from "react";
import githubIcono from "../assets/github.png";
import instagramIcono from "../assets/instagram.png";
import correoIcono from "../assets/correo.png";
import linkedinIcono from "../assets/linkedin.png";

function Contacto() {
  const [b_mostrarMensajeLinkedin, set_b_mostrarMensajeLinkedin] = useState(false);

  const manejarClickLinkedin = (evento) => {
    evento.preventDefault();
    set_b_mostrarMensajeLinkedin(true);
    setTimeout(() => set_b_mostrarMensajeLinkedin(false), 1800);
  };

  return (
    <section className="contacto" id="contacto">

      {/* Barra superior */}
      <div className="contacto__header">
        <span className="contacto__seccion-label">Contacto</span>
        <span className="contacto__seccion-num">04 / 04</span>
      </div>

      <div className="contacto__contenido">

        {/* Título */}
        <h2 className="contacto__titulo">
          Hablemos<br />
          <span className="titulo-invertido">juntos</span>
        </h2>

        {/* Fila: subtexto + iconos */}
        <div className="contacto__fila">
          <p className="contacto__subtexto">
            Estoy abierto a <strong>proyectos freelance</strong>, colaboraciones
            y oportunidades laborales en IA y desarrollo de software.
          </p>

          <div className="contacto__iconos">

            <a
              href="https://github.com/diegotntn"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto__icono"
              aria-label="GitHub"
            >
              <img src={githubIcono} alt="GitHub" />
            </a>

            <a
              href="https://www.instagram.com/d.i.egotqm/"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto__icono"
              aria-label="Instagram"
            >
              <img src={instagramIcono} alt="Instagram" />
            </a>

            <a
              href="mailto:diego.telnie.2004@gmail.com"
              className="contacto__icono"
              aria-label="Correo electrónico"
            >
              <img src={correoIcono} alt="Correo electrónico" />
            </a>

            {/* LinkedIn con tooltip */}
            <div className="contacto__icono-wrapper">
              <a
                href="#"
                onClick={manejarClickLinkedin}
                className="contacto__icono"
                aria-label="LinkedIn"
              >
                <img src={linkedinIcono} alt="LinkedIn" />
              </a>
              {b_mostrarMensajeLinkedin && (
                <div className="contacto__tooltip">aún no listo :(</div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="contacto__footer">
        <p>Diego Téllez — {new Date().getFullYear()}</p>
        <p>Tlaxcala, México</p>
      </div>

    </section>
  );
}

export default Contacto;