import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #000;
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: all 0.2s ease-in-out;
`;
export const SidebarWrapper = styled.div``;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
`;
export const SidebarLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: white;
`;
export const SideBtnWrap = styled.div``;
export const SidebarRoute = styled(Link)``;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
`;
export const CloseIcon = styled(FaTimes)`
  color: white;
`;
