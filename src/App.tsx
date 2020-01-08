import React, {useState, useEffect} from 'react';
import './App.css';

import ExpensesList, {Expense} from './components/ExpensesList';
import ExpensesForm from './components/ExpensesForm';

import {getExpenses} from './services/expenseService';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
};

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    getExpenses().then(exp => {
      if(exp){
        console.log(exp);
        setExpenses(exp);
      }
    });
  }, []);
  
  const addExpenseHandler = (e : Expense) => {
    const newExpenses = expenses.concat(e);
    console.log(expenses);
    setExpenses(newExpenses);
    console.log(expenses);
  };

  return (
    <div className="App">
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
