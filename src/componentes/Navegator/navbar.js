import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import logo from "../imagenes/logo.svg";

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={logo} />
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
