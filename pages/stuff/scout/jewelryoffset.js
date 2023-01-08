import StuffNavbar from "../../../components/subNavbar/StuffScoutNavbar";
import {
  Flex,
  Grid,
  Text,
  Card,
  CardHeader,
  CardBody,
  Heading,
  VStack,
  Box,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Portal,
} from "@chakra-ui/react";

export default function scoutJewelryOffset(props) {
  const stuff = props.data;

  const jewelryOffSet = stuff[1].JewelryOffSet;

  return (
    <>
      <StuffNavbar />
      <Box align={"center"}>
        <Text as={"u"} fontWeight={"bold"}>
          For more details, click on the image.
        </Text>
      </Box>
      <Flex my={10}>
        {jewelryOffSet.map((set) => {
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
              <CardHeader>
                <Popover>
                  <PopoverTrigger>
                    <Image
                      src={set.stuffPicMini}
                      alt="Stuff Mini Pic"
                      width={65}
                      height={65}
                      borderRadius="lg"
                    />
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent w={600} h={400}>
                      <Image
                        src={set.stuffPic}
                        alt="Stuff Pic"
                        width={600}
                        height={400}
                      />
                    </PopoverContent>
                  </Portal>
                </Popover>
              </CardHeader>
              <CardBody>
                <VStack spacing={12}>
                  <Heading size="md" color={rarityName}>
                    {set.name}
                  </Heading>
                  <Text as={"b"}>
                    {set.rarity} {set.slot}
                  </Text>
                  <Text as={"b"}>Require lvl {set.levelForEquip}</Text>
                </VStack>
                {set.NFT ? (
                  <Image
                    src={"/enjinCoin.png"}
                    width={"40"}
                    height={"40"}
                    className={"mt-3"}
                    alt={"NFT"}
                  />
                ) : (
                  ""
                )}
              </CardBody>
            </Card>
          );
        })}
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  const res = await import(`/data/StuffScout.json`);
  const data = res.data;

  return {
    props: {
      data,
    },
  };
}
