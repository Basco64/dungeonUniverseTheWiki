import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";

export default function junk(props) {
  const selectJunk = props.selectedJunk;
  return (
    <>
      <Flex>
        <Box>
          <Heading className="font-bold my-2">
            {selectJunk.name}{" "}
            <Image
              src={selectJunk.pic}
              alt="Pic"
              width={75}
              height={75}
              className={"my-4"}
            />
          </Heading>
          <Box>
            <Text mx={2} as={"b"} color={"#fbbf24"} fontSize="xl">
              {selectJunk.gold}{" "}
            </Text>
            <Text mx={2} as={"b"} color={"#71717a"} fontSize="xl">
              {selectJunk.silver}{" "}
            </Text>
            <Text mx={2} as={"b"} color={"#b45309"} fontSize="xl">
              {selectJunk.copper}{" "}
            </Text>
          </Box>
        </Box>
        <Box>
          <Text>{selectJunk.loot}</Text>
        </Box>
        <Box>
          <Text as={"b"}>Loot on : {selectJunk.mob}</Text>
          <Link href={selectJunk.mobLink}>
            <Image src={selectJunk.mobPic} alt="Pic" width={300} height={300} />
          </Link>
        </Box>
      </Flex>
    </>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.junk;
  const res = await import("/data/DungeonUniverseDatabase.json");
  const data = res.DungeonUniverseDatabase[3].data;

  const selectedJunk = data.find((junk) => junk.id === slug);

  return {
    props: {
      selectedJunk,
    },
  };
}

export async function getStaticPaths() {
  const res = await import("/data/DungeonUniverseDatabase.json");
  const data = res.DungeonUniverseDatabase[3].data;
  const paths = data.map((item) => ({
    params: { junk: item.id },
  }));
  return {
    paths,
    fallback: false,
  };
}
