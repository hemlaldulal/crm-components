import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Dropdown, DropdownProps } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    items: {
      control: "object",
      description: "Array of lists of items for the dropdown",
    },
    label: {
      control: "text",
      description: "Label of the dropdown button",
    },
    onSelect: {
      action: "selected",
      description: "Callback function for item selection",
    },
    defaultSelect: {
      control: "text",
      description: "Default selected item",
    },
  },
};

export default meta;
type Story = StoryObj<DropdownProps>;

export const Default: Story = {
  args: {
    label: "Select an item",
    items: [
      ["Option 1", "Option 2", "Option 3"],
      ["Option 4", "Option 5", "Option 6"],
    ],
    onSelect: action("selected"),
  },
};

export const WithDefaultSelect: Story = {
  args: {
    label: "Select an item",
    items: [
      ["Option 1", "Option 2", "Option 3"],
      ["Option 4", "item", "Apple"],
    ],
    defaultSelect: "Select",
    onSelect: action("selected"),
  },
};

export const Empty: Story = {
  args: {
    label: "No items",
    items: [[]],
    onSelect: action("selected"),
  },
};
