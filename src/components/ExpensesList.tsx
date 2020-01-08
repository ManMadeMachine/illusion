import React from 'react';
import './ExpensesList.css';

export interface Expense {
    id: number;
    title: string;
    cost: number;
};

export interface ExpenseListProps {
    expenses: Expense[]
};

const ExpensesList = (props : ExpenseListProps) => {
    return (
        <div className="expenses">
            <h1>Expenses</h1>
            <ul className="expense-list">
                <li className="expense-list-header">
                    <div className="row-part"><b>Title</b></div>
                    <div className="row-part"><b>Cost</b></div>
                </li>

                { props.expenses.length > 0 
                    ? props.expenses.map(e => {
                        return (
                            <li key={e.id} className="expense-list-row">  
                                <div className="row-part">{e.title}</div>
                                <div className="row-part">{e.cost}</div>
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