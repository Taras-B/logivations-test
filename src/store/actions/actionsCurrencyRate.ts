import { AppDispatch, AppThunk } from '..'
import { expenseAPI } from '../../api'
import {
  EnumActionType,
  ISetCurrencyAction,
  ICurrencyRate,
  ISetExchangeToCurrencyAction,
} from '../types'

export const actionsCurrencyRate = {
  setCurrency: (payload: ICurrencyRate): ISetCurrencyAction => ({
    type: EnumActionType.SET_CURRENCY,
    payload,
  }),
  setExchangeToCurrency: (
    payload: keyof ICurrencyRate
  ): ISetExchangeToCurrencyAction => ({
    type: EnumActionType.SET_EXCHANGE_TO_CURRENCY,
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
