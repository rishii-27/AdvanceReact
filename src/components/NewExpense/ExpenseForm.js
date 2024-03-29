import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChange = (e) => {
        setEnteredTitle(e.target.value);

        // setUserInput({ ...userInput, enteredTitle: e.target.value })

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: e.target.value };
        // })
    }
    const amountChange = (e) => {
        setEnteredAmount(e.target.value);
        // setUserInput({ ...userInput, enteredAmount: e.target.value })

    }
    const dateChange = (e) => {
        setEnteredDate(e.target.value);
        // setUserInput({ ...userInput, enteredDate: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChange} />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChange} />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChange} />
                </div>
            </div>
            <div className="new-expense__action">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>

        </form>
    )
}

export default ExpenseForm;