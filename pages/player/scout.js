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

export default function Scout() {
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
                  src="/player/wizard/basicSpellMini.png"
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
                  src="/player/wizard/basicSpell.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            <Card maxW="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/player/wizard/fireBallMini.png"
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
                  src="/player/wizard/fireBall.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            <Card maxW="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/player/wizard/shadowDoomMini.png"
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
                  src="/player/wizard/shadowDoom.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            <Card maxW="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/player/wizard/rejuvenationMini.png"
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
                  src="/player/wizard/rejuvenation.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>{" "}
            <Card maxW="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/player/wizard/blessMindMini.png"
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
                  src="/player/wizard/blessMind.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            {/* <Card maxW="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/player/wizard/"
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
                  src="/player/wizard/"
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
