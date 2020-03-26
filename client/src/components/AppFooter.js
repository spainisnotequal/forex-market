import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

const AppFooter = () => {
  return (
    <div className="fixed-bottom">
      <Navbar color="dark" dark expand="sm" className="mt-2">
        <Container>
          <NavbarBrand>
            Made with
            <span style={{ fontSize: "150%", color: "red" }}> &hearts;</span> by
            me
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>spainisnotequal</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppFooter;
