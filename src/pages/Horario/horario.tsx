import React, { useEffect, useState } from 'react';
import horarioImg from './media/horario.jpg';
import './media/horario.css';

const Horario = () => {
    const [entered, setEntered] = useState(false);

    useEffect(() => {
        // activar la clase de entrada en el siguiente frame para disparar la transición
        const raf = requestAnimationFrame(() => setEntered(true));
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <div className={`horario-container ${entered ? 'enter' : ''}`}>
            <h2>Horario de Clases</h2>
            <img className="horario-img" src={horarioImg} alt="Horario" />
        </div>
    );
}

export default Horario;