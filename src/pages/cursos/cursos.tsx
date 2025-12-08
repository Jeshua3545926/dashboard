import React from "react";
import "./media/cursos.css";

const Cursos: React.FC = () => {

  const handlePointerDown = (e: React.PointerEvent<HTMLElement>) => {
    const card = e.currentTarget as HTMLElement;

    card.dataset.dragging = "true";
    card.dataset.startX = String(e.clientX);
    card.dataset.startY = String(e.clientY);

    // activar blob líquida
    card.classList.add("liquid-active");
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const card = e.currentTarget as HTMLElement;
    if (card.dataset.dragging !== "true") return;

    const rect = card.getBoundingClientRect();

    // posición del pointer dentro de la tarjeta
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // actualizar la posición de la esquina líquida
    card.style.setProperty("--lx", `${x - 20}px`);
    card.style.setProperty("--ly", `${y - 20}px`);
    card.style.setProperty("--drag", "1");
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLElement>) => {
    const card = e.currentTarget as HTMLElement;

    card.dataset.dragging = "false";
    card.classList.remove("liquid-active");

    // volver la esquina suave a su estado normal
    card.style.setProperty("--drag", "0");
  };

  const events = {
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onPointerUp: handlePointerUp,
    onPointerLeave: handlePointerUp,
  };

  return (
    <div className="Cursos-padre">
      <section className="cursos">
        <div className="cursos-especialidades">

          <article className="card" {...events}>
            <h2>Temas selectos de matemáticas</h2>
            <p>Cruz Rojas Ernesto Javier</p>
            <p>Lunes 2hrs</p>
            <p>Martes 3hrs</p>
          </article>

          <article className="card" {...events}>
            <h2>Conciencia Histórica</h2>
            <p>Rendon Rosales Irving</p>
            <p>Lunes 2hrs</p>
            <p>Martes 1h</p>
          </article>

          <article className="card" {...events}>
            <h2>La Energía En Los Procesos De Vida</h2>
            <p>Gallegos Pascacio Carlos Ernesto</p>
            <p>Miercoles 1h</p>
            <p>Jueves 2hrs</p>
            <p>Viernes 1h</p>
          </article>

          <article className="card" {...events}>
            <h2>Aplicación del pensamiento matemático</h2>
            <p>Seevedra Cerecedo Monica</p>
            <p>Lunes 1h</p>
            <p>Miércoles 2hrs</p>
          </article>

          <article className="card" {...events}>
            <h2>Módulo 1</h2>
            <p>Rangel Cruz Maria Guadalupe</p>
            <p>Lunes 3hrs</p>
            <p>Martes 2hrs</p>
            <p>Miercoles 2hrs</p>
          </article>

          <article className="card" {...events}>
            <h2>Módulo 2</h2>
            <p>Ingram Martinez Annet</p>
            <p>Jueves 2hrs</p>
            <p>Viernes 3hrs</p>
          </article>

          <article className="card" {...events}>
            <h2>Ingles</h2>
            <p>Magallon Nuñes Gerardo</p>
            <p>Martes 1h</p>
            <p>Miercoles 1h</p>
            <p>Jueves 2hrs</p>
            <p>Viernes 1h</p>
          </article>

        </div>
      </section>
    </div>
  );
};

export default Cursos;
