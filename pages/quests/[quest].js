import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Text, Heading, VStack } from "@chakra-ui/react";

export default function quest(props) {
  const selectQuest = props.selectedQuest;

  let result;
  if (selectQuest.main) {
    result = (
      <Heading as={"b"} color={"#eab308"}>
        {selectQuest.name}
      </Heading>
    );
  } else if (selectQuest.repeat) {
    result = (
      <Heading as={"b"} color={"#0ea5e9"}>
        {selectQuest.name}
      </Heading>
    );
  } else {
    result = <Heading as={"b"}>{selectQuest.name}</Heading>;
  }

  return (
    <Flex>
      <VStack>
        <Box p={4} m={5}>
          {result}
          <Text m={5}>{selectQuest.objectif}</Text>
          <Box>
            <Text as={"u"} fontWeight="bold" m={5}>
              Description:
            </Text>
            {selectQuest.description}
          </Box>
        </Box>
        <Box m={5}>Loot de la quete</Box>
      </VStack>
      <Box>
        <Link href={selectQuest.getterLink}>
          <Image
            src={selectQuest.getterPic}
            alt="Pic"
            width={500}
            height={500}
          />
        </Link>
      </Box>
    </Flex>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.quest;
  const res = await import("/data/DungeonUniverseDatabase.json");
  const data = res.DungeonUniverseDatabase[1].data;

  const selectedQuest = data.find((quest) => quest.id === slug);

  return {
    props: {
      selectedQuest,
    },
  };
}

export async function getStaticPaths() {
  const res = await import("/data/DungeonUniverseDatabase.json");
  const data = res.DungeonUniverseDatabase[1].data;
  const paths = data.map((item) => ({
    params: { quest: item.id },
  }));
  return {
    paths,
    fallback: false,
  };
}
