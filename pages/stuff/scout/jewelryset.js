import StuffNavbar from "../../../components/subNavbar/StuffScoutNavbar";
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

export default function scoutJewelryset(props) {
  const jewelrySet = props.data;

  return (
    <>
      <StuffNavbar />

      <Flex my={10}>
        {jewelrySet.map((set) => {
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
              <CardHeader align={"center"}>
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
                          src={set.neckPicMini}
                          alt="Stuff Mini Pic"
                          width={65}
                          height={65}
                          borderRadius="lg"
                        />
                      </PopoverTrigger>
                      <Text>{set.neck}</Text>
                      <Portal>
                        <PopoverContent w={605} h={620}>
                          <Image
                            src={set.neckPic}
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
                          src={set.ringPicMini}
                          alt="Stuff Mini Pic"
                          width={65}
                          height={65}
                          borderRadius="lg"
                        />
                      </PopoverTrigger>
                      <Text>{set.ring}</Text>
                      <Portal>
                        <PopoverContent w={605} h={620}>
                          <Image
                            src={set.ringPic}
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
                          src={set.earringPicMini}
                          alt="Stuff Mini Pic"
                          width={65}
                          height={65}
                          borderRadius="lg"
                        />
                      </PopoverTrigger>
                      <Text>{set.earring}</Text>
                      <Portal>
                        <PopoverContent w={605} h={620}>
                          <Image
                            src={set.earringPic}
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
                  width={610}
                  height={115}
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
  const res = await import(`/data/StuffScout.json`);
  const data = res.data[3].JewelrySet;

  return {
    props: {
      data,
    },
  };
}
