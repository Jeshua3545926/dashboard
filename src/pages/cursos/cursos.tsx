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
            <p>Ernesto</p>
          </article>

          <article className="card" {...events}>
            <h2>Conciencia Histórica</h2>
            <p>Irving</p>
          </article>

          <article className="card" {...events}>
            <h2>Energía</h2>
            <p>Gallegos</p>
          </article>

          <article className="card" {...events}>
            <h2>Aplicación del pensamiento matemático</h2>
            <p>Monica</p>
          </article>

          <article className="card" {...events}>
            <h2>Módulo 1</h2>
            <p>Lupita</p>
          </article>

          <article className="card" {...events}>
            <h2>Módulo 2</h2>
            <p>Annet</p>
          </article>

        </div>
      </section>
    </div>
  );
};

export default Cursos;
