import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { IExpense } from '../../store/types'



export const ExpenseItem: React.FC<IExpense> = ({nameProduct, currency, price}) => {
    return (
        <Paper elevation={7} style={{padding: '10px 5px', margin: '10px 0'}}>
            <Grid container spacing={1} alignItems='center'>
                <Grid item xs={12} md={11}>
                    <Typography variant='h6'>{nameProduct}</Typography>
                    <Typography variant='subtitle2' color='primary'>Price: {price}</Typography>
                    <Typography>Currency: {currency}</Typography>

                </Grid>
            </Grid>
        </Paper>
    )
}
