import logo from './My.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SUNIL 
        </p>
        <p> WHy you are asking me</p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=z_dbnYHAQYg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Me
        </a>
      </header>
    </div>
  );
}

export default App;
