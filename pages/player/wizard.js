import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Flex,
  SimpleGrid,
  Box,
  Text,
  Stack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Wizard() {
  return (
    <>
      <Flex>
        <Stack>
          <Box my={8}>
            <Text as={"u"} fontWeight={"bold"}>
              Stats priority:
            </Text>
            {"   "}
            <Text>
              Int <ChevronRightIcon /> crit <ChevronRightIcon /> endu{" "}
            </Text>
          </Box>{" "}
          <SimpleGrid columns={3} spacing={10}>
            <Card maxW="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/Player/Wizard/basicSpellMini.png"
                  alt="basic spell mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading>Basic Spell</Heading>
                  <Text mx={"auto"}>Require level 1</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/Player/Wizard/basicSpell.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            <Card maxW="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/Player/Wizard/fireBallMini.png"
                  alt="basic spell mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading>Fireball</Heading>
                  <Text mx={"auto"}>Require level 1</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/Player/Wizard/fireBall.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            <Card maxW="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/Player/Wizard/shadowDoomMini.png"
                  alt="basic spell mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading>Shadow Doom</Heading>
                  <Text mx={"auto"}>Require level 5</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/Player/Wizard/shadowDoom.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            <Card maxW="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/Player/Wizard/rejuvenationMini.png"
                  alt="basic spell mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading>Rejunevation</Heading>
                  <Text mx={"auto"}>Require level 10</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/Player/Wizard/rejuvenation.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>{" "}
            <Card maxW="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/Player/Wizard/blessMindMini.png"
                  alt="basic spell mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading>Bless Mind</Heading>
                  <Text mx={"auto"}>Require level 15</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/Player/Wizard/blessMind.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            {/* <Card maxW="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src=" /Player/Wizard/"
                  alt="basic spell mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading>??</Heading>
                  <Text mx={"auto"}>Require level 20</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src=" /Player/Wizard/"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card> */}
          </SimpleGrid>
        </Stack>
      </Flex>
    </>
  );
}
