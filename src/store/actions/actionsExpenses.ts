import { ExpenseActionType,ISetCurrencyAction, IAddExpenseAction, IExpense, IPayloadAddAction } from '../types'


export const actionsExpenses = {
    add: (payload: IPayloadAddAction): IAddExpenseAction => ({
        type: ExpenseActionType.ADD_EXPENSE,
        payload,
    }),
    setCurrency: (payload: string[]): ISetCurrencyAction => ({
        type: ExpenseActionType.SET_CURRENCY,
        payload,
    }),
}