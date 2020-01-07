import React, {useState} from 'react';
import {Expense} from './ExpensesList';

export interface NewExpense {
    title: string
};

export interface Props {
    addExpenseHandler : (e : Expense) => void
};

const ExpensesForm = ({addExpenseHandler} : Props) => {
    const [newExpense, setNewExpense] = useState<NewExpense>({
        title: ''
    });

    const addExpense = (e : React.MouseEvent<HTMLElement>) => {
        const expense : Expense = {
            id: Math.random() * 10,
            title: newExpense.title
        };

        console.log("expense", expense);
        addExpenseHandler(expense);
        setNewExpense({title: ''});
    }

    return (
        <div className="expenses-form">
            <h3>New expense</h3>
            <label className="expenses-label">
                Title:
            </label>
            <input type="text" value={newExpense.title} onChange={(e) => setNewExpense({title: e.target.value})}/>

            <button onClick={addExpense}>Add expense</button>
        </div>
    )
};

export default ExpensesForm;