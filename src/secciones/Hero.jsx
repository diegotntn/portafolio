import React from "react";

function Hero() {
  return (
    <section className="hero">

      {/* Barra superior */}
      <div className="hero__topbar">
        <span>Portfolio — <span>2025</span></span>
        <div className="hero__topbar-centro">
          <div className="hero__topbar-dot"></div>
          <span>Disponible para proyectos</span>
        </div>
        <span className="hero__topbar-derecha">IA &amp; Desarrollo Web</span>
      </div>

      {/* Nombre + label */}
      <div className="hero__contenido">
        <div className="hero__label">Ingeniero en Inteligencia Artificial</div>
        <div className="hero__nombre">
          <h1>
            Diego<br />
            <span className="nombre-invertido">Téllez</span>
          </h1>
        </div>

        {/* Ticker de especialidades */}
        <div className="hero__ticker">
          <span className="hero__ticker-item">Machine Learning <span>→</span></span>
          <span className="hero__ticker-item">Desarrollo Web <span>→</span></span>
          <span className="hero__ticker-item">Sistemas Inteligentes <span>→</span></span>
          <span className="hero__ticker-item">IA Aplicada <span>→</span></span>
          <span className="hero__ticker-item">Full Stack <span>→</span></span>
        </div>
      </div>

      {/* Descripción + botones */}
      <div className="hero__bottom">
        <div className="hero__descripcion">
        </div>
        <nav className="hero__botones">
          <a href="#proyectos" className="hero__boton">Proyectos</a>
          <a href="#sobre-mi" className="hero__boton">Sobre mí</a>
          <a href="#contacto" className="hero__boton">Contacto</a>
        </nav>
      </div>

      {/* Ubicación */}
      <div className="hero__ubicacion">
        Tlaxcala, México
      </div>

    </section>
  );
}

export default Hero;