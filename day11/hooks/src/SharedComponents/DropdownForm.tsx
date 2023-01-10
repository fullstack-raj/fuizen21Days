/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {
  useFormContext,
  Controller,
  Control,
} from 'react-hook-form';
import { Dropdown, IDropdownOption } from '@fluentui/react';

export interface IDropDownProps {
  options: IDropdownOption | any;
  name: string;
  label: any;
  placeholder?: string;
  isRequired?: boolean;
  control?: Control<any>;
  register?: any;
  id?:any;
  isdisabled?:boolean;
  defaultSelectedKeys?:any;
  defaultSelectedKey?:string
}

/**
 * DropdownForm
 * @param {React.FC<IDropDownProps>}
 * @returns {React.ReactElement}
 */

/**
 * @typedef {object}
 * @property {string} name
 * @property {any} label
 * @property {any} options
 * @property {string | undefined} placeholder
 * @property {boolean | undefined} isRequired
 * @property {any} id
 * @property { boolean | undefined} isdisabled
 * @property {any} defaultSelectedKeys
 * @property {string} defaultSelectedKey
 */

export const DropdownForm: React.FC<IDropDownProps> = ({
  name,
  label,
  options,
  placeholder,
  isRequired,
  id,
  isdisabled,
  defaultSelectedKeys,
  defaultSelectedKey,
}: // control,
// register
IDropDownProps) => {
  const { control, register } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
        // rules={{ required: true }}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <input {...register(name)} hidden />
          <Dropdown
            placeholder={placeholder}
            label={label}
            options={options}
            required={isRequired}
            id={name}
            onBlur={onBlur}
            selectedKey={value}
            defaultSelectedKeys={defaultSelectedKeys}
            defaultSelectedKey={defaultSelectedKey}
                // onChange={onChange}
            {...register}
            onChange={(
              e: React.FormEvent<HTMLDivElement> | any,
              value1: IDropdownOption | any,
            ) => {
              onChange(value1.key);
            }}
            errorMessage={error ? error.message : ''}
            disabled={isdisabled}
          />
        </>
      )}
    />
  );
};
