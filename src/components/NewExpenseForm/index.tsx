import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { HookFormSelect } from '../HookFormSelect'

//TODO: Try create ENUM in currency interface and other

interface IFormValues {
    datePick: Date
    nameProduct: string
    price: number
    currency: string
}

export const ExpenseForm = () => {
    const {control, handleSubmit} = useForm<IFormValues>()

    const onSubmitForm = (data: IFormValues) => {
        console.log(data)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <Grid container justify='center' spacing={4}>
                    <Grid item xs={12}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Controller name="datePick" control={control} defaultValue={new Date()}
                                        render={({onChange, value}) => (
                                            <DatePicker
                                                format="dd-MM-yyyy"
                                                label="Basic example"
                                                onChange={onChange}
                                                value={value}
                                                animateYearScrolling
                                            />
                                        )}/>
                        </MuiPickersUtilsProvider>
                    </Grid>

                    <Grid item xs={12}>
                        <Controller as={TextField}
                                    name="nameProduct"
                                    control={control}
                                    defaultValue=""
                                    label='Name Product'
                                    fullWidth/>

                    </Grid>
                    <Grid item xs={6}>
                        <Controller as={TextField}
                                    name="price"
                                    control={control}
                                    defaultValue=""
                                    fullWidth
                                    label='Price'/>

                    </Grid>
                    <Grid item xs={6}>

                        <HookFormSelect
                            id="currency-select"
                            name="currency"
                            label="Choose currency"
                            control={control}
                        >
                            <MenuItem value="3">03</MenuItem>
                            <MenuItem value="6">06</MenuItem>
                            <MenuItem value="9">09</MenuItem>
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

