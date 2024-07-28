import { Meta, StoryFn } from "@storybook/react";
import { Navbar, NavbarProps } from "./Navbar";
import userIcon from "../assets/user_icon.png";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    userName: {
      control: "text",
      description: "Name of the user",
    },
    userIcon: {
      control: "text",
      description: "URL or path to the user icon",
    },
    notificationCount: {
      control: "number",
      description: "Number of notifications",
    },
  },
};

export default meta;

const Template: StoryFn<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  userName: "User",
  userIcon: userIcon,
  notificationCount: 5,
};
