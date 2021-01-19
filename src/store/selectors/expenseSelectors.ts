import { createSelector } from 'reselect'
import { RootState } from '../rootReducer'
import { IExpenseState, SortOrder } from '../types'

const expenseState = (state: RootState): IExpenseState => state.expense

export const expenseData = (state: RootState): IExpenseState['expensesData'] =>
  expenseState(state).expensesData

const expenseSortBy = (state: RootState): IExpenseState['sortOrder'] =>
  expenseState(state).sortOrder

export const sortExpensesData = createSelector(
  expenseData,
  expenseSortBy,
  (expenses, sortBy) => {
    if (sortBy === SortOrder.ASC) {
      return [...expenses].sort((a, b) => a.datePick.getDate() - b.datePick.getDate())
    } else {
      return [...expenses].sort((a, b) => b.datePick.getDate() - a.datePick.getDate())
    }
  }
)
