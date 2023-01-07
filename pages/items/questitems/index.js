import Link from "next/link";
import Image from "next/image";
import { Box, Text, Flex, Stack, VStack, Heading } from "@chakra-ui/react";

export default function Index(props) {
  const consumables = props.data;

  return (
    <Flex>
      {consumables.map((consumable) => (
        <Stack key={consumable.id} p={6} m={6}>
          <Box>
            <Link href={`/items/consumables/${consumable.id}`}>
              <Image src={consumable.pic} alt="Pic" width={75} height={75} />
            </Link>
          </Box>
          <VStack>
            <Link
              href={`/items/consumables/${consumable.id}`}
              className={"pr-4"}
            >
              <Heading>{consumable.name}</Heading>
              <Box className="flex">
                <Text mx={2} as={"b"} color={"#fbbf24"} fontSize="xl">
                  {consumable.gold}{" "}
                </Text>
                <Text mx={2} as={"b"} color={"#71717a"} fontSize="xl">
                  {consumable.silver}{" "}
                </Text>
                <Text mx={2} as={"b"} color={"#b45309"} fontSize="xl">
                  {consumable.copper}{" "}
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
  const res = await import(`/data/Consumables.json`);
  const data = res.data;

  return {
    props: {
      data,
    },
  };
}
