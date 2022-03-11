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
  NavbarText,
} from "reactstrap";

export default function NavbarComponent() {
  return (
    <div>
      <Navbar expand="md" light="true" style={{ backgroundColor: "#E6FAFF" }}>
        <NavbarBrand href="/">Exammunity</NavbarBrand>
        <NavbarToggler className="me-2" onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav id="navHover">
                팀소개
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>About Project</DropdownItem>
                <DropdownItem>
                  Project Schedule &nbsp;
                  <Badge pill color="primary">
                    new
                  </Badge>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="https://www.naver.com">
                  장규은
                  <Button
                    children={"git"}
                    outline
                    sm="true"
                    color="danger"
                    style={{ float: "right" }}
                  />
                </DropdownItem>
                <DropdownItem href="https://www.naver.com">
                  김동화
                  <Button
                    children={"git"}
                    outline
                    sm="true"
                    color="danger"
                    style={{ float: "right" }}
                  />
                </DropdownItem>
                <DropdownItem href="https://www.naver.com">
                  임수원
                  <Button
                    children={"git"}
                    outline
                    sm="true"
                    color="danger"
                    style={{ float: "right" }}
                  />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink
                href="https://github.com/SwoftCreation/react-app1"
                id="navHover"
              >
                Git주소
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>2022 Software Project</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
