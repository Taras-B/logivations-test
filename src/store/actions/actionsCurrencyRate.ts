import { AppDispatch, AppThunk } from '..'
import { expenseAPI } from '../../api'
import { EnumActionType, ISetCurrencyAction, ICurrencyRate } from '../types'

export const actionsCurrencyRate = {
  setCurrency: (payload: ICurrencyRate): ISetCurrencyAction => ({
    type: EnumActionType.SET_CURRENCY,
    payload,
  }),
}

//thunk

export const getCurrencyRate = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    const data = await expenseAPI.get()
    console.log(data)
    if (data.success) {
      dispatch(actionsCurrencyRate.setCurrency(data.rates))
    }
  } catch (e) {
    console.log(e)

    // dispatch(setEndLoading())
  }
}
