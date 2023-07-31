/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { GiConverseShoe } from "react-icons/gi";

function SectionHeader({ sectionTitle }) {
  return (
    <>
      <Box>
        <Text className="fs-1 mb-0 text-black-50 ps-5">{sectionTitle}</Text>
      </Box>
    </>
  );
}

export default SectionHeader;
