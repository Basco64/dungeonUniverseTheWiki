import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";

export default function junk(props) {
  const selectRecipe = props.selectedRecipe;

  return (
    <>
      <Flex>
        <Box>
          <Heading className="font-bold my-2">
            {selectRecipe.name}{" "}
            <Image
              src={selectRecipe.pic}
              alt="Pic"
              width={75}
              height={75}
              className={"my-4"}
            />
          </Heading>
          <Box>
            <Text mx={2} as={"b"} color={"#fbbf24"} fontSize="xl">
              {selectRecipe.gold}{" "}
            </Text>
            <Text mx={2} as={"b"} color={"#71717a"} fontSize="xl">
              {selectRecipe.silver}{" "}
            </Text>
            <Text mx={2} as={"b"} color={"#b45309"} fontSize="xl">
              {selectRecipe.copper}{" "}
            </Text>
          </Box>
        </Box>
        <Box>
          <Text>{selectRecipe.loot}</Text>
        </Box>
        <Box>
          <Text as={"b"}>Loot on : {selectRecipe.mob}</Text>
          <Link href={selectRecipe.mobLink}>
            <Image
              src={selectRecipe.mobPic}
              alt="Pic"
              width={300}
              height={300}
            />
          </Link>
        </Box>
      </Flex>
    </>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.recipe;
  const res = await import("/data/Junks.json");
  const data = res.data;

  const selectedRecipe = data.find((recipe) => recipe.id === slug);

  return {
    props: {
      selectedRecipe,
    },
  };
}

export async function getStaticPaths() {
  const res = await import("/data/Recipes.json");
  const data = res.data;
  const paths = data.map((item) => ({
    params: { recipe: item.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
