import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Text,
  Flex,
  Heading,
  VStack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import ReturnButton from "../../../components/Button/ReturnButton";

export default function material(props) {
  const selectMaterial = props.selectedMaterial;

  return (
    <>
      <Box p={5}>
        <Link href={"/items/materials"}>
          <ReturnButton />
        </Link>
      </Box>
      <Flex>
        <Box>
          <Heading className="font-bold my-2">
            {selectMaterial.name}{" "}
            <Image
              src={selectMaterial.pic}
              alt="Pic"
              width={75}
              height={75}
              className={"my-4"}
            />
          </Heading>
        </Box>
        <Box>
          <Text as={"b"}>Use in : {selectMaterial.useIn}</Text>
        </Box>
        <Box>
          <Text as={"b"}>Source : {selectMaterial.source}</Text>
        </Box>
        <Box>
          {selectMaterial.lootOnMob ? (
            <Box>
              <Text fontSize="xl" as={"b"}>
                Loot On :
              </Text>
              {selectMaterial.mobList.map((mob) => (
                <Box key={mob.id}>
                  <Link href={mob.link}>
                    <Text fontSize="xl" as={"b"}>
                      {mob.name}
                    </Text>
                  </Link>
                </Box>
              ))}
            </Box>
          ) : (
            ""
          )}
        </Box>
        <Box>
          {selectMaterial.gather ? (
            <Image
              src={selectMaterial.spotPic}
              width={300}
              height={300}
              alt={"spot pic"}
            />
          ) : (
            ""
          )}
        </Box>
      </Flex>
    </>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.material;
  const res = await import("/data/CraftingMaterials.json");
  const data = res.data;

  const selectedMaterial = data.find((material) => material.id === slug);

  return {
    props: {
      selectedMaterial,
    },
  };
}

export async function getStaticPaths() {
  const res = await import("/data/CraftingMaterials.json");
  const data = res.data;
  const paths = data.map((item) => ({
    params: { material: item.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
