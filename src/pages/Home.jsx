/* eslint-disable no-unused-vars */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductCard from "../components/shared/product-cart/ProductCard";
import { Carousel } from "react-responsive-carousel";
import NikeWhite from "../assets/sneaker_images/carouselImages/nik-white.jpg";
import AirJordon from "../assets/sneaker_images/carouselImages/nike-jordan-university-blue.png";
import Adidas from "../assets/sneaker_images/carouselImages/adidas-campus-green.png";

function Home() {
  return (
    <>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img src={Adidas} alt="" />
          <p className="legend">Image 1</p>
        </div>
        <div>
          <img src={NikeWhite} alt="" />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <img src={AirJordon} alt="showroom display" />
          <p className="legend">Image 3</p>
        </div>
        <div>
          <img src={NikeWhite} alt="bedroom deco" />
          <p className="legend">Image 4</p>
        </div>
        <div>
          <img src={AirJordon} alt="sofa" />
          <p className="legend">Image 5</p>
        </div>
        <div>
          <img src={Adidas} alt="showroom display" />
          <p className="legend">Image 6</p>
        </div>
      </Carousel>
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
