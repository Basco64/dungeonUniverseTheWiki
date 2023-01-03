import Link from "next/link";
import { Box, Text, Flex, Heading, Grid } from "@chakra-ui/react";

export default function Index(props) {
  const NPCs = props.data;

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {NPCs.map((npc) => (
        <Box key={npc.id}>
          <Link href={`/NPC/${npc.id}`}>
            <Text as={"b"} fontSize="xl" className="font-bold">
              {npc.name}
            </Text>
          </Link>
        </Box>
      ))}
    </Grid>
  );
}

export async function getStaticProps() {
  const res = await import(`/data/DungeonUniverseDatabase.json`);
  const data = res.DungeonUniverseDatabase[2].data;

  return {
    props: {
      data,
    },
  };
}
