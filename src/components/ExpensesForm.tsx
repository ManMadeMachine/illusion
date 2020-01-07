import React, {useState} from 'react';

export interface NewExpense {
    id: number;
    title: string;
};

const ExpensesForm = () => {
    const [newExpense, setNewExpense] = useState<NewExpense | undefined>({
        id: undefined,
        title: ''
    });
    
    return (
        <div className="expenses-form">
            <h3>New expense</h3>
            <label className="expenses-label">
                Title:
            </label>
            <input type="text"></input>
        </div>
    )
};

export default ExpensesForm;