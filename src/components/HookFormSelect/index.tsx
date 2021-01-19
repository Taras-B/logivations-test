import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { Control, Controller } from 'react-hook-form'
import Select from '@material-ui/core/Select'

export interface IHookSelectProps {
  id: string
  name: string
  label: string
  control: Control
  defaultValue?: string
}

export const HookFormSelect: React.FC<IHookSelectProps> = ({
  name,
  label,
  control,
  defaultValue = 'EUR',
  children,

  ...props
}) => {
  const labelId = `${name}-label`
  return (
    <FormControl style={{ minWidth: 170 }} {...props}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        as={
          <Select labelId={labelId} label={label}>
            {children}
          </Select>
        }
        name={name}
        control={control}
        defaultValue={defaultValue}
        variant='outlined'
        required={true}
      />
    </FormControl>
  )
}
