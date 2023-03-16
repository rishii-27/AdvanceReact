import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  let expensesContent = <p style={{ color: "white" }}>No Expense Found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date} />)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

      {/* Filter using IF */}

      {expensesContent}

      {/* Filter using AND operator */}

      {/* {filteredExpenses.length === 0 && <p style={{ color: "white" }}>No Expense Found</p>}
      {filteredExpenses.length > 0 && (
        filteredExpenses.map(expense => <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date} />)
      )} */}

      {/* Filter using ternary operator */}

      {/* {filteredExpenses.length === 0 ? (<p style={{ color: "white" }}>No Expense Found</p>) : (
        filteredExpenses.map(expense => <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date} />)
      )} */}

      {/* {props.items.map(expense => <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date} />)} */}

    </Card>
  );
}

export default Expenses;
