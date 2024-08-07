import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Style from "./header.module.css";
import { IoMenu } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiHome2Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPower } from "react-icons/io5";
import ScbLogo from "../../img/scb_new_logo.png";
import "../overallCss.css";
const BorderRightCls = {
  outlineRight: "2px solid black",
  padding: "3px",
};
const NavDiv = {
  height: "50px",
  display: "flex",
  alignItems: "center",
  borderRight: "1px solid",
  padding: "10px",
};
const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        display: "grid",
        gridTemplateColumns: "7% 15% 15% 15% 38% 10%",
        backgroundColor: "#0c77b9",
        color: "white",
        alignItems: "center",
      }}
    >
      <div className="nav_div">
        <IoMenu />
        &nbsp;&nbsp;Menu
      </div>
      <div className="nav_div">
        <RiHome2Line />
        &nbsp;&nbsp;Staright2Bank
        <img
          src={ScbLogo}
          style={{
            mixBlendMode: "multiply",
            width: "40px",
          }}
        />
      </div>
      <div
        style={{ flex: 1, display: "flex", alignItems: "center" }}
        className="nav_div"
      >
        <p
          style={{
            border: "1px solid white",
            margin: "0px",
            padding: "5px",
            width: "40px",
            height: "40px",

            borderRadius: "50%",
          }}
        >
          R
        </p>
        &nbsp;&nbsp;
        <div style={{ textAlign: "start" }}>
          <p className="mb-0">Welcome</p>
          <p className="mb-0">Rajesh</p>
        </div>
      </div>
      <div style={{ flex: 1 }} className="nav_div">
        &nbsp;&nbsp;Group ID: RAJESH&nbsp;
        <RiArrowDropDownLine />
      </div>
      <div style={{ justifyContent: "end" }} className="nav_div">
        <IoMdNotificationsOutline />
      </div>
      <div className="nav_div" style={{ flex: 1 }}>
        <IoPower />
        &nbsp;&nbsp;Logout
      </div>
    </div>
  );
};
const TrHeader = () => {
  return (
    <div className={Style.nav_div}>
      <Navbar expand="lg" className={`${Style.header_main_div}`}>
        {/* <Navbar.Text href="#home">
          <IoMenu />
          &nbsp;&nbsp;Menu
        </Navbar.Text>
        <Navbar.Text href="">
          <RiHome2Line />
          &nbsp;&nbsp;Staright2Bank
        </Navbar.Text>
        <Navbar.Text href="#home">
          <RiHome2Line />
          <p>R</p>
          &nbsp;&nbsp;Welcome Rajesh
        </Navbar.Text>
        <Navbar.Text href="#home">
          &nbsp;&nbsp;Group ID: RAJESH&nbsp;
          <RiArrowDropDownLine />
        </Navbar.Text> */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <Navbar.Text href="" style={BorderRightCls} className="borderRight">
              <IoMenu />
              &nbsp;&nbsp;Menu
            </Navbar.Text>
            <Navbar.Text href="" style={BorderRightCls}>
              <RiHome2Line />
              &nbsp;&nbsp;Staright2Bank
            </Navbar.Text>
            <Navbar.Text style={BorderRightCls}>
              <RiHome2Line />
              <span>R</span>
              &nbsp;&nbsp;Welcome Rajesh
            </Navbar.Text>
            <Navbar.Text style={BorderRightCls}>
              &nbsp;&nbsp;Group ID: RAJESH&nbsp;
              <RiArrowDropDownLine />
            </Navbar.Text>
            {/* <Nav.Link style={BorderRightCls}>
              <IoMdNotificationsOutline />
            </Nav.Link>
            <Navbar.Text style={BorderRightCls}>
              <IoPower />
              &nbsp;&nbsp;Logout
            </Navbar.Text> */}
          </Nav>
        </Navbar.Collapse>
        <Nav.Link style={BorderRightCls}>
          <IoMdNotificationsOutline />
        </Nav.Link>
        <Navbar.Text style={BorderRightCls}>
          <IoPower />
          &nbsp;&nbsp;Logout
        </Navbar.Text>
      </Navbar>
    </div>
  );
};

export default Header;
