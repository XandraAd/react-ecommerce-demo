/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Container } from "@chakra-ui/react";
import ProductCard from "../components/shared/product-cart/ProductCard";
import SectionHeader from "./shared/section-header/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import shoeData from "./shoeData";


const Brands = () => {
  return (
    <>
      <Box mt={12} className="position-relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 2.25,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 2.75,
            },
            1300: {
              slidesPerView: 4.25,
              spaceBetween: 60
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: -60
            }
          }}
          className="mySwiper customNavigationTarget pt-5 px-5"
        >
          <div className="popular-brands-header">
            <SectionHeader
              sectionTitle={"Popular Brands"}
            />
          </div>
          {/* Remember to use map function to make code cleaner and more dynamic */}
          {shoeData.map((shoe)=> (
            <SwiperSlide key={shoe.id}>
            <ProductCard
              imgSrc={shoe.brandSrc}
              showBrandText={true}
              shoeBrand={shoe.shoeBrand}
              cardWidth={"19rem"}
              shoeDetail={shoe.shoeDetail}
              showHoverBorder
              showBorder
              showBorderRadius
              imgBoxMargin={5}
            />
          </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default Brands;
