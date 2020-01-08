import React, {useState, useEffect} from 'react';
import './App.css';

import ExpensesList, {Expense} from './components/ExpensesList';
import ExpensesForm from './components/ExpensesForm';

import {ExpensesService} from './services/expenseService';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
};

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    ExpensesService.getExpenses().then(exp => {
      if(exp){
        setExpenses(exp);
      }
    });
  }, []);
  
  const addExpenseHandler = (e : Expense) => {
    ExpensesService.addExpense(e).then(res => {
      console.log('Added: ', res);
      setExpenses(expenses.concat(res));
    })
  
  };

  const removeExpenseHandler = (id : number) => {
    console.log(`Remove item with id ${id}`);
    ExpensesService.removeExpense(id).then(res => {
      console.log(`Removed expense with id ${id}, res: ${res}`);
      setExpenses(expenses.filter(e => e.id !== id));
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Illusion</h1>
      </header>
      <div className="content">
        <ExpensesList expenses={expenses} removeHandler={removeExpenseHandler}/> 
        <ExpensesForm addExpenseHandler={addExpenseHandler}/>
      </div>
    </div>
  );
}

export default App;
