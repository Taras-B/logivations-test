import { combineReducers } from 'redux'
import { expenseReducer } from './reducers/expenseReducer'
import { IExpenseState } from './types'

export const rootReducer = combineReducers({
    expense: expenseReducer,

})

export type RootState = {
    expense: IExpenseState

}