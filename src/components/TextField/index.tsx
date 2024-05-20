'use client';

import React from 'react';
import {
  Control,
  Controller,
  ControllerProps,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { TextField as MUITextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';

export interface TextFieldProps<T> extends Omit<MuiTextFieldProps, 'name'> {
  validation?: ControllerProps['rules'];
  name?: string;
  control?: Control<FieldValues>
  defaultValue?: UseControllerProps['defaultValue'];
  type?: string;
  InputProps?: MuiTextFieldProps['InputProps'];
  id?: string;

  renderValue?: (value: any) => any;
  customizeValue?: (value: any) => any;
}

export function TextField<T extends FieldValues = never>({
  validation = {},
  type,
  required,
  name = '',
  defaultValue,
  control,
  InputProps,
  renderValue,
  customizeValue,
  autoFocus,
  id,
  ...rest
}: TextFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={validation}
      render={({
        field: { value, onChange, onBlur, name, ref },
        fieldState: { invalid, error },
      }) => {
        return (
          <MUITextField
            id={id || name}
            name={name}
            autoFocus={autoFocus}
            value={
              value == null ? '' : renderValue ? renderValue(value) : value
            }
            required={required}
            inputRef={ref}
            type={type}
            onChange={(e) => {
              if (customizeValue) onChange(customizeValue(e.target.value));
              else onChange(e.target.value);
            }}
            onBlur={onBlur}
            error={invalid}
            helperText={error ? error?.message : ''}
            InputProps={InputProps}
            onWheel={(event) =>
              event.currentTarget.querySelector('input')?.blur()
            }
            {...rest}
          />
        );
      }}
    />
  );
}
