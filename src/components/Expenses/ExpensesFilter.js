import './ExpensesFilter.css'

import React, {useState} from "react";

const ExpensesFilter = (props) => {
  
  const [filterYear, setFilterYear] = useState('2020')

  const dropdownChangeHandler = (event) => {

    setFilterYear(event.target.value)
    props.onChangeFilter(event.target.value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor=""> Filter by year</label>
        <select value={filterYear} onChange={dropdownChangeHandler}>
          <option value="2022"> 2022</option>
          <option value="2021"> 2021</option>
          <option value="2020"> 2020</option>
          <option value="2019"> 2019</option>
        </select>

      </div>
    </div>
  )
}
export default ExpensesFilter