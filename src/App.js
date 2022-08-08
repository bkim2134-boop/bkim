import logo from './logo.svg';
import './App.css';
import StickyNavBar from './StickyNavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StickyNavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ben's Personal Site Coming Soon...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
