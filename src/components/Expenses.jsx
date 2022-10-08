import React from 'react'
import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';


const Expenses = (props) => {
    return (
        <Card className='expenses'>
            {props.expenses.map((e)=>
                <ExpenseItem title={e.title} date={e.date} amount={e.amount}/>
            )}
        </Card>
    )
}

export default Expenses