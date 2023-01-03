import Link from "next/link";
import Image from "next/image";
import { Box, Text, Flex, Stack, VStack, Heading } from "@chakra-ui/react";

export default function Index(props) {
  const junks = props.data;

  return (
    <Flex>
      {junks.map((junk) => (
        <Stack key={junk.id} p={6} m={6}>
          <Box>
            <Link href={`/junks/${junk.id}`}>
              <Image src={junk.pic} alt="Pic" width={75} height={75} />
            </Link>
          </Box>
          <VStack>
            <Link href={`/junks/${junk.id}`} className={"pr-4"}>
              <Heading>{junk.name}</Heading>
              <Box className="flex">
                <Text mx={2} as={"b"} color={"#fbbf24"} fontSize="xl">
                  {junk.gold}{" "}
                </Text>
                <Text mx={2} as={"b"} color={"#71717a"} fontSize="xl">
                  {junk.silver}{" "}
                </Text>
                <Text mx={2} as={"b"} color={"#b45309"} fontSize="xl">
                  {junk.copper}{" "}
                </Text>
              </Box>
            </Link>
          </VStack>
        </Stack>
      ))}
    </Flex>
  );
}

export async function getStaticProps() {
  const res = await import(`/data/DungeonUniverseDatabase.json`);
  const data = res.DungeonUniverseDatabase[3].data;

  return {
    props: {
      data,
    },
  };
}
