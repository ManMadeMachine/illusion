import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';

import ExpensesList, {Expense} from './components/ExpensesList';
import ExpensesForm from './components/ExpensesForm';
import Header from './components/Header';

import {ExpensesService} from './services/expenseService';

// Tailwind styles
import './styles.css';


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
    <div className="flex flex-col">
      <Header linkItems={[`Expenses`, `Income`, `Statistics`]} />
      {/* Content */}
      <div className="content flex flex-col w-full md:max-w-6xl md:m-auto">
        <Switch>
          <Route path="/expenses">
            <ExpensesList expenses={expenses} removeHandler={removeExpenseHandler}/> 
            <ExpensesForm addExpenseHandler={addExpenseHandler}/>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
