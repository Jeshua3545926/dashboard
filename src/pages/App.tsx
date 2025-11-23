import './App.css';
import { useNavigate } from 'react-router-dom';
// import { helloWorld } from '../Actions/registerAction'
// import { registerAction } from '../Actions/action2';


const App = () => {

const navigate = useNavigate();
  const handlebolet = () => {
    navigate('/boleta');
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
            <li><button>Reportes</button></li>
            <li><button>Avisos</button></li>
            <li><button>Horarios</button></li>
            <li><button>Cursos</button></li>
            <li><button>Horarios de examenes </button></li>
            <li><button>Actividades</button></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
