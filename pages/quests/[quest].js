import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Flex,
  Box,
  Text,
  Heading,
  VStack,
  Stack,
  HStack,
} from "@chakra-ui/react";

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
      <HStack>
        <Box p={4} m={5} w={"50%"}>
          {result}
          <Text m={5}>{selectQuest.objectif}</Text>
          <Box>
            <Text as={"u"} fontWeight="bold" m={5}>
              Description:
            </Text>
            {selectQuest.description}
          </Box>
        </Box>
        <Box m={5} w={"30%"}>
          Reward :
        </Box>
      </HStack>
      <VStack w={"20%"}>
        <Box fontWeight="bold" fontSize={"xl"}>
          <Text>Pick up at : </Text>
          <Link href={selectQuest.getterLink}  as='u'>
            <Text as={"u"}>
                {selectQuest.getter}
              </Text>
          </Link>
        </Box>
        <Box fontWeight="bold" fontSize={"xl"}>
          <Text>Return to : </Text>
          <Link href={selectQuest.setterLink}>
            <Text as={"u"}>
              {selectQuest.setter}
            </Text>
          </Link>
        </Box>
      </VStack>
    </Flex>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.quest;
  const res = await import("/data/Quests.json");
  const data = res.data;

  const selectedQuest = data.find((quest) => quest.id === slug);

  return {
    props: {
      selectedQuest,
    },
  };
}

export async function getStaticPaths() {
  const res = await import("/data/Quests.json");
  const data = res.data;
  const paths = data.map((item) => ({
    params: { quest: item.id },
  }));
  return {
    paths,
    fallback: false,
  };
}
