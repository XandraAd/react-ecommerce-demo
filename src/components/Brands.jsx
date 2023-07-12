/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "@chakra-ui/react";
import ProductCard from "../components/shared/product-cart/ProductCard";
import Nike from "../assets/sneaker_images/brands/nike-dunk-low-fog-grey.png";
import Converse from "../assets/sneaker_images/brands/converse-chunk-white.png";
import Vans from "../assets/sneaker_images/brands/vans-old-skool-black.png";
import SectionHeader from "./shared/section-header/SectionHeader";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from "swiper";
import { SiNike } from "react-icons/si";
import VansLogo from "../assets/vans-3.svg";
import ConverseLogo from "../assets/converse-logo3.svg";


const Brands = () => {
  return (
    <>
      <Container maxW={1240} my={5} className=" position-relative">
        <Swiper
        slidesPerView={5}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper customNavigationTarget py-5"
        >
          <div className="popular-brands-header ms-3">
            <SectionHeader showSectionIcon={true} sectionTitle={"Popular Brands"}/>
          </div>
          <SwiperSlide>
            <ProductCard imgSrc={Nike} showBrandText={true} shoeBrand={"Nike"} brandIcon={<SiNike/>}/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard imgSrc={Converse} showBrandText={true} showBrandImage={true} brandImage={ConverseLogo}/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard imgSrc={Vans} showBrandText={true} showBrandImage={true} brandImage={VansLogo} brandWidth={32}/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard imgSrc={Nike} showBrandText={true} shoeBrand={"Nike"} brandIcon={<SiNike/>}/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard imgSrc={Converse} showBrandText={true} showBrandImage={true} brandImage={ConverseLogo}/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard imgSrc={Vans} showBrandText={true} showBrandImage={true} brandImage={VansLogo} brandWidth={32}/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard imgSrc={Nike} showBrandText={true} shoeBrand={"Nike"} brandIcon={<SiNike/>}/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard imgSrc={Converse} showBrandText={true} showBrandImage={true} brandImage={ConverseLogo}/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard imgSrc={Vans} showBrandText={true} showBrandImage={true} brandImage={VansLogo} brandWidth={32}/>
          </SwiperSlide>
          
        </Swiper>
      </Container>
    </>
  );
};

export default Brands;
