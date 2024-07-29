import React from "react";
import { Navbar } from "../Navbar/Navbar";
import userIcon from "../assets/user_icon.png";

const NavbarTest: React.FC = () => {
  return (
    <div className="app">
      <Navbar userName="User" userIcon={userIcon} notificationCount={5} />
    </div>
  );
};

export default NavbarTest;
