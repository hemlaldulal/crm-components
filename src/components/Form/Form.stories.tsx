import { Meta, StoryFn } from "@storybook/react";
import Form, { FormProps } from "./Form";

const meta: Meta<FormProps> = {
  title: "Components/Form",
  component: Form,
  argTypes: {
    onSubmit: { action: "submitted" },
    buttonProps: { control: "object" },
  },
};

export default meta;

const Template: StoryFn<FormProps> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  fields: [
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
  ],
  onSubmit: (data: any) => console.log(data),
  buttonProps: {
    label: "Submit",
    buttonType: "submit",
    size: "small",
    backgroundColor: "#007bff",
  },
};
