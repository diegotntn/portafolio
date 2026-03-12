import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__contenido">
        <div className="hero__nombre">
          <h1>DIEGO TÉLLEZ</h1>
        </div>

        <div className="hero__descripcion">
          <p>Ingeniero en Inteligencia Artificial</p>
          <p>Desarrollador de software</p>
        </div>

        <div className="hero__botones">
          <a href="#proyectos" className="hero__boton">Proyectos</a>
          <a href="#sobre-mi" className="hero__boton">Sobre mí</a>
          <a href="#contacto" className="hero__boton">Contacto</a>
        </div>

        <div className="hero__ubicacion">
          <p>Tlaxcala, México</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;