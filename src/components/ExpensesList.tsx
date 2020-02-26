import React from 'react';

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
        <div className="expensesList flex flex-col">
            <h1 className="text-xl text-center py-1">Expenses</h1>
            <ul className="flex flex-col">
                <li className="flex p-2 bg-orange-400">
                    <div className="flex-1"><b>Title</b></div>
                    <div className="flex-1"><b>Cost</b></div>
                </li>

                { expenses.length > 0 
                    ? expenses.map(e => {
                        return (
                            <li key={e.id} className="flex p-2 bg-orange-300 even:bg-orange-200">  
                                <div className="flex-1"><p>{e.title}</p></div>
                                <div className="flex-1"><p>{e.cost}</p></div>
                                <button className="relative flex-grow-0" onClick={() => removeHandler(e.id)}>&#128465;</button>
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