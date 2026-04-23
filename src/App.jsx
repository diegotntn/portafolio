import React from "react";
import Hero from "./secciones/Hero";
import Proyectos from "./secciones/Proyectos";
import Experiencia from "./secciones/Experiencia";
import SobreMi from "./secciones/SobreMi";
import Contacto from "./secciones/Contacto";

function App() {
  return (
    <>
      <Hero />
      <Proyectos />
      <Experiencia laboral/>
      <SobreMi />
      <Contacto />
    </>
  );
}

export default App;