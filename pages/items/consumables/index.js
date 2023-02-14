import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Text,
  Flex,
  Stack,
  VStack,
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Portal,
  Grid,
} from "@chakra-ui/react";

export default function Index(props) {
  const consumables = props.data;

  return (
    <>
      <Box align={"center"}>
        <Text as={"u"} fontWeight={"bold"}>
          For more details, click on the image.
        </Text>
      </Box>
      <Flex justify={"center"}>
        {consumables.map((consumable) => (
          <Stack key={consumable.id} p={6} m={6}>
            <Popover>
              <Box>
                <PopoverTrigger>
                  <Image
                    src={consumable.pic}
                    alt="Pic"
                    width={75}
                    height={75}
                  />
                </PopoverTrigger>
              </Box>
              <VStack align={"center"}>
                <Heading alignContent={"center"}>{consumable.name}</Heading>
                <Box>
                  <Text mx={2} as={"b"}>
                    {consumable.effects}
                  </Text>
                </Box>
              </VStack>
              <Portal>
                <PopoverContent>
                  <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                  { consumable.buyFrom.length > 0 && 
                  <>
                  <Text>Buy from :</Text>
                    {consumable.buyFrom.map((source) => (
                      <Box key={source.id}>
                        <Link href={source.link}>
                            <Text as={"b"} color="green">
                              {source.name}
                            </Text>
                        </Link>
                      </Box>
                    ))} 
                    </>
                  }
                  { consumable.lootOn.length > 0 && 
                  <>
                  <Text>Loot on :</Text>
                    {consumable.lootOn.map((source) => (
                      <Box key={source.id}>
                        <Link href={source.link}>
                            <Text as={"b"} color="red">
                              {source.name}
                            </Text>
                        </Link>
                      </Box>
                    ))} 
                    </>
                    }
                 
                  </Grid>
                </PopoverContent>
              </Portal>
            </Popover>
          </Stack>
        ))}
      </Flex>
    </>
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
