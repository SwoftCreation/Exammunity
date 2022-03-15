import React, { useState } from "react";
import "../style/NavStyle.css";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar
        expand="lg"
        color="light"
        light
        style={{ backgroundColor: "#E6FAFF" }}
      >
        <NavbarBrand href="/" style={{ fontFamily: "fantasy" }}>
          Exammunity
        </NavbarBrand>
        <NavbarToggler
          className="me-2"
          onClick={() => {
            console.log(isOpen);
            setIsOpen(!isOpen);
            console.log(isOpen);
          }}
        />
        <Collapse navbar isOpen={isOpen}>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav id="navHover">
                팀소개
              </DropdownToggle>
              <DropdownMenu end id="navOptions">
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
                    href="https://github.com/denose0120"
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
                    href="https://github.com/imsiyong"
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
                    href="https://github.com/SwoftCreation?tab=overview&from=2021-08-01&to=2021-08-31"
                  />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink
                href="https://github.com/SwoftCreation/react-app1"
                id="navHover"
              >
                프로젝트 Git주소
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>2022 Software Project</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
