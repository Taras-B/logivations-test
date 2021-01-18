import { createSelector } from 'reselect'
import { RootState } from '../rootReducer'
import { ICurrencyState } from '../types'

const currencyState = (state: RootState): ICurrencyState => state.currency

const currencyData = (state: RootState): ICurrencyState['currenciesRate'] =>
  currencyState(state).currenciesRate

export const currencyLoading = (state: RootState): ICurrencyState['loading'] =>
  currencyState(state).loading

export const currencyRateKeys = createSelector(currencyData, (currency) => {
  if (currency) return Object.keys(currency)
  return false
})
