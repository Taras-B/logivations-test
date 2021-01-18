import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Controller, useForm } from 'react-hook-form'

import DateFnsUtils from '@date-io/date-fns'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

import { HookFormSelect } from '../HookFormSelect'
import { actionsExpenses } from '../../store/actions/actionsExpenses'
import { ICurrencyRate, IPayloadAddAction } from '../../store/types'
import { currencyRateKeys } from '../../store/selectors/currencySelector'

interface IFormValues {
  datePick: Date
  nameProduct: string
  price: string
  currency: keyof ICurrencyRate
}

export const ExpenseForm = () => {
  const dispatch = useDispatch()
  const keysCurrency = useSelector(currencyRateKeys)
  const { control, handleSubmit } = useForm<IFormValues>()

  const onSubmitForm = (data: IFormValues) => {
    const dataSend: IPayloadAddAction = {
      datePick: data.datePick,
      data: {
        currency: data.currency,
        nameProduct: data.nameProduct,
        price: +data.price,
      },
    }
    dispatch(actionsExpenses.add(dataSend))
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Grid container justify='center' spacing={4}>
          <Grid item xs={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Controller
                name='datePick'
                control={control}
                defaultValue={new Date()}
                render={({ onChange, value }) => (
                  <DatePicker
                    format='dd-MM-yyyy'
                    label='Basic example'
                    onChange={onChange}
                    value={value}
                    animateYearScrolling
                    required={true}
                  />
                )}
              />
            </MuiPickersUtilsProvider>
          </Grid>

          <Grid item xs={12}>
            <Controller
              as={TextField}
              name='nameProduct'
              control={control}
              defaultValue=''
              label='Name Product'
              fullWidth
              required={true}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              as={TextField}
              name='price'
              control={control}
              defaultValue=''
              fullWidth
              label='Price'
              required={true}
              type='number'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <HookFormSelect
              id='currency-select'
              name='currency'
              label='Choose currency'
              control={control}>
              {keysCurrency &&
                keysCurrency.map((key, i) => (
                  <MenuItem key={i} value={key}>
                    {key}
                  </MenuItem>
                ))}
            </HookFormSelect>
          </Grid>

          <Button type='submit' variant='contained' color='primary'>
            Send
          </Button>
        </Grid>
      </form>
    </>
  )
}
