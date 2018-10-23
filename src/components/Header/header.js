import React from "react";
import Item from "./item";
import pepp from "../../images/pepp.png";
import { Link } from "gatsby";

const Header = ({ siteTitle }) => (
  <div
    style={{
      borderBottom: "1px solid black",
      margin: "1.45rem 0",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Link to="/">
      <img src={pepp} alt="Pepp" style={{
        width: "75px",
        height: "75px",
       


      }}/>
    </Link>
    <div
      style={{
        maxWidth: 960,
        padding: "1rem 0.5rem",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <Item linkText="Logotyp" linkTo="logotyp" />
      <Item linkText="Färger" linkTo="farger" />
      <Item linkText="Typografi" linkTo="typografi" />
      <Item linkText="Bilder" linkTo="bilder" />
      <Item linkText="Grafiska element" linkTo="grafiska-element" />
    </div>
  </div>
);

export default Header;
