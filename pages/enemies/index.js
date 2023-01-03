import Link from "next/link";
import { Grid, Box, Text } from "@chakra-ui/react";

export default function Index(props) {
  const enemies = props.data;

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {enemies.map((enemie) => (
          <Box key={enemie.id}>
            <Link href={`/enemies/${enemie.id}`}>
              {enemie.boss ? (
                <Text as={"b"} color="#dc2626" fontSize="xl">
                  {enemie.name}
                </Text>
              ) : (
                <Text as={"b"} fontSize="xl">
                  {enemie.name}
                </Text>
              )}
            </Link>
          </Box>
        ))}
      </Grid>
    </>
  );
}

export async function getStaticProps() {
  const res = await import(`/data/DungeonUniverseDatabase.json`);
  const data = res.DungeonUniverseDatabase[0].data;

  return {
    props: {
      data,
    },
  };
}
