import { createSelector } from 'reselect'
import { RootState } from '../rootReducer'
import { ICurrencyState, LoadingState } from '../types'
import { expenseData } from './expenseSelectors'

const currencyState = (state: RootState): ICurrencyState => state.currency

const currencyData = (state: RootState): ICurrencyState['currenciesRate'] =>
  currencyState(state).currenciesRate
const exchangeToCurrency = (state: RootState): ICurrencyState['exchangeTo'] =>
  currencyState(state).exchangeTo

export const currencyIsLoading = (state: RootState): boolean =>
  currencyState(state).loading === LoadingState.LOADING

export const currencyRateKeys = createSelector(currencyData, (currency) => {
  if (currency) return Object.keys(currency)
  return false
})

export const totalCurrencySelector = createSelector(
  currencyData,
  expenseData,
  exchangeToCurrency,
  (data, expenses, exchangeTo) => {
    if (data !== undefined) {
      const rate: number[] = expenses.map(
        (item) =>
          item.data.reduce(
            (acum, current) => current.price / data[current.currency] + acum,
            0
          ) * data[exchangeTo]
      )

      return rate.reduce((a, cur) => a + cur, 0).toFixed(2)
    }
    return 0
  }
)
