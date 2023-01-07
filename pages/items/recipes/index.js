import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Text,
  Flex,
  Stack,
  VStack,
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
                        <Image
                          src={recipe.RecipePic}
                          alt="Pic"
                          width={600}
                          height={395}
                        />
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
                        <Image
                          src={recipe.RecipePic}
                          alt="Pic"
                          width={600}
                          height={395}
                        />
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
                        <Image
                          src={recipe.RecipePic}
                          alt="Pic"
                          width={600}
                          height={395}
                        />
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
