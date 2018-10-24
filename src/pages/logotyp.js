import React from "react";
import Layout from "../components/layout";
import { Grid, GridItem } from "styled-grid-responsive";
import logotyp from "../images/pepp-logotyp.png";
import logotypBlack from "../images/pepp-logotyp-black.png";
import { P, LineHeading } from "../components/Typography/Typography";
import { Column} from "../components/layout"



const LogotypItem = ({ src }) => {
  return <img src={src} alt="Logo" />;
};

const Logotyp = () => (
  <Layout>
    <LineHeading>Logotyp</LineHeading>
    <P>Den gula logotypfärgen används endast i logotypen eller i geometriska former som fungerar som dekoration i grafiken. Färgen ska inte användas som bakgrundsfärg eller övertoningsfärg då det ger ett rörigt intryck i kombination med logotypen.

Den gula logotypen används med fördel i kombination med någon av dekorfärgerna och blir då accentfärg, färgen i fokus som står ut från övrig grafik. Arbeta då med position och storlek för att leda läsarens ögon genom designen.</P>
    <Grid gutter={100}>
      <GridItem col={1 / 4}>
        <Column>
          <h2>Primär logotyp</h2>
          <LogotypItem src={logotyp} />
          <P>Används mot <strong>färgad</strong> och <strong>vit</strong> bakgrund. Ej mot gul eller gul-tonad.</P>
        </Column>
      </GridItem>
      <GridItem col={1 / 4}>
        <Column>
          <h2>Sekundär logotyp</h2>
          <img src={logotypBlack} alt="Logo" />
          <P>Används vid svart/vitt tryck.</P>
        </Column>
      </GridItem>
    </Grid>
  </Layout>
);

export default Logotyp;
