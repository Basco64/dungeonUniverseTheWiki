import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";

export default function Consumable(props) {
  const selectConsumable = props.selectedConsumable;

  return (
    <>
      <Flex>
        <Box>
          <Heading className="font-bold my-2">
            {selectConsumable.name}{" "}
            <Image
              src={selectConsumable.pic}
              alt="Pic"
              width={75}
              height={75}
              className={"my-4"}
            />
          </Heading>
          <Box>
            <Text mx={2} as={"b"} color={"#fbbf24"} fontSize="xl">
              {selectConsumable.gold}{" "}
            </Text>
            <Text mx={2} as={"b"} color={"#71717a"} fontSize="xl">
              {selectConsumable.silver}{" "}
            </Text>
            <Text mx={2} as={"b"} color={"#b45309"} fontSize="xl">
              {selectConsumable.copper}{" "}
            </Text>
          </Box>
        </Box>
        <Box>
          <Text>{selectConsumable.loot}</Text>
        </Box>
        <Box>
          <Text as={"b"}>Loot on : {selectConsumable.mob}</Text>
          <Link href={selectConsumable.mobLink}>
            <Image
              src={selectConsumable.mobPic}
              alt="Pic"
              width={300}
              height={300}
            />
          </Link>
        </Box>
      </Flex>
    </>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.consumable;
  const res = await import("/data/Consumables.json");
  const data = res.data;

  const selectedConsumable = data.find((consumable) => consumable.id === slug);

  return {
    props: {
      selectedConsumable,
    },
  };
}

export async function getStaticPaths() {
  const res = await import("/data/Consumables.json");
  const data = res.data;
  const paths = data.map((item) => ({
    params: { consumable: item.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
