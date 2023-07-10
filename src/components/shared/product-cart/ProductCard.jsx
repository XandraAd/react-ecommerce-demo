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
  brandIcon,
  imgSrc,
  imgWidth,
  imgHeight,
  showBorderRadius,
  showBrandText,
}) {
  return (
    <>
      <Card
        shadow={"lg"}
        _hover={{ cursor: "pointer" }}
        ml={5}
        borderRadius={showBorderRadius ? "xl" : "none"}
        overflow={"hidden"}
        width={imgWidth}
      >
        <CardBody p={0} position="relative">
          <Box height={imgHeight}>
            <Image src={imgSrc} alt="/" w="full" h="full" objectFit="cover" />
          </Box>
          {showBrandText && (
            <Text
              position="absolute"
              top={"45%"}
              w="full"
              py={2}
              color={"whiteAlpha.900"}
              fontSize={"xl"}
              boxShadow={"xl"}
              backgroundColor="rgba(150, 150, 150, 0.365)"
              gap={2}
              style={{
                backdropFilter: "blur(5px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {brandIcon}
              {shoeBrand}
            </Text>
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
