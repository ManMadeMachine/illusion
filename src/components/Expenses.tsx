import React, { useState } from 'react';
import './Expenses.css';

export interface Expense {
    id: number;
    title: string;
}
export interface ExpenseProps {
    expenses: Expense[]
};

const Expenses = (props : ExpenseProps) => {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    return (
        <div className="expenses">
            <h1>Expenses</h1>
            <ul className="expense-list">
                {props.expenses.map(e => <li key={e.id} className="expense-list-row">{e.title}</li>)}
            </ul>
        </div>
    )
};

export default Expenses;