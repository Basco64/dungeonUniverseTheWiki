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
                            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                              <Text as={"b"}>Loot on :</Text>
                              {recipe.lootOn.map((pnj) => (
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
                            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                              <Text as={"b"}>Loot on :</Text>
                              {recipe.lootOn.map((pnj) => (
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
