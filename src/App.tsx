import React from 'react'
import './App.css'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import { ExpenseForm } from './components/NewExpenseForm'
import { ListExpense } from './components/ListExpense'

const useStyles = makeStyles({

    margin: {
        margin: '30px 0',
    },
})

function App() {
    const classes = useStyles()
    return (
        <Container maxWidth="md">
            <Grid container justify='center' spacing={4} className={classes.margin}>

                <ExpenseForm></ExpenseForm>
                <ListExpense/>
            </Grid>
        </Container>
    )
}

export default App
