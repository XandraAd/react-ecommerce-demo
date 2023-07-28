/* eslint-disable no-unused-vars */
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import SectionHeader from "./shared/section-header/SectionHeader";
import { AiOutlineShoppingCart } from "react-icons/ai";

const images = [
  {
    src: "/sneaker_images/men.jpg",
    category: "Men",
    top: "23%",
    left: "3%",
    color: "whiteAlpha.900",
    align: "left"
  },
  {
    src: "/sneaker_images/women.jpg",
    category: "Women",
    top: "15%",
    right: "5%",
    color: "whiteAlpha.900",
  },
  {
    src: "/sneaker_images/kids.jpg",
    category: "Kids",
    top: "5%",
    left: "30%",
  },
  {
    src: "/sneaker_images/sports.jpg",
    category: "Sports",
    top: "10%",
  },
];

function Categories() {
  return (
    <>
      <Box mt={10}>
        <div>
          <SectionHeader sectionTitle={"Top Categories"} />
        </div>
        <Flex ms={10} wrap={"wrap"} gap={2}>
          {images.map((image, index) => (
            <Box w={"48%"} key={index} h={"30rem"} position={"relative"}>
              <Image src={image.src} h={"full"} objectFit={"cover"} />
              <Box
                position={"absolute"}
                top={image.top}
                left={image.left}
                right={image.right}
                textAlign={ image.align}
              >
                <Text fontSize={"5xl"} color={image.color}>
                  {image.category}
                </Text>

                <Button
                  className="align-self-center"
                  px={10}
                  size={"md"}
                  mt={5}
                  w={"full"}
                  backgroundColor={"hsl(26, 100%, 55%)"}
                  color={"hsl(0, 0%, 100%)"}
                  _hover={{
                    backgroundColor: "hsl(26, 100%, 55%)",
                    boxShadow: "lg",
                  }}

                  //   onClick={handleAddtoCart}
                >
                  Shop More
                </Button>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default Categories;
