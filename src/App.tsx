import React, {useState} from 'react';
import './App.css';

import ExpensesList, {Expense} from './components/ExpensesList';
import ExpensesForm from './components/ExpensesForm';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
};

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
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
  ]);
  
  const addExpenseHandler = (e : Expense) => {
    const newExpenses = expenses.concat(e);
    console.log(expenses);
    setExpenses(newExpenses);
    console.log(expenses);
  };

  return (
    <div className="App">
      {/* {console.log(expenses)} */}
      <header className="App-header">
        <h1>Illusion</h1>
      </header>
      <div className="content">
        <ExpensesList expenses={expenses} /> 
        <ExpensesForm addExpenseHandler={addExpenseHandler}/>
      </div>
    </div>
  );
}

export default App;
