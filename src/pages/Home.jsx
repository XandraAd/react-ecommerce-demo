/* eslint-disable no-unused-vars */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./homeStyles.css"
import ProductCard from "../components/shared/product-cart/ProductCard";
import { Carousel } from "react-responsive-carousel";
import NikeWhite from "../assets/sneaker_images/carouselImages/nik-white.jpg";
import AirJordon from "../assets/sneaker_images/carouselImages/nike-jordan-university-blue.png";
import Adidas from "../assets/sneaker_images/carouselImages/adidas-campus-green.png";
import { Box, Center } from "@chakra-ui/react";

function Home() {
  return (
    <>
      <Center>
        <Box w={{lg: "50vw"}}>
          <Carousel autoPlay infiniteLoop showThumbs={false}>
            <div>
              <img src={Adidas} alt="" />
              <p className="legend">Image 1</p>
            </div>
            <div className="carousel-container">
              <img src={NikeWhite} alt="" />
              <p className="legend">Image 2</p>
            </div>
            <div>
              <img src={AirJordon} alt="showroom display" />
              <p className="legend">Image 3</p>
            </div>
          </Carousel>
        </Box>
      </Center>
      <style>
        {`
            .carousel .carousel-status {
              display: none;
            }
          `}
      </style>
    </>
  );
}

export default Home;
