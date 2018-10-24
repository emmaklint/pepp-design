import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  font-weight: 700;
  padding: 0 40px;
  font-family: "Raleway";
`;

const Item = ({ linkText, linkTo }) => (
  <NavLink to={linkTo}>{linkText}</NavLink>
);

export default Item;
