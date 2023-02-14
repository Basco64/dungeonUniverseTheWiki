import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Text,
  Flex,
  Stack,
  HStack,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Portal,
  VStack,
} from "@chakra-ui/react";

export default function Index(props) {
  const recipes = props.data;
  const blacksmith = recipes[0].data;
  const JewelRecipe = recipes[1].data;
  const firstAid = recipes[2].data;

  return (
    <>
      <Box align={"center"}>
        <Text as={"u"} fontWeight={"bold"}>
          For more details, click on the image.
        </Text>
      </Box>
      <Flex>
        <Tabs w={"100%"}>
          <TabList>
            <Tab>First Aid</Tab>
            <Tab>Blasmithing</Tab>
            <Tab>Jewelry</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                {firstAid.map((recipe) => (
                  <Stack key={recipe.id} pt={6}>
                    <Popover>
                      <PopoverTrigger>
                        <Image
                          src={recipe.Minipic}
                          alt="Pic"
                          width={75}
                          height={75}
                        />
                      </PopoverTrigger>
                      <Link href={recipe.ItemLink}>
                        <Text as={"u"}>{recipe.name}</Text>
                      </Link>
                      <Portal>
                        <PopoverContent w={600} h={395}>
                          <Box>
                            <Image
                              src={recipe.RecipePic}
                              alt="Pic"
                              width={600}
                              height={395}
                            />
                            <Grid templateColumns="repeat(4, 1fr)" gap={2}>
                            { recipe.lootOn.length > 0 && 
                  <>
                  <Text>Loot on :</Text>
                    {recipe.lootOn.map((source) => (
                      <VStack key={source.id}>
                        <Link href={source.link}>
                            <Text as={"b"} color="red">
                              {source.name}
                            </Text>
                        </Link>
                      </VStack>
                    ))} 
                    </>
                    }
                  { recipe.buyFrom.length > 0 && 
                  <>
                  <Text>Buy from :</Text>
                    {recipe.buyFrom.map((source) => (
                      <VStack key={source.id}>
                        <Link href={source.link}>
                            <Text as={"b"} color="green">
                              {source.name}
                            </Text>
                        </Link>
                      </VStack>
                    ))} 
                    </>
                  }
                            </Grid>
                          </Box>
                        </PopoverContent>
                      </Portal>
                    </Popover>
                  </Stack>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel>
              <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                {blacksmith.map((recipe) => (
                  <Stack key={recipe.id} pt={6}>
                    <Popover>
                      <PopoverTrigger>
                        <Image
                          src={recipe.Minipic}
                          alt="Pic"
                          width={75}
                          height={75}
                        />
                      </PopoverTrigger>
                      <Link href={recipe.ItemLink}>
                        <Text as={"u"}>{recipe.name}</Text>
                      </Link>
                      <Portal>
                        <PopoverContent w={600} h={395}>
                          <Box>
                            <Image
                              src={recipe.RecipePic}
                              alt="Pic"
                              width={600}
                              height={395}
                            />
                            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                              <Text as={"b"}>Loot on :</Text>
                              {recipe.lootOn.map((pnj) => (
                                <Box key={pnj.id}>
                                  <Link href={pnj.link}>
                                    {pnj.NPC ? (
                                      <Text key={pnj.id} color="green" as={"b"}>
                                        {pnj.name}
                                      </Text>
                                    ) : (
                                      <Text key={pnj.id} color="red" as={"b"}>
                                        {pnj.name}
                                      </Text>
                                    )}
                                  </Link>
                                </Box>
                              ))}
                            </Grid>
                          </Box>
                        </PopoverContent>
                      </Portal>
                    </Popover>
                  </Stack>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                {JewelRecipe.map((recipe) => (
                  <Stack key={recipe.id} pt={6}>
                    <Popover>
                      <PopoverTrigger>
                        <Image
                          src={recipe.Minipic}
                          alt="Pic"
                          width={75}
                          height={75}
                        />
                      </PopoverTrigger>
                      <Link href={recipe.ItemLink}>
                        <Text as={"u"}>{recipe.name}</Text>
                      </Link>
                      <Portal>
                        <PopoverContent w={600} h={395}>
                          <Box>
                            <Image
                              src={recipe.RecipePic}
                              alt="Pic"
                              width={600}
                              height={395}
                            />
                              <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                  { recipe.lootOn.length > 0 && 
                  <>
                  <Text>Loot on :</Text>
                    {recipe.lootOn.map((source) => (
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
                  { recipe.buyFrom.length > 0 && 
                  <>
                  <Text>Buy from :</Text>
                    {recipe.buyFrom.map((source) => (
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
                  </Grid>
                          </Box>
                        </PopoverContent>
                      </Portal>
                    </Popover>
                  </Stack>
                ))}
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  const res = await import(`/data/Recipes.json`);
  const data = res.recipes;

  return {
    props: {
      data,
    },
  };
}
