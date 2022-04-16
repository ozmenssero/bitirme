import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Canvas from './components/Canvas';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edisat <code>src/App.js</code> and save to reload.
        </p>
      </header> */}
      <HomePage/>
      {/* <Canvas /> */}
    </div>
  );
}

export default App;
