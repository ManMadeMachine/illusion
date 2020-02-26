import axios from 'axios';
import {Expense} from '../components/ExpensesList';

const URL_ROOT = `http://localhost:3004/expenses`;

interface IExpensesService {
    getExpenses: () => Promise<Expense[]>;
    addExpense: (e : Expense) => Promise<Expense>;
    removeExpense: (id: number) => Promise<any>;
}

export const ExpensesService : IExpensesService = {
    getExpenses: () => {
        return axios.get(URL_ROOT).then(res => {
            return res.data;
        })
        .catch(e => {
            console.error(e);
        });
    },

    addExpense: (e) => {
        return axios.post(URL_ROOT, e).then(res => {
            return res.data;
        })
        .catch(e => console.error(e));
    },

    removeExpense: (id) => {
        return axios.delete(`${URL_ROOT}/${id}`).then(res => {
            console.log(res);
        })
        .catch(e => console.error(e));
    }
};