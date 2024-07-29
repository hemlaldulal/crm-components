// src/components/Input/Input.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import { Input, InputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    placeholder: { control: "text" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    backgroundColor: { control: "color" },
    primary: { control: "boolean" },
    onChange: { action: "changed" },
  },
} as Meta<typeof Input>;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text",
  size: "medium",
  backgroundColor: "#ddd",
  required: true,
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Primary input",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  placeholder: "Large input",
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  placeholder: "Small input",
  size: "small",
};
