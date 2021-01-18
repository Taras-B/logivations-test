import { Action } from 'redux'

export interface IExpense {
  nameProduct: string
  price: number
  currency: keyof ICurrencyRate
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
  sortOrder: SortOrder
}

export interface ICurrencyState {
  currenciesRate?: ICurrencyRate
  exchangeTo: keyof ICurrencyRate | null
  loading: LoadingState
}

export interface ICurrencyRate {
  EUR: number
  GBP: number
  JPY: number
  USD: number
  PLN: number
  UAH: number
}

export enum SortOrder {
  ASC = 'ASC',
  DSC = 'DSC',
}

export enum LoadingState {
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
}

export enum EnumActionType {
  FETCH_CURRENCY = 'currency/FETCH_CURRENCY',
  SET_CURRENCY = 'currency/SET_CURRENCY',
  SET_EXCHANGE_TO_CURRENCY = 'currency/SET_EXCHANGE_TO_CURRENCY',
  SET_LOADING = 'currency/SET_LOADING',
  ADD_EXPENSE = 'expense/ADD_EXPENSE',
  DELETE_EXPENSE = 'expense/DELETE_BY_EXPENSE',
  SORT_EXPENSE = 'expense/SORT_EXPENSE',
}

export interface IPayloadAddAction {
  data: IExpense
  datePick: Date
}

export interface ISetExchangeToCurrencyAction extends Action<EnumActionType> {
  type: EnumActionType.SET_EXCHANGE_TO_CURRENCY
  payload: keyof ICurrencyRate
}
export interface ISetCurrencyAction extends Action<EnumActionType> {
  type: EnumActionType.SET_CURRENCY
  payload: ICurrencyRate
}
export interface IFetchCurrencyAction extends Action<EnumActionType> {
  type: EnumActionType.FETCH_CURRENCY
}

export interface IAddExpenseAction extends Action<EnumActionType> {
  type: EnumActionType.ADD_EXPENSE
  payload: IPayloadAddAction
}
export interface IDeleteByDateExpenseAction extends Action<EnumActionType> {
  type: EnumActionType.DELETE_EXPENSE
  payload: string
}

export interface ISetSortAction extends Action<EnumActionType> {
  type: EnumActionType.SORT_EXPENSE
}
export interface ISetLoadingAction extends Action<EnumActionType> {
  type: EnumActionType.SET_LOADING
  payload: LoadingState
}

export type ExpenseAction =
  | IAddExpenseAction
  | IDeleteByDateExpenseAction
  | ISetSortAction

export type CurrencyAction =
  | ISetCurrencyAction
  | ISetExchangeToCurrencyAction
  | IFetchCurrencyAction
  | ISetLoadingAction
