import axios from 'axios';
import {Expense} from '../components/ExpensesList';

const URL_ROOT = `http://localhost:3000/expenses`;

const getExpenses = () : Promise<Expense[]> => {
    return axios.get(URL_ROOT).then(res => {
        console.log(`got data ${res.data}`);
        return res.data;
    })
    .catch(e => {
        console.error(e);
    });
};

export {
    getExpenses
};