import React from "react";
import Layout from "../components/layout";
import { P, H1, H2 } from "../components/Typography/Typography";
import { Grid, GridItem } from "styled-grid-responsive";

const IndexPage = () => (
  <Layout>
    <Grid>
      <GridItem col={1}>
        <H1>Grafisk profil</H1>
        <P>
          Vi vill kommunicera en enhetlig bild av Pepp. Pepps grafiska profil
          finns till för att det ska vara lätt att skapa grafiskt material och
          för att materialet som skapas inte ska skilja sig beroende av vem det
          är som skapat det. Pepps varumärke ska upplevas vara detsamma, oavsett
          stad och år.
        </P>

        <H2>Kort historik om Pepps grafiska profil</H2>
        <P>
          Pepps grafiska profil har alltid strävat efter att vara färgglad och
          peppande. Den gula loggan som står i centrum har varit med sedan
          starten då den grafiska profilen bestod av många färger som kunde
          kombineras i olika mönster. Hösten 2016 ersattes färgerna med en ny
          uppsättning mer moderna och starka färger som används än idag. I samma
          veva försvann mönster från den grafiska profilen, utropstecknet togs
          bort från logotypen och typsnittet Caviar Dreams ersattes med det mer
          moderna Raleway. Med den här utvecklingen av den grafiska profilen
          började vi lägga mer fokus på att använda bilder i vår kommunikation
          och övertoningen introducerades.
        </P>
      </GridItem>
    </Grid>
  </Layout>
);

export default IndexPage;
