
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
}:  
IDropDownProps) => {
  const { control, register } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
       
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
