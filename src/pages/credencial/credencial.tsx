import React from 'react';
import './media/credencial.css';
import foto1 from './IMG_20251205_142137.jpg';
import foto2 from './media/IMG_20251205_142112.jpg';

const Credencial = () => {
  const handlePointerDown = (e: React.PointerEvent<HTMLElement>) => {
    const card = e.currentTarget as HTMLElement;
    card.dataset.dragging = 'true';
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--lx', `${x - 20}px`);
    card.style.setProperty('--ly', `${y - 20}px`);
    card.style.setProperty('--drag', '1');
    card.classList.add('liquid-active');
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const card = e.currentTarget as HTMLElement;
    if (card.dataset.dragging !== 'true') return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--lx', `${x - 20}px`);
    card.style.setProperty('--ly', `${y - 20}px`);
    card.style.setProperty('--drag', '1');
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLElement>) => {
    const card = e.currentTarget as HTMLElement;
    card.dataset.dragging = 'false';
    card.classList.remove('liquid-active');
    card.style.setProperty('--drag', '0');
  };

  const events = {
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onPointerUp: handlePointerUp,
    onPointerLeave: handlePointerUp,
  };

  return (
    <div className='credencial'>
      <section className='credencial__container'>
        <div className="credenciales" {...events}>
          <img className="credential-img" src={foto1} alt="Credencial 1" />
        </div>
        <div className="credenciales" {...events}>
          <img className="credential-img" src={foto2} alt="Credencial 2" />
        </div>
      </section>
    </div>
  );
};

export default Credencial;
