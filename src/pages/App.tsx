import './App.css';
import { helloWorld } from '../Actions/registerAction'
import { registerAction } from '../Actions/action2';

const onHandleClick = () => {
  registerAction(helloWorld)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <button onClick={() => { onHandleClick() }} >Click me</button>
      </header>
    </div>
  );
}

export default App;
