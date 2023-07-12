/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { GiConverseShoe } from "react-icons/gi";

function SectionHeader({ sectionTitle, showSectionIcon }) {
  return (
    <>
      <Flex align={"center"} gap={3}>
        <Text className="fs-4 mb-0">{sectionTitle}</Text>
        {showSectionIcon && <GiConverseShoe fontSize={"1.75rem"} />}
      </Flex>
    </>
  );
}

export default SectionHeader;
