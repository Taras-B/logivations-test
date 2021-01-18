import { ICurrencyRate } from '../store/types'

const BASE_URL = `http://data.fixer.io/api/latest?access_key=9435719ee53438170b0160c0f5df62ca`
const symbolsCurrency = ['GBP', 'JPY', 'EUR', 'PLN', 'UAH', 'USD']

interface IGetExpenseResult {
  base: string
  date: string
  rates: ICurrencyRate
  success: boolean
  timestamp: number
}

export const expenseAPI = {
  get(): Promise<IGetExpenseResult> {
    console.log('click')

    return fetch(`${BASE_URL}&symbols=${symbolsCurrency}`).then((res) => res.json())
  },
}
