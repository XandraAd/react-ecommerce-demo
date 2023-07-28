/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Card, CardBody, CardFooter, Image, Text } from "@chakra-ui/react";
import React from "react";

function ProductCard({
  oldPrice,
  newPrice,
  shoeDescription,
  shoeBrand,
  showCardFooter = true,
  imgSrc,
  imgHeight,
  showBorderRadius,
  showBrandText,
  cardWidth,
  baseCardWidth,
  objectPosition,
  shoeDetail,
  showHoverBorder,
  showBorder,
  imgBoxMargin,
  showTransform,
  objectFit,
  showPrice,
  topLeftPrice
}) {
  return (
    <>
      <Card
        shadow={"none"}
        _hover={{
          cursor: "pointer",
          border: showHoverBorder ? "2px solid #ff7d1a6b" : "none",
          transform: showTransform ? "translateY(-1rem)" : "none",
        }}
        borderRadius={showBorderRadius ? "2rem" : "none"}
        border={showBorder ? "2px solid transparent" : "none"}
        overflow={"hidden"}
        position="relative"
        marginBlock="3rem"
        width={{ base: baseCardWidth, md: cardWidth }}
        transition="all 250ms ease-in-out"
        color="blackAlpha.700"
      >
        <CardBody p={0}>
          <Box height={imgHeight} w="full" mb={imgBoxMargin}>
            <Image
              src={imgSrc}
              alt="/"
              w="full"
              h="full"
              objectFit={objectFit}
              objectPosition={objectPosition}
            />
            {showPrice && <Text position="absolute" top="1rem" right="1rem" fontSize="sm">{topLeftPrice}</Text>}
          </Box>
          {showBrandText && (
            <>
              <Box
                position="absolute"
                bottom="0"
                w="full"
                height="4rem"
                mb="3"
                px="5"
                fontSize="sm"
              >
                <span className="text-orange">{shoeBrand}</span>
                <br />
                <span>{shoeDetail}</span>
              </Box>
            </>
          )}
        </CardBody>
        {showCardFooter && (
          <CardFooter pl={4} pb={0} className="d-block">
            <div className=" d-flex gap-2 fw-bold">
              <Text fontSize={"md"} mb={0}>
                {newPrice}
              </Text>
              <Text
                fontSize={"sm"}
                className=" align-self-center text-decoration-line-through text-grey-30"
                mb={0}
              >
                {oldPrice}
              </Text>
            </div>
            <Text className="text-grey-50 mt-1" fontSize={"sm"}>
              {shoeDescription}
            </Text>
          </CardFooter>
        )}
      </Card>
    </>
  );
}

export default ProductCard;
