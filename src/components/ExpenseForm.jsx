import React, { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // console.log(event.target.value);
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
        // console.log(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
        // console.log(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (

        <form action="" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input
                        type="text"
                        placeholder='Enter an expense...'
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        placeholder='Enter the expense'
                        value={enteredAmount}
                        step="0.01"
                        min="0.01"
                        onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date" 
                        value={enteredDate}
                        min="2019-01-01" 
                        max="2023-12-31" 
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>

    )
}

export default ExpenseForm