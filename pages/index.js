import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "../components/layout/Layout";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box align="center">
      <Heading as="h1" csize="3xl">
        A wiki for the NFT game Dungeon Universe.
      </Heading>
      <Text fontSize="2xl" as="b">
        The game is actually in Beta.
      </Text>
      <Image
        src={"/MapBySpitfir3.png"}
        alt="Map by Spitfir3"
        width={1500}
        height={1687}
      />
    </Box>
  );
}
