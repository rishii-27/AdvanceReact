import React from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {
    const titleChange = (e) => {
        console.log(e.target.value);
    }
    const amountChange = (e) => {
        console.log(e.target.value);
    }
    const dateChange = (e) => {
        console.log(e.target.value);
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" onChange={titleChange} />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onBlur={amountChange} />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onBlur={dateChange} />
                </div>
            </div>
            <div className="new-expense__action">
                <button type="submit">Add Expense</button>
            </div>

        </form>
    )
}

export default ExpenseForm;