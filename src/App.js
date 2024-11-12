import logo from "./Screenshot 2024-11-11 124828.png";
import './App.css';

function App() {
  let shubh = "https://www.linkedin.com/in/shubhnawani"
  return (
    
    <div className="App1">
               React
      
      <header className="App-header">
        SHUBH NAWANI
        <a href={shubh} target="same" rel="noopener noreferrer">click me</a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="mailto:shubhnawani@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by Shubh Nawani.
        </a>
      </header>
    </div>
  );
}

export default App;
