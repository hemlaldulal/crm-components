import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    type: {
      control: { type: "select", options: ["success", "danger", "warning", "info"] },
    },
  },
  args: { onChange: action("onChange") },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "small",
    placeholder: "Small TextArea",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    placeholder: "Medium TextArea",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    placeholder: "Large TextArea",
  },
};

export const Success: Story = {
  args: {
    type: "success",
    placeholder: "Success TextArea",
  },
};

export const Danger: Story = {
  args: {
    type: "danger",
    placeholder: "Danger TextArea",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    placeholder: "Warning TextArea",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    placeholder: "Info TextArea",
  },
};
