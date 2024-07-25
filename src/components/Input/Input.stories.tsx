import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/addon-actions";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    placeholder: "Enter text",
  },
};

export const Secondary: Story = {
  args: {
    placeholder: "Enter text",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    placeholder: "Enter text",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    placeholder: "Enter text",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    placeholder: "Enter text",
  },
};
