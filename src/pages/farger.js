import React from "react";
import Layout from "../components/layout";
import { Grid, GridItem } from "styled-grid-responsive";
import PrimaryColor from "../components/Colors/PrimaryColor";
import SecondaryColor from "../components/Colors/SecondaryColor";


const Colors = () => (
  <Layout>
    <h1>Färger</h1>
    <Grid gutter={100}>
      <GridItem col={1 / 4}>
        <PrimaryColor heading="Supernova" color="#FECC02" />
      </GridItem>
      <GridItem col={1 / 4}>
        <PrimaryColor heading="Black" color="#000000" />
      </GridItem>
      <GridItem col={1 / 4}>
        <PrimaryColor heading="White" color="#ffffff" />
      </GridItem>
    </Grid>
    <Grid gutter={100}>
      <GridItem col={1 / 4}>
        <SecondaryColor heading="Coral red" color="#FE4A4A" />
      </GridItem>
      <GridItem col={1 / 4}>
        <SecondaryColor heading="Cerulean" color="#01B3FE" />
      </GridItem>
      <GridItem col={1 / 4}>
        <SecondaryColor heading="Lilac" color="#464696" />
      </GridItem>
      <GridItem col={1 / 4}>
        <SecondaryColor heading="Sea Green" color="#006A2D" />
      </GridItem>
    </Grid>
  </Layout>
);

export default Colors;
