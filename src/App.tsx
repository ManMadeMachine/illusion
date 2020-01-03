import React from 'react';
import './App.css';

import Expenses, {Expense} from './components/Expenses';

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

// FIXME: REMOVE Test data for list view
const expenses : Expense[] = [
  {
    id: 1,
    title: 'Jaskan jokuset'
  }, 
  {
    id: 2,
    title: 'Pekan paremmat'
  },
  {
    id: 3,
    title: 'Paavon parhaat'
  }
]

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Illusion</p>
      </header>
      <div className="content">
        <Expenses expenses={expenses} /> 
      </div>
    </div>
  );
}

export default App;
