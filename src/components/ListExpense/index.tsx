import React from 'react'

import dateFnsFormat from 'date-fns/format'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'

import {ExpenseItem} from './ExpenseItem'


export const ListExpense = () => {

    const expense = useSelector((state: RootState) => state.expense.expensesData)

    return (
        <Grid item xs={12}>
            {expense.map(item => {
                return (
                    <Paper elevation={7} style={{padding: 10}} key={item.id}>
                        <Typography>Date: {dateFnsFormat(item.datePick, 'MM/dd/yyyy')}</Typography>
                        {item.data.map((d, i) => (
                            <ExpenseItem key={i} price={d.price} currency={d.currency} nameProduct={d.nameProduct} />
                        ))}
                    </Paper>
                )
            })}

        </Grid>
    )
}

