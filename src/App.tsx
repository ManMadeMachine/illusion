import React from 'react';
import logo from './logo.svg';
import './App.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
};

const Hello = ({name, enthusiasmLevel = 1} : Props) => {
    return (
      <div className="hello">
        <p>Hello {name}</p>
      </div>
    );
}

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello name="Jaska" />
      </header>
    </div>
  );
}

export default App;
