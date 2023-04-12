import React from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
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
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            {" "}
            PATH FINDER
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {" "}
                About{" "}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="tutorial"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {" "}
                Tutorial{" "}
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="modes"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {" "}
                Modes{" "}
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBt>
            <NavBtLink to="secondPage"> Try Now</NavBtLink>
          </NavBt>
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default Navbar;
