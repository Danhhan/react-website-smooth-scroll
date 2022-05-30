import React, { useState } from "react";
import Navbar2 from "../Navbar2";
import Sidebar2 from "../Sidebar2";

const Header = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar2 toggle={toggle} />
      <Sidebar2 isOpen={isOpen} toggle={toggle} />
      {children}
    </>
  );
};

export default Header;
