import React from "react";
import Form from "../Form/Form";
import { ButtonProps } from "../Button/Button";

const fields = [
  {
    name: "username",
    label: "Username",
    type: "text",
    placeholder: "Enter your username",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];

const buttonProps: ButtonProps = {
  label: "Submit",
  buttonType: "submit",
  size: "medium",
  backgroundColor: "#007bff",
};

const onSubmit = (data: any) => {
  console.log("Form submitted:", data);
};

const TestingForm: React.FC = () => {
  return (
    <div className="testing-form-container">
      <h2>Test Form</h2>
      <Form fields={fields} onSubmit={onSubmit} buttonProps={buttonProps} />
    </div>
  );
};

export default TestingForm;
