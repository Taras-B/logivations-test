import produce, { Draft } from 'immer'
import { IExpenseState, LoadingState, ExpenseAction, ExpenseActionType, IDateExpense } from '../types'

const initialExpenseState: IExpenseState = {
    expensesData: [
        {
            id: 1,
            datePick: new Date('2021-01-16T12:47:06.154Z'),
            data: [
                {
                    currency: '3',
                    nameProduct: 'fgdhfd',
                    price: 56
                },
                {
                    currency: '3',
                    nameProduct: 'fgdhfd dfg fgdd ',
                    price: 58
                },
                {
                    currency: '9',
                    nameProduct: 'fgdhfd df',
                    price: 5607
                }
            ]
        },
        {
            id: 2,
            datePick: new Date('2021-01-13T12:47:00.000Z'),
            data: [
                {
                    currency: '9',
                    nameProduct: 'fgdhfd dfg f',
                    price: 860
                }
            ]
        }
    ],
    currenciesRate: [],
    loading: LoadingState.LOADED,
}

export const expenseReducer = produce((draft: Draft<IExpenseState>, action: ExpenseAction) => {
    switch (action.type) {
        case ExpenseActionType.FETCH_CURRENCY:
            draft.currenciesRate = []
            draft.loading = LoadingState.LOADING
            break
        case ExpenseActionType.SET_CURRENCY:
            draft.currenciesRate = action.payload
            draft.loading = LoadingState.LOADED
            break
        case ExpenseActionType.ADD_EXPENSE:
            if (draft.expensesData.some(e => e.datePick.getDate() === action.payload.datePick.getDate())) {
                draft.expensesData.map(d => {
                    return d.datePick.getDate() === action.payload.datePick.getDate() ? d.data.push(action.payload.data) : d
                })
            } else {
                //TODO: add ID generation
                const data: IDateExpense = {
                    id: 4,
                    datePick: action.payload.datePick,
                    data: [action.payload.data],
                }
                draft.expensesData.push(data)
            }

            break

        case ExpenseActionType.SET_LOADING:
            draft.loading = action.payload
            break

        default:
            break
    }
}, initialExpenseState)