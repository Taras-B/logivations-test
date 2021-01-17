import produce, { Draft } from 'immer'
import {
  IExpenseState,
  LoadingState,
  ExpenseAction,
  ExpenseActionType,
  IDateExpense,
  SortOrder,
} from '../types'

const initialExpenseState: IExpenseState = {
  expensesData: [
    {
      id: 'wg1q6lwq9',
      datePick: new Date('2021-01-16T12:47:06.154Z'),
      data: [
        {
          currency: '3',
          nameProduct: 'iPhone',
          price: 56,
        },
        {
          currency: '3',
          nameProduct: 'MacBook ',
          price: 58,
        },
        {
          currency: '9',
          nameProduct: 'Audi A6',
          price: 5607,
        },
      ],
    },
    {
      id: 'if3tsc',
      datePick: new Date('2021-01-13T12:47:00.000Z'),
      data: [
        {
          currency: '9',
          nameProduct: 'Tesla Model 3',
          price: 860,
        },
      ],
    },
  ],
  currenciesRate: [],
  sortOrder: SortOrder.ASC,
  loading: LoadingState.LOADED,
}

export const expenseReducer = produce(
  (draft: Draft<IExpenseState>, action: ExpenseAction) => {
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
        const { data, datePick } = action.payload
        if (draft.expensesData.some((e) => e.datePick.getDate() === datePick.getDate())) {
          draft.expensesData.map((d) => {
            return d.datePick.getDate() === datePick.getDate() ? d.data.push(data) : d
          })
        } else {
          const dataPush: IDateExpense = {
            id: Math.random().toString(36).slice(-9),
            datePick: datePick,
            data: [data],
          }
          draft.expensesData.push(dataPush)
        }

        break

      case ExpenseActionType.DELETE_EXPENSE:
        draft.expensesData.splice(
          draft.expensesData.findIndex((item) => item.id === action.payload),
          1
        )
        break
      case ExpenseActionType.SORT_EXPENSE:
        draft.sortOrder =
          draft.sortOrder === SortOrder.ASC ? SortOrder.DSC : SortOrder.ASC
        break
      case ExpenseActionType.SET_LOADING:
        draft.loading = action.payload
        break

      default:
        break
    }
  },
  initialExpenseState
)
