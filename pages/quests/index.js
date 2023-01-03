import Link from "next/link";
import { Grid, Box, Text } from "@chakra-ui/react";

export default function Index(props) {
  const quests = props.data;

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {quests.map((quest) => {
        let result;
        if (quest.main) {
          result = (
            <Text as={"b"} fontSize="xl" color="#eab308">
              {quest.name}
            </Text>
          );
        } else if (quest.repeat) {
          result = (
            <Text as={"b"} fontSize="xl" color="#0ea5e9">
              {quest.name}
            </Text>
          );
        } else {
          result = (
            <Text as={"b"} fontSize="xl">
              {quest.name}
            </Text>
          );
        }

        return (
          <Box key={quest.id} py={2}>
            <Link href={`/quests/${quest.id}`}>{result}</Link>
          </Box>
        );
      })}
    </Grid>
  );
}

export async function getStaticProps() {
  const res = await import(`/data/DungeonUniverseDatabase.json`);
  const data = res.DungeonUniverseDatabase[1].data;

  return {
    props: {
      data,
    },
  };
}
