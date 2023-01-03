import StuffNavbar from "../../../components/stuffNavbar/stuffScoutNavbar";
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
} from "@chakra-ui/react";

export default function scoutArmorSet(props) {
  const stuff = props.data;

  const armorSet = stuff[2].ArmorSet;

  return (
    <>
      <StuffNavbar />
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
              maxW="md"
              variant="outline"
              key={set.id}
              boxShadow={rarityShadow}
            >
              <CardHeader>
                <Heading size="md" color={rarityName}>
                  {" "}
                  {set.name}
                </Heading>
              </CardHeader>
              <CardBody>
                <Stack divider={<StackDivider />} spacing="2">
                  <HStack spacing={12}>
                    <Image
                      src={set.headPicMini}
                      alt="Stuff Mini Pic"
                      borderRadius="lg"
                      width={65}
                      height={65}
                    />
                    <Text>{set.head}</Text>
                  </HStack>

                  <HStack spacing={12}>
                    <Image
                      src={set.shouldersPicMini}
                      alt="Stuff Mini Pic"
                      borderRadius="lg"
                      width={65}
                      height={65}
                    />
                    <Text>{set.shoulders}</Text>
                  </HStack>

                  <HStack spacing={12}>
                    <Image
                      src={set.chestPicMini}
                      alt="Stuff Mini Pic"
                      borderRadius="lg"
                      width={65}
                      height={65}
                    />
                    <Text>{set.chest}</Text>
                  </HStack>

                  <HStack spacing={12}>
                    <Image
                      src={set.glovesPicMini}
                      alt="Pic"
                      borderRadius="lg"
                      width={65}
                      height={65}
                    />
                    <Text>{set.gloves}</Text>
                  </HStack>

                  <HStack spacing={12}>
                    <Image
                      src={set.legsPicMini}
                      alt="Pic"
                      borderRadius="lg"
                      width={65}
                      height={65}
                    />
                    <Text>{set.legs}</Text>
                  </HStack>

                  <HStack spacing={12}>
                    <Image
                      src={set.feetPicMini}
                      alt="Pic"
                      borderRadius="lg"
                      width={65}
                      height={65}
                    />
                    <Text>{set.feet}</Text>
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
  const res = await import(`/data/DungeonUniverseDatabase.json`);
  const data = res.DungeonUniverseDatabase[4].data;

  return {
    props: {
      data,
    },
  };
}
