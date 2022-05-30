import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: #000;
  height: 80px;
  display: flex;
  justify-content: center;
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  align-items: center;
`;
export const NavLogo = styled(Link)`
  color: white;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(Link)`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  text-decoration: none;
  
`;
export const NavBtnLink = styled(Link)`
  color: white;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    font-size: 1.8rem;
    transform: translate(-100%, 60%);
  }
`;
