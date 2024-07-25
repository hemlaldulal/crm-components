import React from "react";
import PropTypes from "prop-types";
import "./textarea.css";

export interface TextAreaProps {
  /**
   * What placeholder text to use
   */
  placeholder?: string;
  /**
   * How large should the textarea be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Type of textarea border color
   */
  type?: "success" | "danger" | "warning" | "info";
  /**
   * Optional change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  size = "medium",
  type,
  onChange,
  ...props
}) => {
  const mode = type ? `storybook-textarea--${type}` : "";
  return (
    <textarea
      className={["storybook-textarea", `storybook-textarea--${size}`, mode].join(" ")}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    ></textarea>
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["success", "danger", "warning", "info"]),
  onChange: PropTypes.func,
};
