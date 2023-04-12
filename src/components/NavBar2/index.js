import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBt,
  NavBtLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"> PATH FINDER</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about"> Algorithms </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="tutorial"> Speed </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="modes"> Modes </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBt>
            <NavBtLink to="secondPage"> Back</NavBtLink>
          </NavBt>
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default Navbar;
