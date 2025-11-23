import './media/boleta.css';
import { useState } from 'react';

const Boleta = () => {
  const [showTable, setShowTable] = useState(false);
  return (
    <div className='principal'>
      <aside className="sidebar">
        <div className="alumno">
          <div className="alumno-header">
            <h2 className="alumno-name" onClick={() => setShowTable(v => !v)}>Oswaldo Ramon Garcia Linda</h2>
            <span className="chip">3°A</span>
          </div>
        </div>
        <div className="alumno">
          <div className="alumno-header">
            <h2 className="alumno-name" onClick={() => setShowTable(v => !v)}>Jeshua Abiram Garza Romero</h2>
            <span className="chip">3°B</span>
          </div>
        </div>
      </aside>
      <section className="boleta-panel">
        <div className={`Tabla${showTable ? ' visible' : ''}`}>
          <div className="panel-header">
            <h2>Boleta de calificaciones</h2>
            <div className="actions">
              <button className="btn secondary">Exportar</button>
            </div>
          </div>
          <div className="table-container">
            <table className="report">
        <thead>
          <tr>
            <th className="col-clave">Materias</th>
            <th className="col-assign">Asignatura / Módulo</th>
            <th className="col-grades">1er P.</th>
            <th className="col-grades">2do P.</th>
            <th className="tercer">3er P.</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>P-611-2023-5-4</td>
            <td>La energía en los procesos de la vida diaria</td>
            <td>10</td>
            <td>9</td>
            <td></td>
          </tr>

          <tr>
            <td>30225-0002-23CF</td>
            <td>Conciencia Historica II</td>
            <td>10</td>
            <td>5</td>
            <td></td>
          </tr>

          <tr>            
            <td>30531-0007-23FE</td>
            <td>Aplicaciones del pensamiento matemático</td>
            <td>7</td>
            <td>5</td>
            <td></td>
          </tr>

          <tr>
            <td>30222-0005-23CF</td>
            <td>Inglés V</td>
            <td>8</td>
            <td>7</td>
            <td></td>
          </tr>

          <tr>       
            <td>3061300006-23M4S1</td>
            <td>Construye aplicaciones web</td>
            <td>8</td>
            <td>7</td>
            <td></td>
          </tr>

          <tr>
            <td>3061300006-32M4S1</td>
            <td>Implementa aplicaciones web</td>
            <td>9</td>
            <td>9</td>
            <td></td>
          </tr>

          <tr>
            <td>P-611-2023-5-2</td>
            <td>Temas selectos de matematicas</td>
            <td>9</td>
            <td>8</td>
            <td></td>
          </tr>

          <tr>
            <td>30310-0005-23CA</td>
            <td>Formacion sociemocional V</td>
            <td>AC</td>
            <td>AC</td>
            <td></td>
          </tr>

        </tbody>
      </table>
          </div>
        </div>
      </section>
    </div>





  );
}

export default Boleta;