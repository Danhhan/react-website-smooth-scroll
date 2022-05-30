import React from "react";
import PropTypes from "prop-types";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from "./styled";

const Sidebar2 = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarWrapper>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink to="/">About</SidebarLink>
          <SidebarLink to="/">About</SidebarLink>
          <SidebarLink to="/">About</SidebarLink>
          <SidebarLink to="/">About</SidebarLink>
          <SidebarLink to="/">About</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/"></SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

Sidebar2.propTypes = {};

export default Sidebar2;
