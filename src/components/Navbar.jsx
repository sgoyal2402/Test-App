import React from "react";
import styled from "styled-components";
import Account from "./Account";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  flex: 0 1 auto;
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 16px;
  box-shadow: 1px 1px 1px 1px #e5eaed;
`;

const NavItems = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  flex: 1;
`;

const Date = styled.div`
  display: flex;
  align-items: center;
`;

export default function Navbar() {
  const options = { day: "numeric", month: "long", year: "numeric" };

  return (
    <Nav>
      <Date>
        Today:
        <span
          style={{
            textTransform: "uppercase",
            fontWeight: "500",
            marginLeft: "8px"
          }}
        >
          {new window.Date().toLocaleDateString(undefined, options)}
        </span>
      </Date>
      <NavItems>
        <button className="nav-item">
          <i className="fas fa-search"></i>
        </button>
        <button className="nav-item">
          <i className="fas fa-envelope"></i>
        </button>
        <button className="nav-item">
          <i className="fas fa-bell"></i>
        </button>
        <Account />
      </NavItems>
    </Nav>
  );
}
