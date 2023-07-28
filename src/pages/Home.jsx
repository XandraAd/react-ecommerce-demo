/* eslint-disable no-unused-vars */
import React from "react";
import CarouselSection from "../components/carousel/CarouselSection";
import Brands from "../components/Brands";
import NewArrivals from "../components/NewArrivals";

function Home() {
  return (
    <>
      <CarouselSection />
      <NewArrivals/>
      <Brands />
    </>
  );
}

export default Home;
