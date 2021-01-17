import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import dateFnsFormat from 'date-fns/format'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import { actionsExpenses } from '../../store/actions/actionsExpenses'

import { ExpenseItem } from './ExpenseItem'
import { sortExpensesData } from '../../store/selectors/expenseSelectors'

const useStyles = makeStyles({
  rootPaper: {
    padding: 10,
    margin: '20px 5px',
    backgroundImage:
      'linear-gradient(to right bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
  },
  textColor: {
    color: '#fff',
  },
})

export const ListExpense = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const expense = useSelector(sortExpensesData)

  const onClearExpense = (id: string) => {
    dispatch(actionsExpenses.deleteByDate(id))
  }
  console.log('LIST')

  return (
    <Grid item xs={12}>
      <Grid container>
        <Button onClick={() => dispatch(actionsExpenses.setSort())} variant='contained'>
          Sort Date
        </Button>
      </Grid>

      {expense.map((item) => {
        return (
          <Paper elevation={7} className={classes.rootPaper} key={item.id}>
            <Grid container justify='space-between'>
              <Typography className={classes.textColor}>
                Date: {dateFnsFormat(item.datePick, 'MM/dd/yyyy')}
              </Typography>
              <Button
                onClick={() => onClearExpense(item.id)}
                variant='contained'
                color='secondary'>
                Delete Date
              </Button>
            </Grid>
            {item.data.map((d, i) => (
              <ExpenseItem
                key={i}
                price={d.price}
                currency={d.currency}
                nameProduct={d.nameProduct}
              />
            ))}
          </Paper>
        )
      })}
    </Grid>
  )
}
