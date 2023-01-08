import StuffNavbar from "../../../components/subNavbar/StuffFighterNavbar";
import {
  Flex,
  Grid,
  Box,
  Text,
  Stack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  StackDivider,
  HStack,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Portal,
} from "@chakra-ui/react";

export default function fighterArmorset(props) {
  const stuff = props.data;

  const armorSet = stuff[2].ArmorSet;

  return (
    <>
      <StuffNavbar />
      <Box align={"center"}>
        <Text as={"u"} fontWeight={"bold"}>
          For more details, click on the image.
        </Text>
      </Box>
      <Flex my={10}>
        {armorSet.map((set) => {
          let rarityShadow;
          let rarityName;
          if (set.rarity === "Uncommon") {
            rarityShadow =
              "0px 1px 25px -5px rgb( 34 197 94 / 48%), 0 9px 8px -5px rgb( 34 197 94 / 43%)";
            rarityName = "#22c55e";
          } else if (set.rarity === "Common") {
            rarityShadow =
              "0px 1px 25px -5px rgb( 38 38 38 / 48%), 0 9px 8px -5px rgb(  38 38 38 / 43%)";
          } else {
            rarityShadow = "";
          }
          return (
            <Card
              maxWidth="md"
              variant="outline"
              key={set.id}
              boxShadow={rarityShadow}
            >
              <CardHeader align="center">
                <Heading size="md" color={rarityName}>
                  {set.name}
                </Heading>
                <Text>Full set require lvl {set.levelForEquip}</Text>
              </CardHeader>
              <CardBody align={"center"}>
                <Stack divider={<StackDivider />} spacing="2">
                  <HStack spacing={12}>
                    <Popover>
                      <PopoverTrigger>
                        <Image
                          src={set.headPicMini}
                          alt="Stuff Mini Pic"
                          width={65}
                          height={65}
                          borderRadius="lg"
                        />
                      </PopoverTrigger>
                      <Text>{set.head}</Text>
                      <Portal>
                        <PopoverContent w={605} h={620}>
                          <Image
                            src={set.headPic}
                            alt="Stuff Pic"
                            width={605}
                            height={620}
                          />
                        </PopoverContent>
                      </Portal>
                    </Popover>
                  </HStack>

                  <HStack spacing={12}>
                    <Popover>
                      <PopoverTrigger>
                        <Image
                          src={set.shouldersPicMini}
                          alt="Stuff Mini Pic"
                          width={65}
                          height={65}
                          borderRadius="lg"
                        />
                      </PopoverTrigger>
                      <Text>{set.shoulders}</Text>
                      <Portal>
                        <PopoverContent w={605} h={620}>
                          <Image
                            src={set.shouldersPic}
                            alt="Stuff Pic"
                            width={605}
                            height={620}
                          />
                        </PopoverContent>
                      </Portal>
                    </Popover>
                  </HStack>

                  <HStack spacing={12}>
                    <Popover>
                      <PopoverTrigger>
                        <Image
                          src={set.chestPicMini}
                          alt="Stuff Mini Pic"
                          width={65}
                          height={65}
                          borderRadius="lg"
                        />
                      </PopoverTrigger>
                      <Text>{set.chest}</Text>
                      <Portal>
                        <PopoverContent w={605} h={620}>
                          <Image
                            src={set.chestPic}
                            alt="Stuff Pic"
                            width={605}
                            height={620}
                          />
                        </PopoverContent>
                      </Portal>
                    </Popover>
                  </HStack>

                  <HStack spacing={12}>
                    <Popover>
                      <PopoverTrigger>
                        <Image
                          src={set.glovesPicMini}
                          alt="Stuff Mini Pic"
                          width={65}
                          height={65}
                          borderRadius="lg"
                        />
                      </PopoverTrigger>
                      <Text>{set.gloves}</Text>
                      <Portal>
                        <PopoverContent w={605} h={620}>
                          <Image
                            src={set.glovesPic}
                            alt="Stuff Pic"
                            width={605}
                            height={620}
                          />
                        </PopoverContent>
                      </Portal>
                    </Popover>
                  </HStack>

                  <HStack spacing={12}>
                    <Popover>
                      <PopoverTrigger>
                        <Image
                          src={set.legsPicMini}
                          alt="Stuff Mini Pic"
                          width={65}
                          height={65}
                          borderRadius="lg"
                        />
                      </PopoverTrigger>
                      <Text>{set.legs}</Text>
                      <Portal>
                        <PopoverContent w={605} h={620}>
                          <Image
                            src={set.legsPic}
                            alt="Stuff Pic"
                            width={605}
                            height={620}
                          />
                        </PopoverContent>
                      </Portal>
                    </Popover>
                  </HStack>

                  <HStack spacing={12}>
                    <Popover>
                      <PopoverTrigger>
                        <Image
                          src={set.feetPicMini}
                          alt="Stuff Mini Pic"
                          width={65}
                          height={65}
                          borderRadius="lg"
                        />
                      </PopoverTrigger>
                      <Text>{set.feet}</Text>
                      <Portal>
                        <PopoverContent w={605} h={620}>
                          <Image
                            src={set.feetPic}
                            alt="Stuff Pic"
                            width={605}
                            height={620}
                          />
                        </PopoverContent>
                      </Portal>
                    </Popover>
                  </HStack>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src={set.setPic}
                  width={605}
                  height={190}
                  className={"mt-3 "}
                  alt={"Pic"}
                />
              </CardFooter>
            </Card>
          );
        })}
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  const res = await import(`/data/StuffFighter.json`);
  const data = res.data;

  return {
    props: {
      data,
    },
  };
}
