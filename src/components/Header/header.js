import React from "react";
import Item from "./item";
import logotyp from "../../images/pepp-logotyp.png";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledHeader = styled.div`
  border-bottom: 1px solid black;
  margin: 1.45rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledNavBar = styled.div`
  max-width: 960;
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const StyledHeaderLogo = styled.img`
width: 75px;
height: 75px;`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/">
      <StyledHeaderLogo
        src={logotyp}
        alt="Pepp"
      />
    </Link>
    <StyledNavBar>
      <Item linkText="Logotyp" linkTo="logotyp" />
      <Item linkText="Färger" linkTo="farger" />
      <Item linkText="Typografi" linkTo="typografi" />
      <Item linkText="Bilder" linkTo="bilder" />
      <Item linkText="Grafiska element" linkTo="grafiska-element" />
    </StyledNavBar>
  </StyledHeader>
);

export default Header;
