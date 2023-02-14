import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      w="full"
      as="footer"
      flexDir={"row"}
      py={"4"}
      mt={10}
      bg="#303030"
      color="white"
      align="center"
      justify="center"
    >
      <Text>
        This site is under construction, if you want add data or see
        wrong data, please contact Basco#6472 on Discord.
      </Text>
    </Flex>
  );
}
