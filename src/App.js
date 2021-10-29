import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const  App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  // const [filterExpenses, setFilterExpenses] = useState(DUMMY_EXPENSES)
 

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense,...prevExpenses]
    })
    setTimeout(() => {
      console.log('expenses', expenses);
    }, 2000);

  }

  // const handlerChangeFilter = (selectedYear) => {
  
  //   const newArr = expenses.filter(item => {
     
  //     return item.date.getFullYear().toString() === selectedYear
  //   })
  
  // }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} /> 
      <Expenses items={expenses} />
   
    </div>
  );
}

export default App;
