import "./Expenses.css";

import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("111", selectedYear);
  };
  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

 

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items = {filteredExpenses} />
      {/* {expensesContent} */}
      {/* {filteredExpenses.length === 0 && <p> No expenses found </p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })
      } */}
    </Card>
  );
}

export default Expenses;
