import Link from "next/link";
import Image from "next/image";
import { Box, Text, Flex, Stack, VStack, Heading } from "@chakra-ui/react";

export default function Index(props) {
  const materials = props.data;

  return (
    <Flex>
      {materials.map((material) => (
        <Stack key={material.id} p={6} m={6}>
          <Box>
            <Link href={`/items/materials/${material.id}`}>
              <Image src={material.pic} alt="Pic" width={75} height={75} />
            </Link>
          </Box>
          <VStack>
            <Link href={`/items/materials/${material.id}`} className={"pr-4"}>
              <Heading>{material.name}</Heading>
            </Link>
          </VStack>
        </Stack>
      ))}
    </Flex>
  );
}

export async function getStaticProps() {
  const res = await import(`/data/CraftingMaterials.json`);
  const data = res.data;

  return {
    props: {
      data,
    },
  };
}
