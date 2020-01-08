import React from 'react';
import './ExpensesList.css';

export interface Expense {
    id: number;
    title: string;
    cost: number;
};

export interface ExpenseListProps {
    expenses: Expense[];
    removeHandler: (id : number) => void 
};

const ExpensesList = ({expenses, removeHandler} : ExpenseListProps) => {
    return (
        <div className="expenses">
            <h1>Expenses</h1>
            <ul className="expense-list">
                <li className="expense-list-header">
                    <div className="row-part"><b>Title</b></div>
                    <div className="row-part"><b>Cost</b></div>
                </li>

                { expenses.length > 0 
                    ? expenses.map(e => {
                        return (
                            <li key={e.id} className="expense-list-row">  
                                <div className="row-part"><p>{e.title}</p></div>
                                <div className="row-part"><p>{e.cost}</p></div>
                                <button className="delete-button" onClick={() => removeHandler(e.id)}>&#128465;</button>
                            </li>
                        )
                    }) 
                    : <li className="expense-list-row"><p className="row-part"><i>No expenses to show</i></p></li>
                }
            </ul>
        </div>
    )
};

export default ExpensesList;