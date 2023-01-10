import * as React from "react";
import { Label, TextField } from "@fluentui/react";
import { Control, Controller, useFormContext } from "react-hook-form";

interface ITextFieldFormProps {
  name: string;
  label: string;
  isRequired?: boolean;
  isdisabled?: boolean;
  isReadyOnly?: boolean;
  defaultValue?: string;
  control?: Control<any>;
  register?: any;
  placeholder?: string;
}

/**
 * TextFieldForm
 * @returns {React.ReactElement}
 */

/**
 * @typedef {object}
 * @property {string} name 
 * @property {string} label 
 * @property {boolean | undefined} isRequired 
 * @property {boolean | undefined} isdisabled 
 * @property {boolean | undefined} isReadyOnly 
 * @property {string | undefined} defaultValue 
 */

const TextFieldForm = ({
  name,
  label,
  isRequired,
  isdisabled,
  isReadyOnly,
  defaultValue,
  placeholder
  
}: //register,
ITextFieldFormProps) => {
  const { control, register } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({
          field,
          fieldState: { error, invalid, isTouched, isDirty },
        }) => {
          return (
            <>
              <div
                className={
                  isRequired ? (error ? "errorGroup" : "errorGroupStar") : ""
                }
              >
                <input {...register(name)} hidden defaultValue={defaultValue} />
                <TextField
                  label={label}
                  disabled={isdisabled}
                  readOnly={isReadyOnly}
                  defaultValue={defaultValue}
                  placeholder={placeholder}
                  {...field}
                  errorMessage={error ? error.message : ""}
                  className={
                    isRequired ? (error ? "errorGroup" : "errorGroupStar") : ""
                  }
                />
              </div>
            </>
          );
        }}
      />
    </>
  );
};

export default TextFieldForm;
