import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar, SearchBarProps } from "./SearchBar";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the search input",
    },
    onSearch: {
      action: "searched",
      description: "Callback function when search is triggered",
    },
  },
};

export default meta;
type Story = StoryObj<SearchBarProps>;

export const Default: Story = {
  args: {
    placeholder: "Search...",
    onSearch: action("searched"),
  },
};

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: "Type to search...",
    onSearch: action("searched"),
  },
};
