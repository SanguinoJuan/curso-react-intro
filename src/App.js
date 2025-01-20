import logo from "./platzi.webp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar. Mi
          novia esta loquita
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function TodoItem() {
  return (
    <li>
      <span>v</span>
      <p>Estudiar React</p>
      <span>x</span>
    </li>
  );
}
export default App;
