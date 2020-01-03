import React, { useState } from 'react';

export interface Expense {
    id: number,
    title: string;
};

const Expenses = ([{id, title}] : Expense[]) => {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    return (
        <div className="expenses">
            <h1>Expenses</h1>
            <ul className="expense-list">
                {expenses.map(e => <li key={e.id}>{e.title}</li>)}
            </ul>
        </div>
    )
};

export default Expenses;