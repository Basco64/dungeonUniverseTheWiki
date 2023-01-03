import img from "../public/Dungeon-Universe-Banner-Without-bg.png";
import Image from "next/image";
import Head from "next/head";
import { Box, Flex, Text } from "@chakra-ui/react";
import NavBar from "../components/layout/Navbar";

export default function quatreCentQuatre() {
  return (
    <Flex>
      <NavBar />
      <Text as={"b"} size="3xl">
        {" "}
        This page does not exist (yet?)
      </Text>
    </Flex>
  );
}
