import React from 'react'
import './App.css';

import Container from '@material-ui/core/Container';

import { ExpenseForm } from './components/NewExpenseForm'

function App() {
  return (
    <Container maxWidth="md">
      <ExpenseForm></ExpenseForm>
    </Container>
  );
}

export default App;
