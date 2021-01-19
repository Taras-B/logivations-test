import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import dateFnsFormat from 'date-fns/format'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { MenuItem } from '@material-ui/core'

import { actionsExpenses } from '../../store/actions/actionsExpenses'
import { actionsCurrencyRate } from '../../store/actions/actionsCurrencyRate'
import { ICurrencyRate } from '../../store/types'
import {
  currencyRateKeys,
  totalCurrencySelector,
} from '../../store/selectors/currencySelector'

import { ExpenseItem } from './ExpenseItem'
import { sortExpensesData } from '../../store/selectors/expenseSelectors'
import { HookFormSelect } from '../HookFormSelect'

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
  marginList: {
    marginTop: 50,
  },
})

interface IFormValues {
  currency: keyof ICurrencyRate
}

export const ListExpense = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const expense = useSelector(sortExpensesData)

  const keysCurrency = useSelector(currencyRateKeys)
  const totalCurrency = useSelector(totalCurrencySelector)
  const { control, handleSubmit } = useForm<IFormValues>()

  const onSubmitSelect = (data: IFormValues) => {
    dispatch(actionsCurrencyRate.setExchangeToCurrency(data.currency))
  }

  const onClearExpense = (id: string) => {
    dispatch(actionsExpenses.deleteByDate(id))
  }

  if (expense.length === 0)
    return (
      <Typography className={classes.marginList}>
        Not yet expenses. Please add you expense
      </Typography>
    )

  return (
    <Grid container direction='column' item xs={12} className={classes.marginList}>
      <Grid container spacing={4} justify='flex-start' alignItems='center' item xs>
        <Grid item xs={12} md={2}>
          <Button onClick={() => dispatch(actionsExpenses.setSort())} variant='contained'>
            Sort Date
          </Button>
        </Grid>
        <Grid container spacing={4} alignItems='center' item xs={12} md={8}>
          <form onSubmit={handleSubmit(onSubmitSelect)}>
            <HookFormSelect
              id='currency-select'
              name='currency'
              label='Convert To'
              control={control}>
              {keysCurrency &&
                keysCurrency.map((key, i) => (
                  <MenuItem key={i} value={key}>
                    {key}
                  </MenuItem>
                ))}
            </HookFormSelect>
            <Button type='submit'>Submit</Button>
          </form>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6'>Total: {totalCurrency}</Typography>
          </Grid>
        </Grid>
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
