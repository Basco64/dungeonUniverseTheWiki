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
            <Card maxWidth="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/Player/Scout/BasicShotMini.png"
                  alt="basic spell mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3" align={"center"}>
                  <Heading>Basic Shot</Heading>
                  <Text mx={"auto"}>Require level 1</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/Player/Scout/BasicShot.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            <Card maxWidth="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/Player/Scout/PoisonArrowMini.png"
                  alt="basic spell mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3" align={"center"}>
                  <Heading>Poison Arrow</Heading>
                  <Text mx={"auto"}>Require level 1</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/Player/Scout/PoisonArrow.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            <Card maxWidth="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/Player/Scout/CripplingShotMini.png"
                  alt="basic spell mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3" align={"center"}>
                  <Heading>Crippling Shot</Heading>
                  <Text mx={"auto"}>Require level 5</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/Player/Scout/CripplingShot.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            <Card maxWidth="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/Player/Scout/PowerShotMini.png"
                  alt="basic spell mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3" align={"center"}>
                  <Heading>Power Shot</Heading>
                  <Text mx={"auto"}>Require level 10</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/Player/Scout/PowerShot.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>{" "}
            <Card maxWidth="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/Player/Scout/FindWeaknessMini.png"
                  alt="basic spell mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3" align={"center"}>
                  <Heading>Find Weakness</Heading>
                  <Text mx={"auto"}>Require level 15</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/Player/Scout/FindWeakness.png"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            {/* <Card maxWidth="lg" variant="outline" align={"center"}>
            <CardBody>
              <Image
                src=" /Player/Scout/"
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
                src=" /Player/Scout/"
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
