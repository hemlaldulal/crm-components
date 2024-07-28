import { Meta, StoryFn } from "@storybook/react";
import { Pagination, PaginationProps } from "./Pagination";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    currentPage: {
      control: { type: "number" },
      description: "Current active page",
    },
    totalPages: {
      control: { type: "number" },
      description: "Total number of pages",
    },
    onPageChange: {
      action: "pageChanged",
      description: "Function to call when page changes",
    },
  },
};

export default meta;

const Template: StoryFn<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 5,
  onPageChange: action("pageChanged"),
};

export const ManyPages = Template.bind({});
ManyPages.args = {
  currentPage: 1,
  totalPages: 100,
  onPageChange: action("pageChanged"),
};
