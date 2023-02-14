import Image from "next/image";
import Link from "next/link";
import {
  Flex,
  Box,
  Text,
  Heading,
  VStack,
  StackDivider,
  HStack,
} from "@chakra-ui/react";

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
          <Text fontWeight={"bold"} py={6}>
            Levels : {selectEnemie.levels}
          </Text>
          <Text fontWeight={"bold"}>Health : {selectEnemie.health}</Text>
        </Box>
        <Box>
          <VStack>
            <Box>
              <Heading pb={5}>Loot</Heading>
            </Box>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={2}
              align="stretch"
            >
              {selectEnemie.loot.map((loot) => (
                <Box key={loot.id}>
                      <Link href={loot.link}>
                    <HStack key={loot.id}>
                      <Box>
                        <Image
                            src={loot.miniPic}
                            width={65}
                            height={65}
                            alt="miniPic"
                          />
                          </Box>
                          <Box>
                          <Text as={"b"} p={3}>
                            {loot.name}
                          </Text>
                          </Box>
                    </HStack>
                      </Link>
                </Box>
              ))}
            </VStack>
          </VStack>
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
