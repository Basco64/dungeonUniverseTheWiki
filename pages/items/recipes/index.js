import Link from "next/link";
import Image from "next/image";
import { Box, Text, Flex, Stack, VStack, Heading } from "@chakra-ui/react";

export default function Index(props) {
  const recipes = props.data;

  return (
    <Flex>
      {recipes.map((recipe) => (
        <Stack key={recipe.id} p={6} m={6}>
          <Box>
            <Link href={`/items/recipes/${recipe.id}`}>
              <Image src={recipe.pic} alt="Pic" width={75} height={75} />
            </Link>
          </Box>
          <VStack>
            <Link href={`/items/recipes/${recipe.id}`} className={"pr-4"}>
              <Heading>{recipe.name}</Heading>
              <Box className="flex">
                <Text mx={2} as={"b"} color={"#fbbf24"} fontSize="xl">
                  {recipe.gold}{" "}
                </Text>
                <Text mx={2} as={"b"} color={"#71717a"} fontSize="xl">
                  {recipe.silver}{" "}
                </Text>
                <Text mx={2} as={"b"} color={"#b45309"} fontSize="xl">
                  {recipe.copper}{" "}
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
  const res = await import(`/data/Recipes.json`);
  const data = res.data;

  return {
    props: {
      data,
    },
  };
}
