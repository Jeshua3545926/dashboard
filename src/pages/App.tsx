import './App.css';
import { useNavigate } from 'react-router-dom';
// import { helloWorld } from '../Actions/registerAction'
// import { registerAction } from '../Actions/action2';


const App = () => {

const navigate = useNavigate();
  const handlebolet = () => {
    navigate('/Boleta');
  }
  const handleCursos = () => {
    navigate('/cursos')
  }
  const handleHorario = () => {
    navigate('/horario')
  }
  return (
    <div className="App">
      <h1>Panel de Control</h1><section className='linea'></section>
      <div className="header">
        <section className='nav'>
          <ul>
            <li><button onClick={handlebolet}>Boletas</button></li>
            <li><button>Alumnos</button></li>
            <li><button>Credencial</button></li>
            <li><button>Avisos</button></li>
            <li><button onClick={handleHorario}>Horarios</button></li>
            <li><button onClick={handleCursos}>Cursos</button></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
