import * as React from "react";
import { TextField } from "@fluentui/react";
import { Control, Controller, useFormContext } from "react-hook-form";

interface ITextareaFormProps {
  name: string;
  label: string;
  isRequired?: boolean;
  isdisabled?: boolean;
  isReadyOnly?: boolean;
  defaultValue?: string;
  rows?: number;
  control?: Control<any>;
  placeholder?: string;
}
 
const TextareaForm = ({
  name,
  label,
  isRequired,
  isdisabled,
  isReadyOnly,
  defaultValue,
  rows,
  placeholder
}:  
ITextareaFormProps) => {
  const { control, register } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => {
          return (
            <div
              className={
                isRequired ? (error ? "errorGroup" : "errorGroupStar") : ""
              }
            >
              {/* <input {...register(name)} hidden /> */}
              <TextField
                {...field}
                label={label}
                disabled={isdisabled}
                readOnly={isReadyOnly}
                defaultValue={defaultValue}
                errorMessage={error ? error.message : ""}
                placeholder={placeholder}
                multiline
                rows={rows}
                className={
                  isRequired ? (error ? "errorGroup" : "errorGroupStar") : ""
                }
              />
            </div >
          );
        }}
      />
    </>
  );
};

export default TextareaForm;
