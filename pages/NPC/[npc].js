import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Flex, Heading, Box, Text, VStack } from "@chakra-ui/react";

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
          {selectNPC.quest && selectNPC.shop ? (
            <Box>
              {questList.map((quest) => (
                <VStack key={quest.id}>
                  <Link href={quest.linkQuest}>
                    <Text fontSize="3xl" as={"b"}>
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
          <Image
            src={selectNPC.picShop}
            alt="Pic"
            width={550}
            height={550}
            className={"p-4"}
          />
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
