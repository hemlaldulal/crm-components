import React from "react";
import "./input.css";

export interface InputProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the input be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Input contents
   */
  placeholder: string;
  /**
   * Optional change handler
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  primary = false,
  size = "medium",
  backgroundColor,
  placeholder,
  ...props
}: InputProps) => {
  const mode = primary
    ? "storybook-input--primary"
    : "storybook-input--secondary";
  return (
    <input
      type="text"
      className={["storybook-input", `storybook-input--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      placeholder={placeholder}
      {...props}
    />
  );
};
