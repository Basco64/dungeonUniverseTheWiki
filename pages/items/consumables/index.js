import Image from "next/image";
import { Box, Text, Flex, Stack, VStack, Heading } from "@chakra-ui/react";

export default function Index(props) {
  const consumables = props.data;

  return (
    <Flex justify={"center"}>
      {consumables.map((consumable) => (
        <Stack key={consumable.id} p={6} m={6}>
          <Box>
            <Image src={consumable.pic} alt="Pic" width={75} height={75} />
          </Box>
          <VStack align={"center"}>
            <Heading alignContent={"center"}>{consumable.name}</Heading>
            <VStack className="flex">
              <Text mx={2} as={"b"}>
                {consumable.effects}
              </Text>
              <Text mx={2} as={"b"}>
                {consumable.source}
              </Text>
            </VStack>
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
