import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/NavStyle.css";
import { loginBtnClicked } from "../login/loginButton";

import {
  faArrowRightToBracket,
  faCartPlus,
  faTeeth,
  faUserNinja,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

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

import { useHistory } from "react-router-dom";

/*
  NavbarComponent : 상단 네비게이션 바
 */

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  return (
    <div>
      <Navbar
        expand="lg"
        color="light"
        light
        style={{ backgroundColor: "#E6FAFF" }}
      >
        <NavbarBrand
          href="/"
          style={{ fontFamily: "fantasy" }}
          onClick={(e) => {
            e.defaultPrevented();
            history.push("/");
          }}
        >
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
            <NavItem
              id="navHover"
              style={{ margin: "10px" }}
              onClick={() => {
                history.push("/ExamMarket/MarketPlace");
              }}
            >
              <NavLink>
                ExamMarket <FontAwesomeIcon icon={faCartPlus} />
              </NavLink>
            </NavItem>

            <NavItem
              id="navHover"
              style={{ margin: "10px" }}
              onClick={() => {
                history.push("/ExamSquare/ArticleList");
              }}
            >
              <NavLink>
                ExamSquare <FontAwesomeIcon icon={faTeeth} />
              </NavLink>
            </NavItem>

            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle
                caret
                nav
                id="navHover"
                style={{ margin: "10px" }}
              >
                Team소개 <FontAwesomeIcon icon={faUserNinja} />
              </DropdownToggle>
              <DropdownMenu end id="navOptions">
                <DropdownItem
                  onClick={() => {
                    history.push("/introduce/Team");
                  }}
                >
                  About Project
                </DropdownItem>

                <DropdownItem
                  onClick={() => {
                    history.push("/introduce/Schedule");
                  }}
                >
                  Project Schedule &nbsp;
                  <Badge pill color="primary">
                    new
                  </Badge>
                </DropdownItem>

                <DropdownItem href="https://github.com/SwoftCreation/react-app1">
                  Project Git &nbsp;
                  <Badge pill color="primary">
                    new
                  </Badge>
                </DropdownItem>
                <DropdownItem divider />

                <DropdownItem
                  onClick={(e) => {
                    e.preventDefault();
                    history.push("/introduce/Soo");
                  }}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                  &nbsp;임수원&nbsp;
                  <span
                    style={{
                      fontSize: "xx-small",
                      textDecoration: "underline",
                    }}
                  >
                    프론트엔드
                  </span>
                  <Button
                    className="gitButton"
                    children="git"
                    outline
                    sm="true"
                    color="danger"
                    style={{ float: "right" }}
                    size="sm"
                    href="https://github.com/SwoftCreation?tab=overview&from=2021-08-01&to=2021-08-31"
                  />
                </DropdownItem>

                <DropdownItem
                  onClick={(e) => {
                    e.preventDefault();
                    history.push("/introduce/Gyu");
                  }}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                  &nbsp;장규은&nbsp;
                  <span
                    style={{
                      fontSize: "xx-small",
                      textDecoration: "underline",
                    }}
                  >
                    백엔드
                  </span>
                  <Button
                    className="gitButton"
                    children="git"
                    outline
                    sm="true"
                    color="danger"
                    style={{ float: "right" }}
                    href="https://github.com/denose0120"
                    size="sm"
                  />
                </DropdownItem>
                <DropdownItem
                  onClick={(e) => {
                    e.preventDefault();
                    history.push("/introduce/Dong");
                  }}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                  &nbsp;김동화&nbsp;
                  <span
                    style={{
                      fontSize: "xx-small",
                      textDecoration: "underline",
                    }}
                  >
                    백엔드
                  </span>
                  <Button
                    className="gitButton"
                    children="git"
                    outline
                    color="danger"
                    style={{ float: "right" }}
                    href="https://github.com/imsiyong"
                    size="sm"
                  />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button
            color="success"
            outline="true"
            size="sm"
            style={{ margin: "10px 10px 10px 10px" }}
            id="loginButton"
            onClick={loginBtnClicked}
          >
            로그인 &nbsp;
            <FontAwesomeIcon icon={faArrowRightToBracket} />
          </Button>
          <NavbarText
            style={{ fontSize: "xx-small", margin: "20px 10px 10px 0px" }}
          >
            2022 Software Project
          </NavbarText>
        </Collapse>
      </Navbar>
      <br />
      <br />
      <hr />
      <br />
    </div>
  );
}
