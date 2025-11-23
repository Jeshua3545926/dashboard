import './media/boleta.css';
const Boleta = () => {
  return (
    <div>
      <table className="report">
        <thead>
          <tr>
            <th className="col-code">Código / ID</th>
            <th className="col-clave">Clave</th>
            <th className="col-assign">Asignatura / Módulo</th>
            <th className="col-grades">1er P.</th>
            <th className="col-grades">2do P.</th>
            <th className="col-grades">3er P.</th>
            <th className="ultimo">A.</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>P-611-2023-5-4</td>
            <td>La energía en los procesos de la vida diaria</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
          </tr>

          <tr>
            <td>30225-0002-23CF</td>
            <td>Conocimiento histórico II</td>
            <td>7</td>
            <td>8</td>
            <td>10</td>
            <td>9</td>
          </tr>

          <tr>            
            <td>30531-0007-23FE</td>
            <td>Aplicaciones del pensamiento matemático</td>
            <td>10</td>
            <td>12</td>
            <td>15</td>
            <td>12</td>
          </tr>

          <tr>
            <td>30222-0005-23CF</td>
            <td>Inglés V</td>
            <td>8</td>
            <td>9</td>
            <td>8</td>
            <td>8</td>
          </tr>

          <tr>       
            <td>3061300006-23M4S1</td>
            <td>Construye aplicaciones web</td>
            <td>9</td>
            <td>10</td>
            <td>9</td>
            <td>9</td>
          </tr>

          <tr>
            <td>3061300006-32M4S1</td>
            <td>Implementa aplicaciones web</td>
            <td>25</td>
            <td>25</td>
            <td>24</td>
            <td>24</td>
          </tr>

          <tr>
            <td>P-611-2023-5-2</td>
            <td>Temas selectos de matematicas</td>
            <td>AC</td>
            <td>AC</td>
            <td>AC</td>
            <td>AC</td>
          </tr>

          <tr>
            <td>30310-0005-23CA</td>
            <td>Formacion sociemocional V</td>
            <td>AC</td>
            <td>AC</td>
            <td>AC</td>
            <td>AC</td>
          </tr>

        </tbody>
      </table>
    </div>



  );
}

export default Boleta;