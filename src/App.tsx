import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

import { ExpenseForm } from './components/NewExpenseForm'
import { ListExpense } from './components/ListExpense'
import { getCurrencyRate } from './store/actions/actionsCurrencyRate'
import { currencyIsLoading } from './store/selectors/currencySelector'

const useStyles = makeStyles({
  margin: {
    margin: '30px 0',
  },
})

function App() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const isLoading = useSelector(currencyIsLoading)

  useEffect(() => {
    dispatch(getCurrencyRate())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container maxWidth='md'>
      <Grid container justify='center' spacing={4} className={classes.margin}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <ExpenseForm></ExpenseForm>
            <ListExpense />
          </>
        )}
      </Grid>
    </Container>
  )
}

export default App
