import { Action } from 'redux'

export interface IExpense {
    nameProduct: string
    price: number
    currency: string
}

export interface IDateExpense {
    id: number
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
    ADD_EXPENSE = 'expense/ADD_EXPENSE',
    SET_LOADING = 'expense/SET_LOADING',
}

export interface IPayloadAddAction {
    data: IExpense,
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

export interface IFetchCurrencyAction extends Action<ExpenseActionType> {
    type: ExpenseActionType.FETCH_CURRENCY
}

export interface ISetLoadingAction extends Action<ExpenseActionType> {
    type: ExpenseActionType.SET_LOADING
    payload: LoadingState
}

export type ExpenseAction = ISetCurrencyAction | IAddExpenseAction | IFetchCurrencyAction | ISetLoadingAction