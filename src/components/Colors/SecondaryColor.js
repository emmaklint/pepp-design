import React from "react";
import ColorCircle from "./ColorCircle";
import { Column } from "../layout";

const SecondaryColor = ({ heading, color, lightColor }) => (
  <Column>
      <h2>{heading}</h2>
        <ColorCircle size="75%" color={color} />
        <h3>50%</h3>
        <ColorCircle size="50%" color={lightColor} />
  </Column>
);

export default SecondaryColor;
