import './NewExpense.css'

import React, { useState } from "react";

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setIsEditing(false);

  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      { isEditing && <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} onCancel={stopEditingHandler} />} 
      {!isEditing && (
        <div>
          <button onClick={startEditingHandler}>Add new Expense</button>
        </div>
      )}
      
  </div>
  )
};


export default NewExpense