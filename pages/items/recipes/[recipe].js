import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Text,
  Flex,
  Heading,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import ReturnButton from "../../../components/Button/ReturnButton";

export default function recipe(props) {
  const selectRecipe = props.selectedRecipe;

  return (
    <>
      <Box p={5}>
        <Link href={"/items/recipes"}>
          <ReturnButton />
        </Link>
      </Box>
      <Flex>
        <Box>
          <Heading className="font-bold my-2">{selectRecipe.name} </Heading>
          <Box></Box>
        </Box>
      </Flex>
    </>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.recipe;
  const res = await import("/data/Recipes.json");
  const data = res.recipes[0].data;
  const selectedRecipe = data.find((recipe) => recipe.id === slug);

  return {
    props: {
      selectedRecipe,
    },
  };
}

export async function getStaticPaths() {
  const res = await import("/data/Recipes.json");
  const data = res.recipes[0].data;

  const paths = data.map((item) => ({
    params: { recipe: item.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
