import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import "./form.css";
import { Input } from "../Input/Input";
import { Button, ButtonProps } from "../Button/Button";

export interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  validation?: object;
}

export interface FormProps {
  fields: FormField[];
  onSubmit: SubmitHandler<FieldValues>;
  buttonProps: ButtonProps;
}

const Form: React.FC<FormProps> = ({ fields, onSubmit, buttonProps }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="dynamic-form">
      {fields.map((field) => (
        <div key={field.name} className="form-group">
          <label htmlFor={field.name}>{field.label}</label>
          <Input
            // id={field.name}
            type={field.type}
            placeholder={field.placeholder || ""}
            required={true}
            {...register(field.name, field.validation)}
          />
          {errors[field.name] && (
            <span className="error">{(errors[field.name] as any).message}</span>
          )}
        </div>
      ))}
      <Button {...buttonProps} />
    </form>
  );
};

export default Form;
