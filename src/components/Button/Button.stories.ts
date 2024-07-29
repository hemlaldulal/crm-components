import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    type: {
      control: { type: "select", options: ["primary", "secondary"] },
    },
    flavor: {
      control: {
        type: "select",
        options: ["default", "hover", "icon", "disabled", "disabledIcon"],
      },
    },
    backgroundColor: {
      control: "color",
    },
  },
  args: {
    onClick: action("onClick"),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Default Button
export const PrimaryDefault: Story = {
  args: {
    size: "medium",
    label: "Button",
    type: "primary",
    flavor: "default",
  },
};

// Primary Hover Button
export const PrimaryHover: Story = {
  args: {
    size: "medium",
    label: "Button",
    type: "primary",
    flavor: "hover",
  },
};

// Primary Icon Button
export const PrimaryIcon: Story = {
  args: {
    size: "medium",
    label: "+ Button",
    type: "primary",
    flavor: "icon",
  },
};

// Primary Disabled Button
export const PrimaryDisabled: Story = {
  args: {
    size: "medium",
    label: "Button",
    type: "primary",
    flavor: "disabled",
  },
};

// Primary Disabled Icon Button
export const PrimaryDisabledIcon: Story = {
  args: {
    size: "medium",
    label: "+ Button",
    type: "primary",
    flavor: "disabledIcon",
  },
};

// Secondary Default Button
export const SecondaryDefault: Story = {
  args: {
    size: "medium",
    label: "Button",
    type: "secondary",
    flavor: "default",
  },
};

// Secondary Hover Button
export const SecondaryHover: Story = {
  args: {
    size: "medium",
    label: "Button",
    type: "secondary",
    flavor: "hover",
  },
};

// Secondary Icon Button
export const SecondaryIcon: Story = {
  args: {
    size: "medium",
    label: "+ Button",
    type: "secondary",
    flavor: "icon",
  },
};

// Secondary Disabled Button
export const SecondaryDisabled: Story = {
  args: {
    size: "medium",
    label: "Button",
    type: "secondary",
    flavor: "disabled",
  },
};

// Secondary Disabled Icon Button
export const SecondaryDisabledIcon: Story = {
  args: {
    size: "medium",
    label: "+ Button",
    type: "secondary",
    flavor: "disabledIcon",
  },
};

// Small Button
export const SmallButton: Story = {
  args: {
    size: "small",
    label: "Small Button",
    type: "primary",
    flavor: "default",
  },
};

// Medium Button
export const MediumButton: Story = {
  args: {
    size: "medium",
    label: "+ Button",
    type: "primary",
    flavor: "disabledIcon",
  },
};

// Large Button
export const LargeButton: Story = {
  args: {
    size: "large",
    label: "Large Button",
    type: "primary",
    flavor: "default",
  },
};

