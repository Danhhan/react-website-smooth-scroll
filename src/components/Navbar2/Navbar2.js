import React from "react";
import { FaBars } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./styled";

const Navbar2 = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Ducky</NavLogo>
        <MobileIcon
          onClick={toggle}
        >
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtnLink to="sign-in">Sign in</NavBtnLink>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar2;
