/* eslint-disable no-unused-vars */
import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import ProductCard from "../components/shared/product-cart/ProductCard";
import Nike from "../assets/sneaker_images/brands/nike-dunk-low-fog-grey.png";
import Converse from "../assets/sneaker_images/brands/converse-chunk-white.png";
import Vans from "../assets/sneaker_images/brands/vans-old-skool-black.png";
import NewBalance from "../assets/sneaker_images/brands/newbalance_retro.png";
const Brands = () => {
  return (
    <>
      <Grid templateColumns={{ base: "1fr", lg: "repeat(4, 1fr)" }} gap={4}>
        <GridItem>
          <ProductCard imgSrc={Nike} showBrandText={true} shoeBrand={"Nike"} />
        </GridItem>
        <GridItem>
          <ProductCard
            imgSrc={Converse}
            showBrandText={true}
            shoeBrand={"Converse"}
          />
        </GridItem>
        <GridItem>
          <ProductCard
            imgSrc={NewBalance}
            showBrandText={true}
            shoeBrand={"NewBalance"}
          
          />
        </GridItem>
        <GridItem>
          <ProductCard imgSrc={Vans} showBrandText={true} shoeBrand={"Vans"} />
        </GridItem>
      </Grid>
    </>
  );
};

export default Brands;
