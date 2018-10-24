import React from "react";
import ColorCircle from "./ColorCircle";
import { Column } from "../layout";


const PrimaryColor = ({ heading, color }) => (
  <Column>
    <h2>{heading}</h2>
    <ColorCircle color={color} />
  </Column>
);

export default PrimaryColor;
