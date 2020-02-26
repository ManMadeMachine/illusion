import React, {useState} from 'react';
import {Expense} from './ExpensesList';

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
        <div className=" expensesForm flex flex-col">
            <h3 className="text-xl bg-green-400 mt-4 mb-2 text-center">New expense</h3>
            <div className="controls flex flex-col">
                <div className="bg-red-400">
                    <label className="">
                        Title:
                    </label>
                    <input className="bg-red-500" type="text" value={newExpense.title} onChange={titleChangeHandler}/>
                </div>
                <div className="bg-blue-400">
                    <label className="">
                        Cost:
                    </label>
                    <input className="bg-blue-500" type="text" value={newExpense.cost} onChange={costChangeHandler}/>
                    {/* TODO: currency indicator */}
                </div>
            </div>
            <button onClick={addExpense} className="">Add expense</button>
        </div>
    )
};

export default ExpensesForm;