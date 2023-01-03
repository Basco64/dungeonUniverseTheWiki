import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Text, Heading } from "@chakra-ui/react";

export default function enemie(props) {
  const selectEnemie = props.selectedEnemie;
  return (
    <>
      <Flex>
        <Box>
          {selectEnemie.boss ? (
            <Heading as={"b"} color="#dc2626">
              {selectEnemie.name}
            </Heading>
          ) : (
            <Heading as={"b"}>{selectEnemie.name}</Heading>
          )}
          <Text fontWeight={"bold"}>Levels : {selectEnemie.levels}</Text>
          <Text fontWeight={"bold"}>Health : {selectEnemie.health}</Text>
        </Box>
        <Box>
          <Text>{selectEnemie.loot}</Text>
        </Box>
        <Box>
          <Image src={selectEnemie.pic} alt="Pic" width={300} height={300} />
        </Box>
      </Flex>
    </>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.enemie;
  const res = await import("/data/Enemies.json");
  const data = res.data;

  const selectedEnemie = data.find((enemie) => enemie.id === slug);

  return {
    props: {
      selectedEnemie,
    },
  };
}

export async function getStaticPaths() {
  const res = await import("/data/Enemies.json");
  const data = res.data;
  const paths = data.map((item) => ({
    params: { enemie: item.id },
  }));
  return {
    paths,
    fallback: false,
  };
}
