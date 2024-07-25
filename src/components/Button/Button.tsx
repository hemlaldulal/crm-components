import "./button.css";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Type of button
   */
  type?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  /**
   * HTML button type
   */
  buttonType?: "button" | "submit" | "reset";
}


/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  type = "primary",
  buttonType = "button",
  ...props
}: ButtonProps) => {
  const mode = `storybook-button--${type}`;
  return (
    <button
      type={buttonType}
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};