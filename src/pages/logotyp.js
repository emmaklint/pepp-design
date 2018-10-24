import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { Grid, GridItem } from "styled-grid-responsive";
import logotyp from "../images/pepp-logotyp.png";
import logotypBlack from "../images/pepp-logotyp-black.png";

import { P, H1, H2 } from "../components/Typography/Typography";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogotypItem = ({ src }) => {
  return <img src={src} alt="Logo" />;
};

const Logotyp = () => (
  <Layout>
    <H1>Logotyp</H1>
    <P>Den gula logotypfärgen används endast i logotypen eller i geometriska former som fungerar som dekoration i grafiken. Färgen ska inte användas som bakgrundsfärg eller övertoningsfärg då det ger ett rörigt intryck i kombination med logotypen.

Den gula logotypen används med fördel i kombination med någon av dekorfärgerna och blir då accentfärg, färgen i fokus som står ut från övrig grafik. Arbeta då med position och storlek för att leda läsarens ögon genom designen.</P>
    <Grid gutter={100}>
      <GridItem col={1 / 4}>
        <Column>
          <H2>Primär logotyp</H2>
          <LogotypItem src={logotyp} />
          <P>Används mot <strong>färgad</strong> och <strong>vit</strong> bakgrund. Ej mot gul eller gul-tonad.</P>
        </Column>
      </GridItem>
      <GridItem col={1 / 4}>
        <Column>
          <H2>Sekundär logotyp</H2>
          <img src={logotypBlack} alt="Logo" />
          <P>Används vid svart/vitt tryck.</P>
        </Column>
      </GridItem>
    </Grid>
  </Layout>
);

export default Logotyp;
