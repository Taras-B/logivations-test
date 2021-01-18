import {
  EnumActionType,
  IAddExpenseAction,
  IPayloadAddAction,
  IDeleteByDateExpenseAction,
  ISetSortAction,
} from '../types'

export const actionsExpenses = {
  add: (payload: IPayloadAddAction): IAddExpenseAction => ({
    type: EnumActionType.ADD_EXPENSE,
    payload,
  }),
  deleteByDate: (payload: string): IDeleteByDateExpenseAction => ({
    type: EnumActionType.DELETE_EXPENSE,
    payload,
  }),

  setSort: (): ISetSortAction => ({
    type: EnumActionType.SORT_EXPENSE,
  }),
}
