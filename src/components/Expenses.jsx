import React, { useState } from 'react'
import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';



const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    return (
        <div>
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <Card className='expenses'>

                {props.expenses.map((e) =>
                    <ExpenseItem
                        title={e.title}
                        date={e.date}
                        amount={e.amount} />
                )}
            </Card>
        </div>
    )
}

export default Expenses