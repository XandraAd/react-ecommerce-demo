/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Container } from "@chakra-ui/react";
import ProductCard from "../components/shared/product-cart/ProductCard";
import SectionHeader from "./shared/section-header/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper";
import shoeData from "./shoeData";


const Brands = () => {
  return (
    <>
      <Box mt={5} className="position-relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          navigation={true}
          modules={[Mousewheel, Navigation]}
          mousewheel= {{forceToAxis: true}}
          breakpoints={{
            768: {
              slidesPerView: 2.25,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 200,
              
            },

            1240: {
              slidesPerView: 4.5
            },

            1440: {
              slidesPerView: 4.25,
              spaceBetween: -70
            },
            1500: {
              slidesPerView: 5,
              spaceBetween: -20
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
              cardWidth={"14.5rem"}
              imgHeight={"16rem"}
              shoeDetail={shoe.shoeDetail}
              showHoverBorder
              showBorder
              objectFit={"contain"}
              showPrice={true}
              showShadow={true}
            />
          </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default Brands;
