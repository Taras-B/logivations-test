import { AppDispatch, AppThunk } from '..'
import { expenseAPI } from '../../api'
import {
  EnumActionType,
  ISetCurrencyAction,
  ICurrencyRate,
  ISetExchangeToCurrencyAction,
  LoadingState,
  ISetLoadingAction,
} from '../types'

export const actionsCurrencyRate = {
  setCurrency: (payload: ICurrencyRate): ISetCurrencyAction => ({
    type: EnumActionType.SET_CURRENCY,
    payload,
  }),
  setLoading: (payload: LoadingState): ISetLoadingAction => ({
    type: EnumActionType.SET_LOADING,
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
    dispatch(actionsCurrencyRate.setLoading(LoadingState.LOADING))
    const data = await expenseAPI.get()
    if (data.success) {
      dispatch(actionsCurrencyRate.setCurrency(data.rates))
    }
  } catch (e) {
    console.log(e)
    dispatch(actionsCurrencyRate.setLoading(LoadingState.ERROR))
  }
}
