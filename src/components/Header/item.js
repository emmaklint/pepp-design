import React from "react";
import { Link } from "gatsby";

const Item = ({ linkText, linkTo }) => (
  <Link
    to={linkTo}
    style={{
      textTransform: "uppercase",
      textDecoration: "none",
      color: 'black',
      fontWeight: 700,
      padding: '0 40px'
    }}
  >
    {linkText}
  </Link>
);

export default Item;
