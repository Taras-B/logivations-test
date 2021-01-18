import { combineReducers } from 'redux'
import { currencyReducer } from './reducers/currencyReducer'
import { expenseReducer } from './reducers/expenseReducer'
import { ICurrencyState, IExpenseState } from './types'

export const rootReducer = combineReducers({
  expense: expenseReducer,
  currency: currencyReducer,
})

export type RootState = {
  expense: IExpenseState
  currency: ICurrencyState
}
