import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Flex, Heading, Box, Text, VStack, HStack } from "@chakra-ui/react";

export default function npc(props) {
  const selectNPC = props.selectedNPC;
  const questList = selectNPC.questList;

  return (
    <Flex>
      <Box>
        <VStack>
          <Heading as={"b"} pb={5}>
            {selectNPC.name}
          </Heading>
          <Text>Type : {selectNPC.type}</Text>
          {selectNPC.shop ? (
            <Box pt={8}>
              {questList.map((quest) => (
                <VStack key={quest.id}>
                  <Link href={quest.linkQuest}>
                    <Text fontSize="xl" as={"b"}>
                      {quest.nameQuest}
                    </Text>
                  </Link>
                </VStack>
              ))}
            </Box>
          ) : (
            ""
          )}
        </VStack>
      </Box>
      <Box>
        {selectNPC.shop ? (
          <VStack>
            {" "}
            {selectNPC.shopList.map((item) => (
              <HStack key={item.id}>
                <Link href={item.link}>
                  <Text as={"b"} fontSize={"2xl"} pr={6}>
                    {item.name}
                  </Text>
                  <Text as={"b"}>Price : </Text>
                  <Text as={"b"} color={"#fbbf24"}>
                    {" "}
                    {item.gold}g
                  </Text>
                  <Text as={"b"} color={"#71717a"}>
                    {" "}
                    {item.silver}s
                  </Text>
                  <Text as={"b"} color={"#b45309"}>
                    {" "}
                    {item.copper}c
                  </Text>
                </Link>
              </HStack>
            ))}
          </VStack>
        ) : (
          <Box>
            {questList.map((quest) => (
              <Box key={quest.id}>
                <Link href={quest.linkQuest}>
                  <Text fontSize="xl" as={"b"}>
                    {quest.nameQuest}
                  </Text>
                </Link>
              </Box>
            ))}
          </Box>
        )}
      </Box>
      <Box>
        <Image src={selectNPC.pic} alt="Pic" width={325} height={500} />
      </Box>
    </Flex>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.npc;
  const res = await import("/data/NPC.json");
  const data = res.data;

  const selectedNPC = data.find((npc) => npc.id === slug);

  return {
    props: {
      selectedNPC,
    },
  };
}

export async function getStaticPaths() {
  const res = await import("/data/NPC.json");
  const data = res.data;
  const paths = data.map((item) => ({
    params: { npc: item.id },
  }));
  return {
    paths,
    fallback: false,
  };
}
