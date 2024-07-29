import React from "react";
import "./input.css";

export interface InputProps {
  name?: string;
  type?: string;
  placeholder: string;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  name,
  type = "text",
  placeholder,
  size = "medium",
  backgroundColor,
  ...props
}) => {
  return (
    <input
      name={name}
      type={type}
      className={["storybook-input", `storybook-input--${size}`].join(" ")}
      style={{ backgroundColor }}
      placeholder={placeholder}
      {...props}
    />
  );
};
