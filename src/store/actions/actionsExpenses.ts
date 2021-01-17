import {
  ExpenseActionType,
  ISetCurrencyAction,
  IAddExpenseAction,
  IPayloadAddAction,
  IDeleteByDateExpenseAction,
} from '../types'

export const actionsExpenses = {
  add: (payload: IPayloadAddAction): IAddExpenseAction => ({
    type: ExpenseActionType.ADD_EXPENSE,
    payload,
  }),
  deleteByDate: (payload: string): IDeleteByDateExpenseAction => ({
    type: ExpenseActionType.DELETE_EXPENSE,
    payload,
  }),
  setCurrency: (payload: string[]): ISetCurrencyAction => ({
    type: ExpenseActionType.SET_CURRENCY,
    payload,
  }),
}
