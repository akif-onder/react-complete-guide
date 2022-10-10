import React, { useState } from 'react'
import Card from './Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';



const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    
    return (
        <div>
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <Card className='expenses'>
               <ExpensesList items={filteredExpenses} />               
            </Card>
        </div>
    )
}

export default Expenses