import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Badge,
} from "reactstrap";

export default function NavbarComponent() {
  return (
    <div>
      <Navbar color="light" expand="md" light="true">
        <NavbarBrand href="/">Team규은</NavbarBrand>
        <NavbarToggler className="me-2" onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                팀소개
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>About Project</DropdownItem>
                <DropdownItem>
                  Project Schedule
                  <Badge pill color="primary">
                    new
                  </Badge>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="https://www.naver.com">
                  장규은 &nbsp; &nbsp; &nbsp;
                  <Button children={"git"} outline sm="true" color="danger" />
                </DropdownItem>
                <DropdownItem href="https://www.naver.com">
                  김동화 &nbsp; &nbsp; &nbsp;
                  <Button children={"git"} outline sm="true" color="danger" />
                </DropdownItem>
                <DropdownItem href="https://www.naver.com">
                  임수원 &nbsp; &nbsp; &nbsp;
                  <Button children={"git"} outline sm="true" color="danger" />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="https://github.com/SwoftCreation/react-app1">
                Git주소
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
