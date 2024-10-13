// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo>TechnoHacks</Logo>
      <NavList>
        <NavItem><a href="#home">Home</a></NavItem>
        <NavItem><a href="#about">About</a></NavItem>
        <NavItem><a href="#schedule">Schedule</a></NavItem>
        <NavItem><a href="#register">Register</a></NavItem>
      </NavList>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #f8edeb;
  padding: 10px 50px; /* Adds padding to the left and right */
  display: flex;
  justify-content: flex-start; /* Aligns items to the left */
  align-items: center;
  color: #669bbc;
  z-index: 100;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #003049;
  left: 50;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: 30px;

  a {
    color: #003049;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #669bbc;
    }
  }
`;

export default Navbar;
