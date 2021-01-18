import produce, { Draft } from 'immer'
import { ICurrencyState, LoadingState, EnumActionType, CurrencyAction } from '../types'

const initialExpenseState: ICurrencyState = {
  currenciesRate: undefined,
  exchangeTo: null,
  loading: LoadingState.LOADED,
}

export const currencyReducer = produce(
  (draft: Draft<ICurrencyState>, action: CurrencyAction) => {
    switch (action.type) {
      case EnumActionType.FETCH_CURRENCY:
        draft.currenciesRate = undefined
        draft.loading = LoadingState.LOADING
        break
      case EnumActionType.SET_CURRENCY:
        draft.currenciesRate = action.payload
        draft.loading = LoadingState.LOADED
        break
      case EnumActionType.SET_EXCHANGE_TO_CURRENCY:
        draft.exchangeTo = action.payload
        break
      case EnumActionType.SET_LOADING:
        draft.loading = action.payload
        break

      default:
        break
    }
  },
  initialExpenseState
)
