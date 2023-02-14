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
            <Card maxWidth="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/Player/Wizard/BasicSpellMini.png"
                  alt="basic spell mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3" align={"center"}>
                  <Heading>Basic Spell</Heading>
                  <Text mx={"auto"}>Require level 1</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/Player/Wizard/BasicSpell.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            <Card maxWidth="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/Player/Wizard/fireBallMini.png"
                  alt="basic spell mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3" align={"center"}>
                  <Heading>Fireball</Heading>
                  <Text mx={"auto"}>Require level 1</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/Player/Wizard/FireBall.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            <Card maxWidth="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/Player/Wizard/ShadowDoomMini.png"
                  alt="basic spell mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3" align={"center"}>
                  <Heading>Shadow Doom</Heading>
                  <Text mx={"auto"}>Require level 5</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/Player/Wizard/ShadowDoom.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            <Card maxWidth="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/Player/Wizard/RejuvenationMini.png"
                  alt="basic spell mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3" align={"center"}>
                  <Heading>Rejunevation</Heading>
                  <Text mx={"auto"}>Require level 10</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/Player/Wizard/Rejuvenation.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>{" "}
            <Card maxWidth="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/Player/Wizard/BlessMindMini.png"
                  alt="basic spell mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3" align={"center"}>
                  <Heading>Bless Mind</Heading>
                  <Text mx={"auto"}>Require level 15</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/Player/Wizard/BlessMind.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            {/* <Card maxWidth="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src=" /Player/Wizard/"
                  alt="basic spell mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3" align={"center"}>
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
