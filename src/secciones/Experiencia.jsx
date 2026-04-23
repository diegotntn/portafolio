import React from "react";
import "../estilos/secciones/experiencia.css";

const l_experiencia = [
  {
    id: "plusmedic",
    empresa: "PlusMedic y Farmacias YaVaz",
    cargo: "Auxiliar de Sistemas",
    fechaInicio: "Sep. 2025",
    fechaFin: null, // null = actualidad
    tareas: [
      "Integración y consumo de APIs en entorno handheld (Handy) utilizando Python.",
      "Gestión y consultas en tablas SQL para extracción, transformación y carga de datos.",
      "Generación de reportes ejecutables en Excel: tablas dinámicas, fórmulas avanzadas y automatización con Python.",
      "Desarrollo de dashboards interactivos en JavaScript para visualización de indicadores clave.",
    ],
    stack: ["Python", "SQL", "Excel", "JavaScript", "APIs REST"],
  },
];

function Experiencia() {
  return (
    <section className="experiencia" id="experiencia">
      <div className="experiencia__num-fantasma">3</div>

      <div className="experiencia__bloque-negro">
        <span>Trayectoria</span>
        <span>profesional</span>
        <span>——</span>
      </div>

      <div className="experiencia__titulo-wrap">
        <h2 className="experiencia__titulo">Experiencia</h2>
      </div>

      <div className="experiencia__fragmento">
        trabajo — sistemas — datos
      </div>

      <div className="experiencia__contenido">
        <div className="experiencia__linea-sep" />

        <div className="timeline">
          {l_experiencia.map((trabajo) => (
            <div key={trabajo.id} className="timeline__entrada">

              {/* punto en la línea */}
              <div className={`timeline__punto${!trabajo.fechaFin ? " timeline__punto--activo" : ""}`} />

              {/* fecha */}
              <div className="timeline__fecha">
                {trabajo.fechaInicio} — {trabajo.fechaFin ?? "Actualidad"}
                {!trabajo.fechaFin && (
                  <span className="timeline__fecha-badge">En curso</span>
                )}
              </div>

              {/* empresa */}
              <h3 className="timeline__empresa">{trabajo.empresa}</h3>

              {/* cargo */}
              <p className="timeline__cargo">{trabajo.cargo}</p>

              {/* tareas */}
              <ul className="timeline__tareas">
                {trabajo.tareas.map((tarea, i) => (
                  <li key={i} className="timeline__tarea">
                    <span className="timeline__tarea-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="timeline__tarea-texto">{tarea}</span>
                  </li>
                ))}
              </ul>

              {/* stack */}
              {trabajo.stack && (
                <div className="timeline__stack">
                  {trabajo.stack.map((tag, i) => (
                    <span key={i} className="timeline__tag">{tag}</span>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiencia;