import React from "react";
import Image from "next/image";
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

export default function Fighter() {
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
                  src="/#"
                  alt="basic spell"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3" align={"center"}>
                  <Heading></Heading>
                  <Text mx={"auto"}>Require level 1</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/#"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            <Card maxWidth="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/#"
                  alt="basic spell mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3" align={"center"}>
                  <Heading></Heading>
                  <Text mx={"auto"}>Require level 1</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/#"
                  alt="basic spell"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            <Card maxWidth="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/#"
                  alt="spell lvl 5 mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3" align={"center"}>
                  <Heading></Heading>
                  <Text mx={"auto"}>Require level 5</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/#"
                  alt="spell lvl 5"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            <Card maxWidth="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/#"
                  alt="spell lvl 10 mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3" align={"center"}>
                  <Heading></Heading>
                  <Text mx={"auto"}>Require level 10</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/#"
                  alt="spell lvl 10"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>{" "}
            <Card maxWidth="lg" variant="outline" align={"center"}>
              <CardBody>
                <Image
                  src="/#"
                  alt="spell lvl 15 mini"
                  width={65}
                  height={65}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3" align={"center"}>
                  <Heading></Heading>
                  <Text mx={"auto"}>Require level 15</Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <Image
                  src="/#"
                  alt="spell lvl 15"
                  width={600}
                  height={230}
                />
              </CardFooter>
            </Card>
            <Card maxWidth="lg" variant="outline" align={"center"}>
            <CardBody>
              <Image
                src="/#"
                alt="spell lvl 20 mini"
                width={65}
                height={65}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3" align={"center"}>
                <Heading></Heading>
                <Text mx={"auto"}>Require level 20</Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Image
                src="/#"
                alt="spell lvl 20"
                width={600}
                height={230}
              />
            </CardFooter>
          </Card>
          </SimpleGrid>
        </Stack>
      </Flex>
    </>
  );
}
