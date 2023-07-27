/* eslint-disable no-unused-vars */
import { Box } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SectionHeader from "./shared/section-header/SectionHeader";
import ProductCard from "./shared/product-cart/ProductCard";
import shoeData from "./shoeData";

const NewArrivals = () => {
  return (
    <>
      <Box mt={20} className="position-relative">
        <Swiper
          slidesPerView={1.25}
          spaceBetween={100}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 1.75,
            },
            1024: {
              slidesPerView: 2.25,
            },
            1300: {
              slidesPerView: 3.25,
            },
          }}
          className="mySwiper customNavigationTarget py-5 px-5"
        >
          <div className="popular-brands-header">
            <SectionHeader sectionTitle={"New Arrivals"} />
          </div>
          {/* Remember to use map function to make code cleaner and more dynamic */}
          {shoeData.map((shoe)=> (
            <SwiperSlide key={shoe.id}>
            <ProductCard
              imgSrc={shoe.arrivalSrc}
              cardWidth={"26rem"}
              baseCardWidth={"78vw"}
              imgHeight={"26rem"}
              showCardFooter={false}
              showBorderRadius
            />
          </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default NewArrivals;
