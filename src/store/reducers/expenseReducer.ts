import produce, { Draft } from 'immer'
import {
  IExpenseState,
  ExpenseAction,
  EnumActionType,
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
          currency: 'USD',
          nameProduct: 'iPhone',
          price: 56,
        },
        {
          currency: 'USD',
          nameProduct: 'MacBook ',
          price: 58,
        },
        {
          currency: 'UAH',
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
          currency: 'PLN',
          nameProduct: 'Tesla Model 3',
          price: 860,
        },
      ],
    },
  ],
  sortOrder: SortOrder.ASC,
}

export const expenseReducer = produce(
  (draft: Draft<IExpenseState>, action: ExpenseAction) => {
    switch (action.type) {
      case EnumActionType.ADD_EXPENSE:
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

      case EnumActionType.DELETE_EXPENSE:
        const index = draft.expensesData.findIndex((item) => item.id === action.payload)
        if (index !== -1) draft.expensesData.splice(index, 1)
        // draft.expensesData.splice(
        //   draft.expensesData.findIndex((item) => item.id === action.payload),
        //   1
        // )
        break
      case EnumActionType.SORT_EXPENSE:
        draft.sortOrder =
          draft.sortOrder === SortOrder.ASC ? SortOrder.DSC : SortOrder.ASC
        break

      default:
        break
    }
  },
  initialExpenseState
)
