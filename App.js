//Crear un TodoList donde podamos
//1. Crear tareas.
//2. Modificar tareas.
//3. Borrar tareas.


import logo from './logo.svg';
import './App.css';
import {Tasks} from './Tasks'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Tasks/>
      </header>
    </div>
  );
}

export default App;
