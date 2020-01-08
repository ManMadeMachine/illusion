import React, {useState} from 'react';
import {Expense} from './ExpensesList';
import './ExpensesForm.css';

export interface NewExpense {
    title: string;
    cost: number;
};

export interface Props {
    addExpenseHandler : (e : Expense) => void
};

const ExpensesForm = ({addExpenseHandler} : Props) => {
    const [newExpense, setNewExpense] = useState<NewExpense>({
        title: '',
        cost: 0
    });

    const titleChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        setNewExpense({...newExpense, title: e.target.value});    
    }
    
    const costChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        setNewExpense({...newExpense, cost: Number(e.target.value)})
    }
    
    const addExpense = (e : React.MouseEvent<HTMLElement>) => {
        const expense : Expense = { ...newExpense,
            id: Math.random() * 10
        };

        addExpenseHandler(expense);
        setNewExpense({
            title: '',
            cost: 0
        });
    }
    return (
        <div className="expenses-form">
            <h3>New expense</h3>
            <div className="input-data-row">
                <label className="expenses-label">
                    Title:
                </label>
                <input type="text" value={newExpense.title} onChange={titleChangeHandler}/>
            </div>
            <div className="input-data-row">
                <label className="expenses-label">
                    Cost:
                </label>
                <input type="text" value={newExpense.cost} onChange={costChangeHandler}/>
                {/* TODO: currency indicator */}
            </div>

            <button onClick={addExpense} className="submit-button">Add expense</button>
        </div>
    )
};

export default ExpensesForm;