import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import { ExpenseForm } from './components/NewExpenseForm'
import { ListExpense } from './components/ListExpense'
import { getCurrencyRate } from './store/actions/actionsCurrencyRate'

const useStyles = makeStyles({
  margin: {
    margin: '30px 0',
  },
})

function App() {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrencyRate())
  }, [])
  return (
    <Container maxWidth='md'>
      <Grid container justify='center' spacing={4} className={classes.margin}>
        <ExpenseForm></ExpenseForm>
        <ListExpense />
      </Grid>
    </Container>
  )
}

export default App
