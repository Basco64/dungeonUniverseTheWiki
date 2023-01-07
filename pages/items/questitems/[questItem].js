import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Text,
  Flex,
  Heading,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import ReturnButton from "../../../components/Button/ReturnButton";

export default function questItem(props) {
  const selectItem = props.selectedItem;

  return (
    <>
      <Box p={5}>
        <Link href={"/items/questitems"}>
          <ReturnButton />
        </Link>
      </Box>
      <Flex>
        <Box>
          <Heading className="font-bold my-2">
            {selectItem.name}{" "}
            <Image
              src={selectItem.pic}
              alt="Pic"
              width={75}
              height={75}
              className={"my-4"}
            />
          </Heading>
          <Box>
            <Text mx={2} as={"b"} color={"#fbbf24"} fontSize="xl">
              {selectItem.gold}{" "}
            </Text>
            <Text mx={2} as={"b"} color={"#71717a"} fontSize="xl">
              {selectItem.silver}{" "}
            </Text>
            <Text mx={2} as={"b"} color={"#b45309"} fontSize="xl">
              {selectItem.copper}{" "}
            </Text>
          </Box>
        </Box>
        <Box>
          <Text>{selectItem.loot}</Text>
        </Box>
        <Box>
          <Text as={"b"}>Loot on : {selectItem.mob}</Text>
          <Link href={selectItem.mobLink}>
            <Image src={selectItem.mobPic} alt="Pic" width={300} height={300} />
          </Link>
        </Box>
      </Flex>
    </>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.questItem;
  const res = await import("/data/QuestItems.json");
  const data = res.data;

  const selectedItem = data.find((item) => item.id === slug);

  return {
    props: {
      selectedItem,
    },
  };
}

export async function getStaticPaths() {
  const res = await import("/data/QuestItems.json");
  const data = res.data;
  const paths = data.map((item) => ({
    params: { questItem: item.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
