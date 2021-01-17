import { Action } from 'redux'

export interface IExpense {
  nameProduct: string
  price: number
  currency: string
}

export interface IDateExpense {
  id: string
  datePick: Date
  data: IExpense[]
}

// export interface ICurrencyRate {
//
// }

export interface IExpenseState {
  expensesData: IDateExpense[]
  currenciesRate: string[]
  loading: LoadingState
}

export enum LoadingState {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
}

export enum ExpenseActionType {
  FETCH_CURRENCY = 'expense/FETCH_CURRENCY',
  SET_CURRENCY = 'expense/SET_CURRENCY',
  SET_LOADING = 'expense/SET_LOADING',
  ADD_EXPENSE = 'expense/ADD_EXPENSE',
  DELETE_EXPENSE = 'expense/DELETE_BY_EXPENSE',
}

export interface IPayloadAddAction {
  data: IExpense
  datePick: Date
}

export interface ISetCurrencyAction extends Action<ExpenseActionType> {
  type: ExpenseActionType.SET_CURRENCY
  payload: string[]
}

export interface IAddExpenseAction extends Action<ExpenseActionType> {
  type: ExpenseActionType.ADD_EXPENSE
  payload: IPayloadAddAction
}
export interface IDeleteByDateExpenseAction extends Action<ExpenseActionType> {
  type: ExpenseActionType.DELETE_EXPENSE
  payload: string
}

export interface IFetchCurrencyAction extends Action<ExpenseActionType> {
  type: ExpenseActionType.FETCH_CURRENCY
}

export interface ISetLoadingAction extends Action<ExpenseActionType> {
  type: ExpenseActionType.SET_LOADING
  payload: LoadingState
}

export type ExpenseAction =
  | ISetCurrencyAction
  | IAddExpenseAction
  | IFetchCurrencyAction
  | ISetLoadingAction
  | IDeleteByDateExpenseAction
