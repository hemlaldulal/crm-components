import React, { forwardRef } from "react";
import "./input.css";

export interface InputProps {
  name?: string;
  type?: string;
  placeholder: string;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      type = "text",
      placeholder,
      size = "medium",
      backgroundColor,
      ...props
    },
    ref,
  ) => {
    return (
      <input
        name={name}
        type={type}
        className={["storybook-input", `storybook-input--${size}`].join(" ")}
        style={{ backgroundColor }}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
